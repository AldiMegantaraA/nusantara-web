import ChevroletLogo from "../../../../assets/img/chevrolet-logo.png";
import KiaLogo from "../../../../assets/img/kia-logo.png";
import PeugeotLogo from "../../../../assets/img/peugeot-logo.png";
import BMWLogo from "../../../../assets/img/bmw-logo.png";

const Periode2 = () => {
  return (
    <section className="bg-[#0A0A0A] py-16 min-h-screen flex items-center border-t-[#711917] border-t-[5px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <div className="flex justify-center gap-2 lg:gap-10 mb-2 lg:mb-10">
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={ChevroletLogo} />
              </div>
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={KiaLogo} />
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
            <p className="text-[#4B4B4B] font-medium mb-2">Period 2 of 6</p>
            <p className="text-[#F4F4F4] font-bold text-5xl mb-8">
              1996 to 2001
            </p>
            <p className="text-[#F4F4F4] font-medium text-[28px]">
              Building on its early success, Nusantara Group was appointed as
              the primary dealer of Timor in Eastern Indonesia—marking a bold
              step into car financing and the used car trade. This momentum
              continued with the trust of global automotive giants, as Nusantara
              became an authorized dealer for KIA, Chevrolet, Peugeot, BMW, and
              Ford.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Periode2;
