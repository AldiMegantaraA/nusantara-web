import NusantaraLogo from "../../../../assets/img/nusantara-logo-background.png";
const Hero = () => {
  return (
    <section className="bg-[#711917] relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute p-16 inset-0 z-0 flex items-center justify-center">
        <img
          src={NusantaraLogo}
          alt="Nusantara Hero Background"
          // className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative pt-16 h-screen z-10 mx-auto container w-full text-left">
        <div className="flex p-16 flex-col justify-between h-full text-left">
          <div className="w-full lg:w-[1000px]">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-[33px]">
              Established in 1975, Nusantara Group is one of the leading
              automotive dealerships in Indonesia.
            </h1>
          </div>
          <div className="w-full lg:w-[1000px]">
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
