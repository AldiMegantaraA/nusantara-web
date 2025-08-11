import MapImage from "../../../../assets/img/map-periode-4.png";

const Periode4 = () => {
  return (
    <section className="bg-[#0A0A0A] min-h-screen flex items-center border-t-[#711917] border-t-[5px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <img src={MapImage} />
          </div>
          <div className="pt-9">
            <p className="text-[#4B4B4B] font-medium mb-2">Period 4 of 6</p>
            <p className="text-[#F4F4F4] font-bold text-5xl mb-8">
              2007 to 2011
            </p>
            <p className="text-[#F4F4F4] font-medium text-[28px]">
              In 2007, Nusantara Group expanded into Greater Jakarta, marking a
              new era of growth. By 2011, the Group achieved a milestone —
              delivering over 7,000 Ford vehicles, nearly tripling its 2010
              sales and setting a new benchmark in performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Periode4;
