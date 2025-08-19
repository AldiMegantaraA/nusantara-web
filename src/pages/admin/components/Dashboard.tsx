import React from 'react';
import { FileText, Users, Eye, TrendingUp } from 'lucide-react';
import { NewsPost } from '../../../types/news';

interface DashboardProps {
  posts: NewsPost[];
  loading: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ posts, loading }) => {
  const stats = [
    {
      title: 'Total Posts',
      value: posts.length,
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      title: 'Published',
      value: posts.filter(p => p.status === 'published').length,
      icon: Eye,
      color: 'bg-green-500'
    },
    {
      title: 'Drafts',
      value: posts.filter(p => p.status === 'draft').length,
      icon: Users,
      color: 'bg-yellow-500'
    },
    {
      title: 'This Month',
      value: posts.filter(p => {
        const postDate = new Date(p.publishedAt);
        const now = new Date();
        return postDate.getMonth() === now.getMonth() && postDate.getFullYear() === now.getFullYear();
      }).length,
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const recentPosts = posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Nusantara Group admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Recent Posts</h2>
        </div>
        <div className="p-6">
          {
            loading? 
            <h4 className='p-4 text-center'>Loading...</h4>
            :
            <>
            
            {recentPosts.length > 0 ? (
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{post.title}</h3>
                      <p className="text-sm text-gray-500">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs text-gray-400">By {post.author}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          post.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No posts created yet</p>
              </div>
            )}
            </>
            
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;