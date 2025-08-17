import { useState } from "react";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./components/Dashboard";
import NewsList from "./components/NewsList";
import NewsForm from "./components/NewsForm";
import { NewsPost, NewsFormData } from "../../types/news";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [posts, setPosts] = useState<NewsPost[]>([
    {
      id: "1",
      title:
        "Nusantara Group Expands Partnership with Leading Automotive Brands",
      content:
        "We are excited to announce our expanded partnership with several leading automotive brands, bringing more innovative vehicles and services to the Indonesian market. This strategic expansion reflects our commitment to providing customers with the best automotive solutions across various segments.",
      excerpt:
        "Nusantara Group announces strategic expansion with leading automotive brands to enhance customer offerings.",
      author: "Joe Ferry",
      publishedAt: "2024-01-15T10:00:00Z",
      imageUrl:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      category: "partnerships",
      status: "published",
      tags: ["partnership", "expansion", "automotive"],
    },
    {
      id: "2",
      title: "New Service Center Opens in Jakarta",
      content:
        "Our latest service center in Jakarta is now operational, featuring state-of-the-art equipment and highly trained technicians. This facility will serve customers across the greater Jakarta area with premium automotive services.",
      excerpt:
        "State-of-the-art service center opens in Jakarta with premium automotive services.",
      author: "Sarah Johnson",
      publishedAt: "2024-01-10T14:30:00Z",
      imageUrl:
        "https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      category: "business",
      status: "published",
      tags: ["service", "jakarta", "expansion"],
    },
    {
      id: "3",
      title: "Upcoming Electric Vehicle Launch Event",
      content:
        "Join us for an exclusive preview of the latest electric vehicles coming to Indonesia. This event will showcase cutting-edge technology and sustainable mobility solutions.",
      excerpt:
        "Exclusive preview event for latest electric vehicles and sustainable mobility solutions.",
      author: "Michael Chen",
      publishedAt: "2024-01-08T09:00:00Z",
      imageUrl:
        "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      category: "events",
      status: "draft",
      tags: ["electric", "event", "technology"],
    },
  ]);

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
        />
      );
    }

    if (activeTab === "dashboard") {
      return <Dashboard posts={posts} />;
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
