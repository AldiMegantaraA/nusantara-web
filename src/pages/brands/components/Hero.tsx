import BgHonda from "../../../assets/img/bg-honda.png";
import BgRoyalEnfield from "../../../assets/img/bg-royal-enfield.png";
import BgHyundai from "../../../assets/img/bg-hyundai.png";
import BgScomadi from "../../../assets/img/bg-scomadi.png";
import BgJeep from "../../../assets/img/bg-jeep.png";
import BgMercy from "../../../assets/img/bg-mercy.png";
import BgFord from "../../../assets/img/bg-ford.png";
import BgChevrolet from "../../../assets/img/bg-chevrolet.png";

const Hero = () => {
  const brands = [
    {
      name: "Honda",
      image: BgHonda,
    },
    {
      name: "Royal Enfield",
      image: BgRoyalEnfield,
    },
    {
      name: "Hyundai",
      image: BgHyundai,
    },
    {
      name: "Scomadi",
      image: BgScomadi,
    },
    {
      name: "Jeep",
      image: BgJeep,
    },
    {
      name: "Mercedes",
      image: BgMercy,
    },
    {
      name: "Ford",
      image: BgFord,
    },
    {
      name: "Chevrolet",
      image: BgChevrolet,
    },
  ];

  return (
    <section className="bg-[#0A0A0A] px-8 min-h-screen flex items-center">
      <div className="container mx-auto pt-32">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-16 lg:mb-32 leading-tight">
            Trusted Brands, <br />
            Proven Performance
          </h2>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-full h-[200px] lg:h-[400px] group relative overflow-hidden rounded-2xl bg-gray-800 aspect-square hover:transform hover:scale-105 transition-all duration-500"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
