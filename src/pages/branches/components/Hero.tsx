import { useState } from "react";
import branchesData from "../data";
import { Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  const [selectedBrand, setSelectedBrand] = useState('Honda');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const brands = [
    'Honda',
    'Royal Enfield',
    'Hyundai',
    'Scomadi',
    'Jeep',
    'Mercedes-benz',
    'Ford',
  ];

  const branches = branchesData

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
    <section className="bg-[#0A0A0A] px-8 min-h-screen flex items-center">
      <div className="container mx-auto pt-32">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-16 lg:mb-32 leading-tight">
            Our presence across regions
          </h2>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-16 lg:mb-32">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => handleBrandSelect(brand)}
            className={selectedBrand === brand ? `px-6 py-2 bg-white text-gray-900 text-nowrap rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300` : 'px-6 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300'}
          >
            {brand}
          </button>
        ))}
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
                <p className="text-[#A8A8A8] font-medium text-lg mb-4 leading-relaxed">
                  {branch.address}
                </p>
                <p className="text-[#A8A8A8] font-medium text-lg mb-4 leading-relaxed">
                  {branch.city}
                </p>
                <div className="flex items-start space-x-2">
                  <div className="flex items-start space-x-2 text-gray-300 mb-4 border border-white rounded-full w-fit px-4 py-2 text-base font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" /> 
                    <button className="text-white">
                      Maps
                    </button>
                  </div>
                  <div className="flex items-start space-x-2 text-gray-300 mb-4 border border-white rounded-full w-fit px-4 py-2 text-base font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
                    <Phone className="w-4 h-4 mt-1 flex-shrink-0" /> 
                    <button className="text-white">
                      Phone
                    </button>
                  </div>
                  <div className="flex items-start space-x-2 text-gray-300 mb-4 border border-white rounded-full w-fit px-4 py-2 text-base font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
                    <Mail className="w-4 h-4 mt-1 flex-shrink-0" /> 
                    <button className="text-white">
                      Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
