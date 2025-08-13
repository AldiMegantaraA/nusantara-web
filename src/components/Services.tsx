import ServicesImage from "../assets/img/services-image.png";

const Services = () => {
  const services = [
    {
      title: "Who we are",
      isActive: true,
    },
    {
      title: "Our vision",
      isActive: false,
    },
    {
      title: "Our mission",
      isActive: false,
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={ServicesImage}
                alt="Motorcycles in showroom"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-between h-full">
            {/* Header */}
            <div>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
                <div className="mb-6 lg:mb-0">
                  <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                    — How we can help
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                    Company
                  </button>
                  <button className="px-6 py-2 border border-[#A8A8A8] text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
                    Sales
                  </button>
                  <button className="px-6 py-2 border border-[#A8A8A8] text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
                    After-sales
                  </button>
                </div>
              </div>

              {/* Service List */}
              <div className="space-y-6 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="group cursor-pointer">
                    <h3
                      className={`text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300 ${
                        service.isActive
                          ? "text-white border-b-2 border-white pb-2"
                          : "text-[#4B4B4B] hover:text-gray-400"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="font-medium space-y-6 text-[#A8A8A8] text-xl leading-relaxed">
              <p>
                Founded with a deep passion for mobility and customer
                satisfaction, Nusantara Group has grown into a dynamic,
                multi-brand automotive powerhouse. We are the exclusive
                distributor of Royal Enfield and Scomadi Scooters, and a trusted
                authorized dealer for Honda and Hyundai automobiles in
                Indonesia. From classic motorcycles to future-forward electric
                vehicles, our portfolio meets the evolving needs of every
                Indonesian rider and driver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
