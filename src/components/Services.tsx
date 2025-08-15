import ServicesImage from "../assets/img/re.png";
import JeepVision from "../assets/img/jeepVision.jpg";
import FordMission from "../assets/img/fordMission.jpg";
import HyundaiSales from "../assets/img/hyundaiSales.jpg";
import AfterSales from "../assets/img/afterSales.jpg";
import { useState } from "react";

const initialServices = [
  {
    title: "Who we are",
    isActive: true,
    img: ServicesImage,
    desc: `Founded with a deep passion for mobility and customer
    satisfaction, Nusantara Group has grown into a dynamic,
    multi-brand automotive powerhouse. We are the exclusive
    distributor of Royal Enfield and Scomadi Scooters, and a trusted
    authorized dealer for Honda and Hyundai automobiles in
    Indonesia. From classic motorcycles to future-forward electric
    vehicles, our portfolio meets the evolving needs of every
    Indonesian rider and driver.`
  },
  {
    title: "Our vision",
    isActive: false,
    img: JeepVision,
    desc: 'To become Indonesia’s most admired and customer-centric automotive group—setting new standards in service, innovation, and community engagement.'
  },
  {
    title: "Our mission",
    isActive: false,
    img: FordMission,
    desc: 'To enrich the lives of Indonesians through accessible, reliable, and aspirational mobility solutions, while nurturing long-term partnerships with global automotive brands.'
  },
];

const Services = () => {
  const [servicesItem, setServicesItem] = useState('company');
  const [services, setServices] = useState(initialServices);

  const handleChangeService = (clickedIndex: unknown) => {
    setServices((prev) =>
      prev.map((service, index) => ({
        ...service,
        isActive: index === clickedIndex
      }))
    );
  };

  return (
    <section className="bg-[#0A0A0A] h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {
          servicesItem === 'company' ? 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {services.map((service, index) => (
                    <div key={index}>
                      { service.isActive ? 
                        <img
                          src={service.img}
                          alt="Motorcycles in showroom"
                          className="w-full h-[500px] lg:h-[700px] object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        : ''
                      }
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 flex flex-col justify-between h-full">
                {/* Header */}
                <div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
                    <div className="mb-6 lg:mb-0">
                      <span className="text-gray-400 text-sm font-medium tracking-wide">
                        — How we can help
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => setServicesItem('company')} className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                        Company
                      </button>
                      <button onClick={() => setServicesItem('sales')} className="px-6 py-2 border border-[#A8A8A8] text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
                        Sales
                      </button>
                      <button onClick={() => setServicesItem('after-sales')} className="px-6 py-2 border border-[#A8A8A8] text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
                        After-sales
                      </button>
                    </div>
                  </div>

                  {/* Service List */}
                  <div className="space-y-6 mb-8">
                    {services.map((service, index) => (
                      <div key={index} className="group cursor-pointer" onClick={() => handleChangeService(index)}>
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
                <div className="font-medium space-y-6 mt-32 text-[#A8A8A8] text-xl leading-relaxed">
                  {services.map((service, index) => (
                    <div key={index}>
                      <p>
                        {
                          service.isActive
                            ? service.desc 
                            : ''
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          : servicesItem === 'sales' ?
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={HyundaiSales}
                    alt="Motorcycles in showroom"
                    className="w-full h-[500px] lg:h-[700px] object-cover transform hover:scale-105 transition-transform duration-700"
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
                      <span className="text-gray-400 text-sm font-medium tracking-wide">
                        — How we can help
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => setServicesItem('company')} className="px-6 py-2 border border-[#A8A8A8] text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
                        Company
                      </button>
                      <button onClick={() => setServicesItem('sales')} className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                        Sales
                      </button>
                      <button onClick={() => setServicesItem('after-sales')} className="px-6 py-2 border border-[#A8A8A8] text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
                        After-sales
                      </button>
                    </div>
                  </div>

                  {/* Service List */}
                  <div className="space-y-6 mb-8">
                    <div className="group cursor-pointer" >
                      <h3
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300 text-white border-b-2 border-white pb-2`}
                      >
                        Automotive dealer
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="font-medium space-y-6 mt-32 text-[#A8A8A8] text-xl leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet accumsan nulla, 
                    nec placerat dolor. Vestibulum congue eu libero nec pulvinar. 
                    Curabitur diam nisi, efficitur ac hendrerit id, fermentum pretium tortor.
                  </p>
                </div>
              </div>
            </div>
          : 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={AfterSales}
                    alt="Motorcycles in showroom"
                    className="w-full h-[500px] lg:h-[700px] object-cover transform hover:scale-105 transition-transform duration-700"
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
                      <span className="text-gray-400 text-sm font-medium tracking-wide">
                        — How we can help
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => setServicesItem('company')} className="px-6 py-2 border border-[#A8A8A8] text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
                        Company
                      </button>
                      <button onClick={() => setServicesItem('sales')} className="px-6 py-2 border border-[#A8A8A8] text-gray-300 rounded-full text-sm font-medium hover:border-gray-400 hover:text-white transition-colors duration-300">
                        Sales
                      </button>
                      <button onClick={() => setServicesItem('after-sales')} className="px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                        After-sales
                      </button>
                    </div>
                  </div>

                  {/* Service List */}
                  <div className="space-y-6 mb-8">
                    <div className="group cursor-pointer" >
                      <h3
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300 text-white border-b-2 border-white pb-2`}
                      >
                        After Sales Service
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="font-medium space-y-6 mt-32 text-[#A8A8A8] text-xl leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet accumsan nulla, 
                    nec placerat dolor. Vestibulum congue eu libero nec pulvinar. 
                    Curabitur diam nisi, efficitur ac hendrerit id, fermentum pretium tortor.
                  </p>
                </div>
              </div>
            </div>
        }
      </div>
    </section>
  );
};

export default Services;
