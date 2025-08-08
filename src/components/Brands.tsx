import { ChevronRight } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: 'Honda',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      logo: 'HONDA'
    },
    {
      name: 'Royal Enfield',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      logo: 'ROYAL ENFIELD'
    },
    {
      name: 'Hyundai',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      logo: 'HYUNDAI'
    },
    {
      name: 'Scomadi',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      logo: 'Scomadi'
    },
    {
      name: 'Chevrolet',
      image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      logo: 'CHEVROLET'
    },
    {
      name: 'Mercedes',
      image: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      logo: 'Mercedes-Benz'
    },
    {
      name: 'Ford',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      logo: 'FORD'
    },
    {
      name: 'Chevrolet',
      image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      logo: 'CHEVROLET'
    }
  ];

  return (
    <section className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="mb-6">
              <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                — Brands
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Trusted Brands,
              <br />
              Proven Performance
            </h2>
          </div>
          
          <div className="lg:max-w-md">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We represent top automotive brands —each chosen for reliability, innovation, and customer satisfaction.
            </p>
            <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                <span>Explore our brands</span>
                <div className="w-6 h-6 bg-[#711917] rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
            </button>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-square hover:transform hover:scale-105 transition-all duration-500">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl text-center px-4">
                  {brand.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;