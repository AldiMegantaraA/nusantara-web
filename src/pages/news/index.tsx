import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search, Filter } from 'lucide-react';
import { NewsPost } from '../../types/news';
import { fetchNews } from '../../service/api';

const NewsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [posts, setPosts] = useState<NewsPost[]>([]);
    const [loading, setLoading] = useState(true);

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
        } catch (err) {
          console.error("Failed to load news:", err);
        } finally {
          setLoading(false);
        }
      }
      loadNews();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      };

  const allNews = posts;

  const filteredNews = allNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch;
  });

    if(loading) {
        return (
            <>
                <section className="pt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4 block">
                        — Stay Updated —
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Latest News
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Stay informed with the latest updates from Nusantara Group, 
                        covering automotive innovations, partnerships, and industry insights.
                        </p>
                    </div>
                    </div>
                </section>
                <div className="min-h-[50vh] flex items-center justify-center">
                    <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Loading...</h1>
                    </div>
                </div>
            </>
        )
    } else {

        return (
            <div>
            
            {/* Hero Section */}
            <section className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-4 block">
                    — Stay Updated —
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Latest News
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Stay informed with the latest updates from Nusantara Group, 
                    covering automotive innovations, partnerships, and industry insights.
                    </p>
                </div>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="gap-4 items-center justify-between">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                    </div>
                </div>
                </div>
            </section>

            {/* Featured News */}
            {filteredNews.length > 0 ? (
                <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-white mb-8">All News</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {posts.map((news) => (
                        <Link key={news.id} to={`/news/${slugify(news.title)}`} className="group">
                        <div className="rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                            <div className="relative h-64">
                            <img
                                src={news.imageUrl}
                                alt={news.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                Featured
                                </span>
                            </div>
                            </div>
                            <div className="">
                            <div className="flex items-center text-gray-400 text-sm mb-3">
                                <Calendar className="w-4 h-4 mr-2" />
                                {formatDate(news.publishedAt)}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                                {news.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{news.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400">By {news.author}</span>
                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                    </div>
                </div>
                </section>
            )
            :
                <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                    <Search className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">No news found</h3>
                    <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
            }
            </div>
        );
    };
};

export default NewsPage;