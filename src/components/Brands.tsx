import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

import BgHonda from "../assets/img/bg-honda.png";
import BgHondaActive from "../assets/img/bg-honda-active.png";
import BgRoyalEnfield from "../assets/img/bg-royal-enfield.png";
import BgRoyalEnfieldActive from "../assets/img/bg-royal-enfield-active.png";
import BgHyundai from "../assets/img/bg-hyundai.png";
import BgHyundaiActive from "../assets/img/bg-hyundai-active.png";
import BgScomadi from "../assets/img/bg-scomadi.png";
import BgScomadiActive from "../assets/img/bg-scomadi-active.png";
import BgJeep from "../assets/img/bg-jeep.png";
import BgJeepActive from "../assets/img/bg-jeep-active.png";
import BgMercy from "../assets/img/bg-mercy.png";
import BgMercyActive from "../assets/img/bg-mercy-active.png";
import BgFord from "../assets/img/bg-ford.png";
import BgFordActive from "../assets/img/bg-ford-active.png";
import BgChevrolet from "../assets/img/bg-chevrolet.png";
import BgChevroletActive from "../assets/img/bg-chevrolet-active.png";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const navigate = useNavigate()
  const brands = [
    { name: "Honda", imageUnactive: BgHonda, imageActive: BgHondaActive },
    { name: "Royal Enfield", imageUnactive: BgRoyalEnfield, imageActive: BgRoyalEnfieldActive },
    { name: "Hyundai", imageUnactive: BgHyundai, imageActive: BgHyundaiActive },
    { name: "Scomadi", imageUnactive: BgScomadi, imageActive: BgScomadiActive },
    { name: "Jeep", imageUnactive: BgJeep, imageActive: BgJeepActive },
    { name: "Mercedes", imageUnactive: BgMercy, imageActive: BgMercyActive },
    { name: "Ford", imageUnactive: BgFord, imageActive: BgFordActive },
    { name: "Chevrolet", imageUnactive: BgChevrolet, imageActive: BgChevroletActive },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Tablet/mobile breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="mb-6">
              <span className="text-gray-400 text-sm font-medium tracking-wide">
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
            <p className="text-[#A8A8A8] font-medium text-lg mb-6 leading-relaxed">
              We represent top automotive brands — each chosen for reliability,
              innovation, and customer satisfaction.
            </p>
            <button onClick={() => navigate('/brands')} className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
              <span>Explore our brands</span>
              <div className="w-6 h-6 bg-[#711917] rounded-full flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="w-full h-[400px] group relative overflow-hidden rounded-2xl bg-gray-800 aspect-square transition-all duration-500"
                onMouseEnter={() => {
                  if (!isMobile) setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  if (!isMobile) setActiveIndex(null);
                }}
                onClick={() => {
                  if (isMobile) setActiveIndex(index);
                }}
              >
                <img
                  src={isActive ? brand.imageActive : brand.imageUnactive}
                  alt={brand.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
