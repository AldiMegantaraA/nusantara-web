import NusantaraLogo from "../../../../assets/img/nusantara-logo-background.png";

const Hero = () => {
  return (
    <section className="bg-[#0A0A0A] relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={NusantaraLogo}
          alt="Nusantara Hero Background"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative pt-16 container h-screen z-10 mx-auto w-full text-left">
        <div className="flex p-16 flex-col justify-between h-full text-left">
          <div className="w-full lg:w-3/4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-[33px]">
              Our CREDO —
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#A8A8A8] mt-[33px]">
              This is what shapes us
            </h1>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-around gap-2 lg:gap-0">
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#711917]">T</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                enacious
              </p>
            </div>
            <div className="w-4 border-t-[3px] border-t-[#A8A8A8]" />
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#711917]">R</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                eliable
              </p>
            </div>
            <div className="w-4 border-t-[3px] border-t-[#A8A8A8]" />
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#711917]">U</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                ser-focus
              </p>
            </div>
            <div className="w-4 border-t-[3px] border-t-[#A8A8A8]" />
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#711917]">S</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                ynergy
              </p>
            </div>
            <div className="w-4 border-t-[3px] border-t-[#A8A8A8]" />
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#711917]">T</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                ransformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
