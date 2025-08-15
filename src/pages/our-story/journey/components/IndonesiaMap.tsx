import Map from "../../../../assets/img/indonesia-map.png";

const IndonesiaMap = () => {
  return (
    <section className="bg-[#0A0A0A] min-h-screen flex items-center border-t-[#711917] border-t-[5px] rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <img src={Map} />
          </div>
          <div className="pt-9">
            <p className="text-[#F4F4F4] font-bold text-5xl mb-8">Present</p>
            <p className="text-[#F4F4F4] font-medium text-[28px]">
              Nusantara Group continues to offer outstanding customer services
              among its brand portfolio across Indonesia. Whether it is a new
              automobile purchase, new motorcycle purchase or vehicle
              maintenance, our staff at the will support their customers with
              excellence to ensure worry-free mobility.   
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndonesiaMap;
