import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import NusantaraLogo from "../assets/img/nusantara-logo.svg"; // Adjust the path as necessary

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Our Story", hasDropdown: true },
    { name: "Brands", hasDropdown: false },
    { name: "Branches", hasDropdown: false },
    { name: "Partnership", hasDropdown: false },
    { name: "News", hasDropdown: false },
    { name: "Community", hasDropdown: false },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[88px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={NusantaraLogo}
              alt="Nusantara Group Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium">
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
