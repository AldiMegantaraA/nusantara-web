import BgBranches1 from "../../../assets/img/bg-branches-1.png";
import BgBranches2 from "../../../assets/img/bg-branches-2.png";
import BgBranches3 from "../../../assets/img/bg-branches-3.png";

const Hero = () => {
  const branches = [
    {
      name: "Scomadi Jakarta",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "Service Center",
      image: BgBranches1,
    },
    {
      name: "Scomadi Bandung",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "",
      image: BgBranches2,
    },
    {
      name: "Scomadi Bali",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "Service Center",
      image: BgBranches3,
    },
    {
      name: "Scomadi Jakarta",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "Service Center",
      image: BgBranches1,
    },
    {
      name: "Scomadi Bandung",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "",
      image: BgBranches2,
    },
    {
      name: "Scomadi Bali",
      address: "Jl. MT Haryono Kav. 5 Tebet, Jakarta Selatan, Indonesia 12830",
      type: "Dealer",
      serviceType: "Service Center",
      image: BgBranches3,
    },
  ];

  return (
    <section className="bg-[#0A0A0A] min-h-screen flex items-center">
      <div className="container mx-auto pt-32">
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
              className="rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div>
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-[28px] font-bold text-white mb-3">
                  {branch.name}
                </h3>
                <p className="text-[#A8A8A8] font-medium text-lg mb-4 leading-relaxed">
                  {branch.address}
                </p>
                <button className="text-white border border-white px-4 py-2 rounded-full text-base font-medium hover:border-white hover:bg-white/10 transition-all duration-300">
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
