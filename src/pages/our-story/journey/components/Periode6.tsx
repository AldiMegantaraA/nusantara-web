import JeepLogo from "../../../../assets/img/jeep-logo.png";
import RoyalEnfieldLogo from "../../../../assets/img/royal-enfield-logo.png";
import PeugeotLogo from "../../../../assets/img/peugeot2-logo.png";
import BMWLogo from "../../../../assets/img/bmw2-logo.png";

const Periode6 = () => {
  return (
    <section className="bg-[#0A0A0A] py-16 min-h-screen flex items-center border-t-[#711917] border-t-[5px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <div className="flex justify-center gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={JeepLogo} />
              </div>
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={RoyalEnfieldLogo} />
              </div>
            </div>
            <div className="flex justify-center gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={PeugeotLogo} />
              </div>
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={BMWLogo} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#4B4B4B] font-medium mb-2">Period 6 of 6</p>
            <p className="text-[#F4F4F4] font-bold text-5xl mb-8">
              2019 and beyond
            </p>
            <p className="text-[#F4F4F4] font-medium text-[28px]">
              In 2019, Nusantara Group was appointed as an authorized dealer of
              Jeep and expanded its Honda network with three new service
              centers. The journey continued with exclusive appointments as the
              sole importer and dealer of Royal Enfield in 2020, followed by
              Scomadi in 2023—further cementing its presence in the premium and
              lifestyle mobility space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Periode6;
