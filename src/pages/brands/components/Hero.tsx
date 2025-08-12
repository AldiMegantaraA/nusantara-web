const Hero = () => {
  const brands = [
    {
      name: "Honda",
      image:
        "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      logo: "HONDA",
    },
    {
      name: "Royal Enfield",
      image:
        "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      logo: "ROYAL ENFIELD",
    },
    {
      name: "Hyundai",
      image:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      logo: "HYUNDAI",
    },
    {
      name: "Scomadi",
      image:
        "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      logo: "Scomadi",
    },
    {
      name: "Chevrolet",
      image:
        "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      logo: "CHEVROLET",
    },
    {
      name: "Mercedes",
      image:
        "https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      logo: "Mercedes-Benz",
    },
    {
      name: "Ford",
      image:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      logo: "FORD",
    },
    {
      name: "Chevrolet",
      image:
        "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      logo: "CHEVROLET",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-32 leading-tight">
            Trusted Brands, <br />
            Proven Performance
          </h2>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-square hover:transform hover:scale-105 transition-all duration-500"
            >
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

export default Hero;
