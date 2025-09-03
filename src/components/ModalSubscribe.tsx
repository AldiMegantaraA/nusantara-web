import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

export default function ModalSubscribe({
    isOpenModal,
    onClose,
  }: {
    isOpenModal: boolean;
    onClose: () => void;
  }) {
    const [isOpen, setIsOpen] = useState(isOpenModal);
  
    // sync prop -> state
    useEffect(() => {
      setIsOpen(isOpenModal);
    }, [isOpenModal]);
  const [email, setEmail] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = "POST";
      const response = await fetch(`${API_URL}?type=subscribe`, {
        method,
        headers: {
          'Content-Type': 'text/plain',
        },
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify({email: email})
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for subscribing! 🎉 You’re now part of our community.');
        setEmail('')
      } else {
        alert("Failed to subscribing!");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to API");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black text-white rounded-xl p-10 w-full max-w-lg relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={() => {
            setIsOpen(false);
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <h2 className="text-lg font-medium mb-4">
          Subscribe to our newsletter and be the first to know about new branch
          openings, exclusive brand updates, and event announcements.
        </h2>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex items-center bg-gray-900 rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
            required
          />
            <button
                type="submit"
                disabled={loading}
                className="bg-red-700 hover:bg-red-800 px-4 py-3"
            >
                <span>{loading ? 'Subscribing...' : <ArrowRight className="w-4 h-4 text-white" />}</span>
            </button>
        </form>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          We will use the email address that you provide on this form to be in
          touch with you and to provide updates and marketing. You can change
          your mind at any time by clicking the unsubscribe link in the footer
          of any email you receive from us.
        </p>
      </div>
    </div>
  );
}
