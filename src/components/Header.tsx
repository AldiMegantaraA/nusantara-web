import { useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NusantaraLogo from "../assets/img/nusantara-logo.svg";
import NavbarImage1 from "../assets/img/navbar-image-1.png";
import NavbarImage2 from "../assets/img/navbar-image-2.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOurStoryOpen, setIsOurStoryOpen] = useState(false);

  const navigationItems = [
    {
      name: "Our Story",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Journey", href: "/our-journey" },
        { name: "Our Culture", href: "/our-culture" },
      ],
    },
    { name: "Brands", href: "/brands", hasDropdown: false },
    { name: "Branches", href: "/branches", hasDropdown: false },
    { name: "Partnership", hasDropdown: false },
    { name: "News", hasDropdown: false },
    { name: "Community", hasDropdown: false },
  ];

  const handleDropdownItemClick = (href: string | undefined) => {
    // For now, just log the navigation - you can implement actual routing later
    console.log(`Navigating to: ${href}`);

    href && navigate(href);
    // setIsOurStoryOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleDropdownItemClick("/")}
          >
            <img src={NusantaraLogo} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="p-2 flex items-center space-x-1 text-[#F2F2F2] hover:text-white transition-colors duration-200 text-base font-medium"
                  
                  onClick={() =>
                    item.hasDropdown && setIsOurStoryOpen(!isOurStoryOpen)
                  }
                >
                  <span onClick={() => handleDropdownItemClick(item?.href)}>
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOurStoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && isOurStoryOpen && (
                  <div
                    className="fixed top-8 mt-10 left-0 w-screen bg-white shadow-2xl z-50 overflow-hidden"
                    onClick={() => 
                      {
                        if(isOurStoryOpen) {
                          setIsOurStoryOpen(true)
                        } else {
                          setIsOurStoryOpen(false)
                        }
                      }
                    }
                  >
                    <div className="flex gap-0">
                      {/* Our Journey */}
                      <div
                        className="group cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => {
                          handleDropdownItemClick("/our-story/journey");
                          setIsOurStoryOpen(false);
                        }}
                      >
                        <div className="p-4">
                          <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                              src={NavbarImage1}
                              alt="Our Journey"
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-[#711917] font-semibold text-sm">
                              Our Journey
                            </h3>
                            <ArrowRight className="w-4 h-4 text-[#711917] group-hover:text-[#711917] group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </div>
                      </div>

                      {/* Our Culture */}
                      <div
                        className="group cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => {
                          handleDropdownItemClick("/our-story/culture");
                          setIsOurStoryOpen(false);
                        }}
                      >
                        <div className="p-4">
                          <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                              src={NavbarImage2}
                              alt="Our Culture"
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-[#711917] font-semibold text-sm">
                              Our Culture
                            </h3>
                            <ArrowRight className="w-4 h-4 text-[#711917] group-hover:text-[#711917] group-hover:translate-x-1 transition-all duration-200" />
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
