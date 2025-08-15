const Hero = () => {
  return (
    <section className="bg-[#0A0A0A] background-ford-container min-h-screen flex items-center">
      <div className="pt-16 container h-screen z-10 mx-auto w-full text-left">
        <div className="flex p-16 flex-col lg:flex-row justify-between h-full text-left">
          <div className="w-full lg:w-3/4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-[33px]">
              Our CREDO —
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#A8A8A8] mt-[33px]">
              This is what shapes us
            </h1>
          </div>
          <div className="w-full lg:w-1/4 flex flex-col items-start justify-around gap-2 lg:gap-0">
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#F4F4F4]">T</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                enacious
              </p>
            </div>
            <div className="w-4 lg:w-20 border-t-[3px] border-t-[#4B4B4B]" />
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#F4F4F4]">R</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                eliable
              </p>
            </div>
            <div className="w-4 lg:w-20 border-t-[3px] border-t-[#4B4B4B]" />
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#F4F4F4]">U</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                ser-focus
              </p>
            </div>
            <div className="w-4 lg:w-20 border-t-[3px] border-t-[#4B4B4B]" />
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#F4F4F4]">S</p>
              <p className="text-2xl lg:text-4xl font-bold text-[#F4F4F4]">
                ynergy
              </p>
            </div>
            <div className="w-4 lg:w-20 border-t-[3px] border-t-[#4B4B4B]" />
            <div className="flex items-center gap-1">
              <p className="text-4xl lg:text-6xl font-bold text-[#F4F4F4]">T</p>
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
