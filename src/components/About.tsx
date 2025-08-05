import AboutHeroImage from "../assets/img/about-hero.jpg";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                — About
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#F2F2F2] mb-8 leading-tight">
              Pioneering Indonesia automotive market from 1975
            </h2>

            <div className="space-y-6 text-[#A8A8A8] font-medium text-lg leading-relaxed">
              <p>
                Led by its passionate leader, Mr. Joe Ferry, Nusantara has
                carried a total of 6 brands from various segments in its 26-year
                journey in the automotive industry in Indonesia.
              </p>

              <p>
                Today, Nusantara offers both functional, mass-market car
                products and notable luxury, lifestyle automotive products from
                leading brands through more than 12 full dealerships (3S1) and 9
                authorized service centers (2S2).
              </p>
            </div>

            <div className="mt-8">
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                <span>Discover our story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={AboutHeroImage}
                alt="Modern automotive showroom"
                className="w-full h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
