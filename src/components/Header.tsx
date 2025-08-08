import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOurStoryOpen, setIsOurStoryOpen] = useState(false);

  const navigationItems = [
    { name: 'Our Story', hasDropdown: true, dropdownItems: [
        { name: 'Our Journey', href: '/our-journey' },
        { name: 'Our Culture', href: '/our-culture' }
      ]
    },
    { name: 'Brands', hasDropdown: false },
    { name: 'Branches', hasDropdown: false },
    { name: 'Partnership', hasDropdown: false },
    { name: 'News', hasDropdown: false },
    { name: 'Community', hasDropdown: false },
  ];

  const handleDropdownItemClick = (href: string) => {
    // For now, just log the navigation - you can implement actual routing later
    console.log(`Navigating to: ${href}`);
    setIsOurStoryOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-white rounded transform rotate-45 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-900 rounded transform -rotate-45"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  onMouseEnter={() => item.hasDropdown && setIsOurStoryOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsOurStoryOpen(false)}
                  onClick={() => item.hasDropdown && setIsOurStoryOpen(!isOurStoryOpen)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOurStoryOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && isOurStoryOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
                    onMouseEnter={() => setIsOurStoryOpen(true)}
                    onMouseLeave={() => setIsOurStoryOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {/* Our Journey */}
                      <div 
                        className="group cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => handleDropdownItemClick('/our-journey')}
                      >
                        <div className="p-4">
                          <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                              src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                              alt="Our Journey"
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-gray-800 font-semibold text-sm">Our Journey</h3>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Our Culture */}
                      <div 
                        className="group cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => handleDropdownItemClick('/our-culture')}
                      >
                        <div className="p-4">
                          <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                              src="https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                              alt="Our Culture"
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-gray-800 font-semibold text-sm">Our Culture</h3>
                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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