import FordLogo from "../../../../assets/img/ford-logo.png";
import HyundaiLogo from "../../../../assets/img/hyundai-logo.png";

const Periode3 = () => {
  return (
    <section className="bg-[#0A0A0A] py-16 min-h-screen flex items-center border-t-[#711917] border-t-[5px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-6">
          <div>
            <div className="flex justify-center gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={FordLogo} />
              </div>
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={HyundaiLogo} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#4B4B4B] font-medium mb-2">Period 3 of 6</p>
            <p className="text-[#F4F4F4] font-bold text-5xl mb-8">
              2003 to 2004
            </p>
            <p className="text-[#F4F4F4] font-medium text-[28px]">
              Nusantara Group strengthened its portfolio as an authorized dealer
              of Ford and Hyundai, while also expanding into new
              frontiers—entering the car rental business and the heavy equipment
              sector to serve broader mobility and infrastructure needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Periode3;
