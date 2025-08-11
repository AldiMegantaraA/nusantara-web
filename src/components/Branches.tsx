import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const Branches = () => {
  const [selectedBrand, setSelectedBrand] = useState("Scomadi");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const brands = [
    "Scomadi",
    "Honda",
    "Royal Enfield",
    "Hyundai",
    "Mercedes",
    "Ford",
    "Chevrolet",
  ];

  const branches = [
    {
      name: "Scomadi Jakarta",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "Service Center",
      image:
        "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      name: "Scomadi Bandung",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "",
      image:
        "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      name: "Scomadi Bali",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "Service Center",
      image:
        "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="mb-6">
              <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                — Branches
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lorem ipsum
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Lorem ipsum sir dolor amet Lorem ipsum sir dolor amet Lorem ipsum
              sir dolor amet Lorem ipsum sir dolor amet.
            </p>
          </div>
        </div>

        {/* Brand Selector */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-gray-400 text-sm font-medium">
              Select brand
            </span>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors duration-300 flex items-center space-x-2 min-w-[120px] justify-between"
              >
                <span>{selectedBrand}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-gray-700 rounded-lg shadow-lg z-10 min-w-[120px]">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => {
                        setSelectedBrand(brand);
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                    {branch.type}
                  </span>
                  {branch.serviceType && (
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                      {branch.serviceType}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {branch.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {branch.address}
                </p>
                <button className="text-white border border-gray-500 px-4 py-2 rounded-full text-sm font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
                  View on map
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 mx-auto transform hover:scale-105">
            <span>View all branches</span>
            <div className="w-6 h-6 bg-[#711917] rounded-full flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Branches;
