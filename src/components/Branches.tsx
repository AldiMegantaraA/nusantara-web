import { useState } from "react";
import { ChevronDown, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import branchesData from "../pages/branches/data";

const Branches = () => {
  const [selectedBrand, setSelectedBrand] = useState('Honda');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const brands = [
    'Honda',
    'Royal Enfield',
    'Hyundai',
    'Scomadi',
    // 'Jeep',
    // 'Mercedes-benz',
    'Ford',
    'Chevrolet',
    'Nusantara Star Service',
  ];

  

  const currentBranches = branchesData[selectedBrand] || [];

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setIsDropdownOpen(false);
  };

  const handleViewOnMap = (branch) => {
    // You can implement Google Maps integration here
    console.log('View on map:', branch);
    // Example: window.open(`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`);
  };

  return (
    <section className="bg-[#4B4B4B] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="mb-6">
              <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                — Branches
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nusantara Group <br/> Branches
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-[#A8A8A8] text-[28px] font-medium mb-6 leading-relaxed">
            We trust that our services will complement your mobility wherever you are located. See our locations and select your preferred brand and branch.
            </p>
          </div>
        </div>

        {/* Brand Selector */}
        <div className="mb-8">
          <div className="flex items-center justify-between space-x-4 mb-6">
            <span className="text-gray-400 text-sm font-medium">
              Select brand
            </span>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="border-white border-[1px] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors duration-300 flex items-center space-x-2 min-w-[120px] justify-between"
              >
                <span>{selectedBrand}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 p-1 mt-2 bg-[#0A0A0A] rounded-lg shadow-lg z-10 min-w-[120px]">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandSelect(brand)}
                      className="block w-full text-left text-nowrap px-4 py-2 text-white hover:bg-[#711917] rounded-lg transition-colors duration-200"
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
          {currentBranches.map((branch, index) => (
            <div
              key={index}
              className="hover:transform hover:scale-105 transition-all duration-300"
            >
              {
                branch.name === 'Royal Enfield Depok' || branch.name === 'Royal Enfield Bogor' ? 
                <div className="w-80 h-80 overflow-hidden rounded-2xl">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-80 h-full object-cover object-right"
                  />
                </div>
                :
                branch.name === 'Royal Enfield Bekasi' ? 
                <div className="w-80 h-80 overflow-hidden rounded-2xl">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-80 h-full object-fill"
                  />
                </div>
                :
                branch.name === 'Hyundai Banjarmasin' ? 
                <div className="w-full h-80 overflow-hidden rounded-2xl">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-fill"
                  />
                </div>
                :
                <div className="w-80 h-80 overflow-hidden rounded-2xl">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-80 h-full object-cover"
                  />
                </div>
              }

              <div className="py-6">
                <h3 className="text-[28px] font-bold text-white mb-3">
                  {branch.name}
                </h3>
                <p className="text-[#A8A8A8] font-medium text-lg leading-relaxed">
                  {branch.address}
                </p>
                <p className="text-[#A8A8A8] font-medium text-lg mb-4 leading-relaxed">
                  {branch.city}
                </p>
                <div className="flex items-start space-x-2">
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name)}`} target="_blank" className="flex items-start space-x-2 text-gray-300 mb-4 border border-white rounded-full w-fit px-4 py-2 text-base font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" /> 
                    <button className="text-white">
                      Maps
                    </button>
                  </a>
                  <a href={`tel:${branch.number}`} className="flex items-start space-x-2 text-gray-300 mb-4 border border-white rounded-full w-fit px-4 py-2 text-base font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
                    <Phone className="w-4 h-4 mt-1 flex-shrink-0" /> 
                    <button className="text-white">
                      Phone
                    </button>
                  </a>
                  <a href={`mailto:${branch.email}`} target="_blank" className="flex items-start space-x-2 text-gray-300 mb-4 border border-white rounded-full w-fit px-4 py-2 text-base font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
                    <Mail className="w-4 h-4 mt-1 flex-shrink-0" /> 
                    <button className="text-white">
                      Email
                    </button>
                  </a>
                </div>
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
