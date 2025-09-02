import React, { useRef, useState } from "react";
import { Save, X, Upload, Eye, ChevronLeftCircle } from "lucide-react";
import { NewsPost, NewsFormData } from "../../../types/news";
import axios from "axios";

interface NewsFormProps {
  post?: NewsPost;
  onSave: (data: NewsFormData) => void;
  onCancel: () => void;
}

const API_URL = "https://script.google.com/macros/s/AKfycbzitNyzBUP5QVrZCNd1j3tdiA7b6qgQMm4rAX6zadBqhYAwVItUmtjMz4uuAY12Xh4/exec";

const NewsForm: React.FC<NewsFormProps> = ({ post, onSave, onCancel }) => {
  const [formData, setFormData] = useState<NewsFormData>({
    title: post?.title || "",
    content: post?.content || "",
    excerpt: post?.excerpt || "",
    author: post?.author || "",
    imageUrl: post?.imageUrl || "",
    category: post?.category || "general",
    status: post?.status || "draft",
    tags: post?.tags?.join(", ") || "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const [isPreview, setIsPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [image, setImage] = useState(post?.imageUrl || '');
  const [preview, setPreview] = useState<string | null>(post?.imageUrl || null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = "POST";
      const response = await fetch(`${API_URL}?type=news`, {
        method,
        headers: {
          'Content-Type': 'text/plain',
        },
        mode: 'cors',
        redirect: 'follow',
        body: 
          post ? JSON.stringify({ section: 'news', id: post.id, ...formData, imageUrl: image, tags: Array.isArray(post.tags) ? post.tags.join(", ") : post.tags, }) : JSON.stringify({section: 'news', ...formData, imageUrl: image}),
      });

      const result = await response.json();

      if (result.success) {
        onSave(formData); // panggil callback untuk update state parent
      } else {
        alert(result.message || "Failed to save data");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to API");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const categories = [
    "general",
    "automotive",
    "technology",
    "business",
    "events",
    "partnerships",
  ];

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setLoadingUpload(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'nusantara'); // You need to set this in your Cloudinary account
        formData.append('api_key', '144679741298288');
  
        try {
          const response = await axios.post('https://api.cloudinary.com/v1_1/dqyervm1b/image/upload', formData);
          const imageUrl = response.data.secure_url; // The URL of the uploaded image
  
          // Set the image URL in your state
          setPreview(imageUrl);
          setImage(imageUrl);
          setLoadingUpload(false);
        } catch (error) {
          if(error.response.data.error.message.includes('large')){
            setError('File size too large (Maximum 10MB), please compress image file size before upload!');
          }
          setLoadingUpload(false);
        }
      } else {
        setError('Please select an image file');
        setLoadingUpload(false);
      }
    }
  };

  if (isPreview) {
    return (
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
          <button
            onClick={() => setIsPreview(false)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Back to Edit
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <img
              src={
                formData.imageUrl ||
                "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
              }
              alt={formData.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
              {formData.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {formData.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{formData.excerpt}</p>
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-800">
              {formData.content}
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">By {formData.author}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-4 p-6 border-b border-gray-200">
        <ChevronLeftCircle
          onClick={onCancel}
          className="cursor-pointer"
          size="24"
        />
        <h2 className="text-2xl font-bold text-gray-900">
          {post ? "Edit News Post" : "Create New Post"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Enter news title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author *
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Author name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt *
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="Brief description of the news"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={12}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="Write your news content here..."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="tag1, tag2, tag3"
            />
          </div>
        </div>
        {
          loadingUpload ? 
          <h4 className="text-center">Uploading image...</h4>
          :
          <>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image URL
            </label>
            <p className="text-red-600">{error}</p>
            <div className="flex space-x-2">
              <input
                type="url"
                name="imageUrl"
                value={image}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />

              {/* Tombol upload */}
              <button
                type="button"
                onClick={handleButtonClick}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Upload className="w-4 h-4" />
                <span>Upload</span>
              </button>

              {/* Input file tersembunyi */}
              <input
                type="file"
                accept="image/*"
                name="imageUrl"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
          </>
        }

        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => setIsPreview(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              {
                loading ?
                <span>Loading..</span>
                :
                <span>{post ? "Update" : "Create"} Post</span>

              }
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;
