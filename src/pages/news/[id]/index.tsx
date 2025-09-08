import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { NewsPost } from '../../../types/news';
import { fetchNews } from '../../../service/api';

const NewsDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [posts, setPosts] = useState<NewsPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentNews, setCurrentNews] = useState<NewsPost | null>(null);

    function slugify(title: string) {
        return title
            .toLowerCase()                 
            .replace(/\s+/g, "-")        
            .replace(/[^a-z0-9-]/g, "") 
    }
  
    useEffect(() => {
      async function loadNews() {
        try {
          const data = await fetchNews('news'); // <- API call
          setPosts(data);
  
          // cari news sesuai id
          const found = data.find((post: NewsPost) => slugify(post.title) === slugify(id as string));
          setCurrentNews(found || null);
        } catch (err) {
          console.error("Failed to load news:", err);
        } finally {
          setLoading(false);
        }
      }
      loadNews();
    }, [id]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      };

    function containsHtmlTags(str) {
        // This regex looks for an opening angle bracket followed by a letter,
        // then any characters (including newlines), and finally a closing angle bracket.
        return /<[a-z][\s\S]*>/i.test(str);
    }

  if (!currentNews) {
    if(loading) {
        return (
            <div className="min-h-screen  flex items-center justify-center">
                <div className="text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Loading...</h1>
                <Link to="/news" className="text-blue-400 hover:text-blue-300">
                    Back to News
                </Link>
                </div>
            </div>
        )
    } else {
        return (
          <div className="min-h-screen  flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">News not found</h1>
              <Link to="/news" className="text-blue-400 hover:text-blue-300">
                Back to News
              </Link>
            </div>
          </div>
        );
    }
  }

  const relatedNews = posts.filter(news => news.title !== id);

  const shareUrl = window.location.href;
  const shareTitle = currentNews.title;

  return (
    <div className="min-h-screen ">
      
      {/* Back Navigation */}
      <div className="pt-20 pb-8 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/news" 
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category and Meta */}
          <div className="mb-6">
            <span className="inline-block bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {currentNews.category}
            </span>
            <div className="flex items-center text-gray-400 text-sm space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(currentNews.publishedAt)}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {currentNews.author}
              </div>
              <span>{currentNews.category}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {currentNews.title}
          </h1>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={currentNews.imageUrl}
              alt={currentNews.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-700">
            <span className="text-gray-400 text-sm font-medium">Share:</span>
            <div className="flex space-x-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2  text-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2  text-gray-300 rounded-full hover:bg-blue-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2  text-gray-300 rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {
                containsHtmlTags(currentNews.content) ?
                <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: currentNews.content }}
                ></div>

                :
                <div className="text-gray-300 leading-relaxed space-y-6" >
                {currentNews.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                    </p>
                ))}
                </div>
            }
          </div>
        </div>
      </article>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className=" py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((news) => (
                <Link key={news.id} to={`/news/${news.id}`} className="group">
                  <div className="bg-gray-700 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-4">
                      <div className="text-gray-400 text-sm mb-2">{formatDate(news.publishedAt)}</div>
                      <h3 className="text-white font-semibold group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsDetailPage;