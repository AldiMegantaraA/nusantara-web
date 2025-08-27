import { useEffect, useState } from "react";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./components/Dashboard";
import NewsList from "./components/NewsList";
import NewsForm from "./components/NewsForm";
import { NewsPost, NewsFormData } from "../../types/news";
import { fetchNews } from "../../service/api";
import SubscribeList from "./components/SubscribeList";
import MessageList from "./components/MessageList";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [subscribe, setSubscribe] = useState<{id: '', email: '', joinDate: ''}[]>([]);
  const [message, setMessage] = useState<{
        id: '',
        name: '', 
        phoneNumber: '', 
        category: '', 
        companyName: '',
        email: '',
        message: '',
        date: ''
    }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await fetchNews("news");
        setPosts(data);
      } catch (err) {
        console.error("Failed to load news:", err);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
    async function loadSubscribe() {
      try {
        const data = await fetchNews("subscribe");
        setSubscribe(data);
      } catch (err) {
        console.error("Failed to load news:", err);
      } finally {
        setLoading(false);
      }
    }
    loadSubscribe();
    async function loadMessage() {
      try {
        const data = await fetchNews("message");
        setMessage(data);
      } catch (err) {
        console.error("Failed to load news:", err);
      } finally {
        setLoading(false);
      }
    }
    loadMessage();
  }, []);

  const [editingPost, setEditingPost] = useState<NewsPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [viewingPost, setViewingPost] = useState<NewsPost | null>(null);

  const handleSave = (data: NewsFormData) => {
    if (editingPost) {
      // Update existing post
      setPosts((prev) =>
        prev.map((post) =>
          post.id === editingPost.id
            ? {
                ...post,
                ...data,
                tags: data.tags
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter((tag) => tag),
              }
            : post
        )
      );
      setEditingPost(null);
    } else {
      // Create new post
      const newPost: NewsPost = {
        id: Date.now().toString(),
        ...data,
        publishedAt: new Date().toISOString(),
        tags: data.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      };
      setPosts((prev) => [newPost, ...prev]);
      setIsCreating(false);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts((prev) => prev.filter((post) => post.id !== id));
    }
  };

  const handleEdit = (post: NewsPost) => {
    setEditingPost(post);
    setIsCreating(false);
    setViewingPost(null);
  };

  const handleCreate = () => {
    setIsCreating(true);
    setEditingPost(null);
    setViewingPost(null);
  };

  const handleCancel = () => {
    setEditingPost(null);
    setIsCreating(false);
    setViewingPost(null);
  };

  const handleView = (post: NewsPost) => {
    setViewingPost(post);
    setEditingPost(null);
    setIsCreating(false);
  };

  const renderContent = () => {
    if (activeTab === "news") {
      if (isCreating || editingPost) {
        return (
          <NewsForm
            post={editingPost || undefined}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      }

      if (viewingPost) {
        return (
          <div className="rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">View Post</h2>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleEdit(viewingPost)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Edit Post
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors duration-200"
                >
                  Back to List
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <img
                  src={viewingPost.imageUrl}
                  alt={viewingPost.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {viewingPost.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {viewingPost.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {viewingPost.excerpt}
              </p>
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-800">
                  {viewingPost.content}
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center">
                <p className="text-sm text-gray-500">By {viewingPost.author}</p>
                <p className="text-sm text-gray-500">
                  Published on{" "}
                  {new Date(viewingPost.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        );
      }

      return (
        <NewsList
          posts={posts}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
          onCreate={handleCreate}
          loading={loading}
        />
      );
    }

    if (activeTab === "dashboard") {
      return <Dashboard posts={posts} loading={loading} />;
    }

    if (activeTab === "subscribe") {
      return <SubscribeList subscribe={subscribe} loading={loading} />;
    }

    if (activeTab === "message") {
      return <MessageList message={message} loading={loading} />;
    }

    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h2>
        <p className="text-gray-600">This section is under development.</p>
      </div>
    );
  };

  return (
    <AdminLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminPage;
