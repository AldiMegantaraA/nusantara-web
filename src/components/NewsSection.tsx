import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsPost } from '../types/news';
import { fetchNews } from '../service/api';

const NewsSection = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await fetchNews('news');
        setPosts(data);
      } catch (err) {
        console.error("Failed to load news:", err);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4 block">
            — Highlights —
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            Latest News
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {
            loading ? 
            <h4>Loading...</h4> : 
            <>
              {posts.map((news) => (
              <div key={news.id} className="group cursor-pointer">
                <Link to={`/news/${news.title}`} className="block">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Date */}
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(news.publishedAt)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                      {news.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-300 leading-relaxed line-clamp-3">
                      {news.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="pt-4">
                      <span className="inline-flex items-center text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 group-hover:border-white">
                        Read
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            </>
          }
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/news"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            View all latest news
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;