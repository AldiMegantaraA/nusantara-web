import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import NusantaraHeroImage from "../assets/img/nusantara-hero.png";
import Slidetwo from "../assets/img/slidetwo.jpg";
import SlideThree from "../assets/img/slidethree.jpg";
import SlideFour from "../assets/img/slidefour.jpg";
import { useState } from "react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: NusantaraHeroImage,
    },
    {
      url: Slidetwo,
    },
    {
      url: SlideThree,
    },
    {
      url: SlideFour,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[currentSlide].url}
          alt="Nusantara Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative pt-32 h-screen z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col justify-between h-full text-left">
          <div>
            <h1 className="text-left text-4xl sm:text-5xl lg:text-7xl font-bold text-[#F2F2F2] mb-8 leading-tight">
              Decades of
              <br />
              automotive excellence
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                <span>Explore our brands</span>
                <div className="w-6 h-6 bg-[#711917] rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
              <button className="text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
                <span>Contact us</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-between pb-40 ">
            <p className="text-lg sm:text-[28px] text-gray-300 w-3/4">
              From world-renowned brands to trusted service,
              <br />
              Nusantara Group is your partner in mobility across Indonesia.
            </p>

            <button
              onClick={() => scrollToSection("about")}
              className="text-xl text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Explore more</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                currentSlide === index
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
