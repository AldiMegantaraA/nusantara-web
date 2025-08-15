import MercyLogo from "../../../../assets/img/mercy-logo.png";
import HarleyLogo from "../../../../assets/img/harley-logo.png";
import HondaLogo from "../../../../assets/img/honda-logo.png";

const Periode5 = () => {
  return (
    <section className="bg-[#0A0A0A] py-16 min-h-screen flex items-center border-t-[#711917] border-t-[5px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-6">
          <div>
            <div className="flex justify-center gap-2 lg:gap-10 mb-2 lg:mb-4">
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={MercyLogo} className="w-[100px] h-[100px]" />
              </div>
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={HarleyLogo} />
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={HondaLogo} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#4B4B4B] font-medium mb-2">Period 5 of 6</p>
            <p className="text-[#F4F4F4] font-bold text-5xl mb-8">
              2014 to 2017
            </p>
            <p className="text-[#F4F4F4] font-medium text-[28px]">
              Nusantara Group entered the luxury and lifestyle segment with its
              appointment as an authorized dealer of Mercedes-Benz in 2014. This
              was followed by Harley-Davidson in 2016 and Honda in 2017—marking
              a dynamic expansion across prestige and performance brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Periode5;
