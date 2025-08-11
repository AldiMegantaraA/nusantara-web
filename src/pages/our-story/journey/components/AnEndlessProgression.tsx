import DaihatsuLogo from "../../../../assets/img/daihatsu-logo.png";
import MazdaLogo from "../../../../assets/img/mazda-logo.png";
import IsuzuLogo from "../../../../assets/img/isuzu-logo.png";

const AnEndlessProgression = () => {
  return (
    <section className="bg-[#0A0A0A] min-h-screen py-16 lg:py-24 border-t-[#711917] border-t-[5px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-32 leading-tight">
            An Endless Progression
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <div className="flex justify-center gap-2 lg:gap-10 mb-2 lg:mb-4">
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={DaihatsuLogo} />
              </div>
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={MazdaLogo} />
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="border border-1 border-[#4B4B4B] w-[200px] h-[200px] flex items-center justify-center rounded-full">
                <img src={IsuzuLogo} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#4B4B4B] font-medium mb-2">Period 1 of 6</p>
            <p className="text-[#F4F4F4] font-bold text-5xl mb-8">
              1975 to 1985
            </p>
            <p className="text-[#F4F4F4] font-medium text-[28px]">
              Nusantara Group began its journey as the proud importer of Morina,
              Chevrolet, Citroën, and Alfa Romeo, laying the foundation for a
              legacy built on trust and innovation. Our reputation for
              excellence soon led to our selection as an authorized dealer for
              Mazda, Isuzu, and Daihatsu in Kalimantan, marking the start of our
              deep-rooted presence in Indonesia’s automotive landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnEndlessProgression;
