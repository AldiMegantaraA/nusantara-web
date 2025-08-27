import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search, Filter } from 'lucide-react';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allNews = [
    {
      id: '1',
      title: 'Nusantara Group Expands Partnership with Leading Automotive Brands',
      excerpt: 'We are excited to announce our expanded partnership with several leading automotive brands, bringing more innovative vehicles and services to the Indonesian market.',
      content: 'We are excited to announce our expanded partnership with several leading automotive brands, bringing more innovative vehicles and services to the Indonesian market. This strategic expansion reflects our commitment to providing customers with the best automotive solutions across various segments.',
      date: '20 May, 2025',
      author: 'Joe Ferry',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Partnership',
      featured: true
    },
    {
      id: '2',
      title: 'New Service Center Opens in Jakarta',
      excerpt: 'Our latest service center in Jakarta is now operational, featuring state-of-the-art equipment and highly trained technicians for premium automotive services.',
      content: 'Our latest service center in Jakarta is now operational, featuring state-of-the-art equipment and highly trained technicians. This facility will serve customers across the greater Jakarta area with premium automotive services.',
      date: '18 May, 2025',
      author: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Business',
      featured: false
    },
    {
      id: '3',
      title: 'Upcoming Electric Vehicle Launch Event',
      excerpt: 'Join us for an exclusive preview of the latest electric vehicles coming to Indonesia. This event will showcase cutting-edge technology and sustainable mobility.',
      content: 'Join us for an exclusive preview of the latest electric vehicles coming to Indonesia. This event will showcase cutting-edge technology and sustainable mobility solutions.',
      date: '15 May, 2025',
      author: 'Michael Chen',
      image: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Events',
      featured: false
    },
    {
      id: '4',
      title: 'Honda Launches New Hybrid Technology',
      excerpt: 'Honda introduces revolutionary hybrid technology that promises better fuel efficiency and reduced emissions for Indonesian drivers.',
      content: 'Honda introduces revolutionary hybrid technology that promises better fuel efficiency and reduced emissions for Indonesian drivers. This breakthrough represents a significant step forward in sustainable automotive solutions.',
      date: '12 May, 2025',
      author: 'David Wong',
      image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Technology',
      featured: false
    },
    {
      id: '5',
      title: 'Mercedes-Benz Showroom Grand Opening',
      excerpt: 'Experience luxury redefined at our new Mercedes-Benz showroom, featuring the latest models and premium customer service.',
      content: 'Experience luxury redefined at our new Mercedes-Benz showroom, featuring the latest models and premium customer service. The showroom represents the pinnacle of automotive luxury and innovation.',
      date: '10 May, 2025',
      author: 'Lisa Anderson',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Business',
      featured: true
    },
    {
      id: '6',
      title: 'Automotive Industry Trends 2025',
      excerpt: 'Explore the latest trends shaping the automotive industry in Indonesia, from electric vehicles to smart connectivity features.',
      content: 'Explore the latest trends shaping the automotive industry in Indonesia, from electric vehicles to smart connectivity features. Our analysis covers market developments and future opportunities.',
      date: '8 May, 2025',
      author: 'Robert Kim',
      image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Industry',
      featured: false
    }
  ];

  const categories = ['all', 'Partnership', 'Business', 'Events', 'Technology', 'Industry'];

  const filteredNews = allNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = allNews.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

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
      {featuredNews.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <Link key={news.id} to={`/news/${news.id}`} className="group">
                  <div className="rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative h-64">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {news.date}
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
      )}

      {/* All News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">All News</h2>
          
          {regularNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((news) => (
                <Link key={news.id} to={`/news/${news.id}`} className="group">
                  <div className="rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative h-48">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {news.date}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">By {news.author}</span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">No news found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;