const Services = () => {
  const services = [
    {
      title: 'Marketing',
      isActive: true
    },
    {
      title: 'Branding',
      isActive: false
    },
    {
      title: 'Activation',
      isActive: false
    },
    {
      title: 'Technology',
      isActive: false
    }
  ];

  return (
    <section className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              — How we can help
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
              For principal
            </button>
            <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
              For customer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Motorcycles in showroom"
                className="w-full h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Service List */}
            <div className="space-y-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
                    service.isActive 
                      ? 'text-white border-b-2 border-white pb-2' 
                      : 'text-gray-600 hover:text-gray-400'
                  }`}>
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                We execute localized launch events, roadshows, and test drive programs tailored to generate awareness and engagement for new automotive entries into the Indonesian market.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-16 lg:mt-24">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Royal Enfield dealership"
              className="w-full h-[300px] lg:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            
            {/* Royal Enfield Logo Overlay */}
            <div className="absolute bottom-8 right-8">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-bold text-lg">ROYAL ENFIELD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;