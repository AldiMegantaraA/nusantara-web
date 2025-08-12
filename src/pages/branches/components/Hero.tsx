const Hero = () => {
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
    <section className="bg-[#0A0A0A] min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-32 leading-tight">
            Our presence across regions
          </h2>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-32">
          <button className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
            Honda
          </button>
          <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
            Royal Enfield
          </button>
          <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
            Hyundai
          </button>
          <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
            Scomadi
          </button>
          <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
            Ford
          </button>
          <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
            Mercedes-benz
          </button>
          <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
            Chevrolet
          </button>
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
      </div>
    </section>
  );
};

export default Hero;
