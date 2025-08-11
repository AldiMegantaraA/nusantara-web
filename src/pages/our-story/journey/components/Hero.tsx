import NusantaraLogo from "../../../../assets/img/nusantara-logo-background.png";
const Hero = () => {
  return (
    <section className="bg-[#711917] relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={NusantaraLogo}
          alt="Nusantara Hero Background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative pt-16 h-screen z-10 mx-auto container w-full text-left">
        <div className="flex p-16 flex-col justify-between h-full text-left">
          <div className="w-full lg:w-3/4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-[33px]">
              Established in 1975, Nusantara Group is one of the leading
              automotive dealerships in Indonesia.
            </h1>
          </div>
          <div className="w-full lg:w-3/4">
            <p className="text-lg lg:text-[28px] font-medium text-white">
              From world-renowned brands to trusted service, Nusantara Group is
              your partner in mobility across Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
