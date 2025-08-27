import React, { useEffect, useState } from "react";
import { LayoutDashboard, FileText, LogOut, UserIcon, MessageCircle } from "lucide-react";
import store from "store";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

interface AdminLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
  children,
  activeTab,
  onTabChange,
}) => {
  const navigate = useNavigate();
  const authorized = store.get("authorized");
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "news", label: "News Management", icon: FileText },
    { id: "subscribe", label: "Subscribe Management", icon: UserIcon },
    { id: "message", label: "Message Management", icon: MessageCircle },
  ];
  const [triggerLogout, setTriggerLogout] = useState<boolean>(false);

  useEffect(() => {
    if (!authorized) {
      navigate(`/admin/login`);
    }
  }, [navigate, authorized, triggerLogout]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                  activeTab === item.id
                    ? "bg-gray-50 border-r-2 border-gray-900 text-gray-900"
                    : "text-gray-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6">
          <button
            onClick={() => {
              setTriggerLogout(!triggerLogout);
              store.remove("authorized");
              notification.success({
                message: "Logout Successful",
                description: "You have been successfully logged out!",
              });
            }}
            className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
