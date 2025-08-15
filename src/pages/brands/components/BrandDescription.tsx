interface ChildrenType {
  src: string;
  title: string;
  desc: string;
  i: number;
}

const BrandDescription = ({ src, title, desc, i }: ChildrenType) => {
  console.log(i % 2 == 0, i, "genap");

  return (
    <section
      key={i}
      className="bg-[#0A0A0A] py-16 min-h-screen flex items-center border-t-[#711917] border-t-[5px] rounded-t-[60px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[60px]">
          <div
            className={`order-1 ${i % 2 == 0 ? "lg:order-1" : "lg:order-2"}`}
          >
            <img src={src} alt={`image-${title}`} className="rounded-[12px]" />
          </div>
          <div
            className={`order-2 ${i % 2 == 0 ? "lg:order-2" : "lg:order-1"}`}
          >
            <p className="text-[#F4F4F4] font-bold text-[48px] mg-4 lg:mb-6">
              {title}
            </p>
            <p className="text-[#F4F4F4] font-medium text-lg">{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandDescription;
