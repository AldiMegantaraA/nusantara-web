import React from "react";

const Statistics = () => {
  const stats = [
    {
      number: "25",
      label: "Years of automotive innovation",
    },
    {
      number: "8",
      label: "Partnered brands",
    },
    {
      number: "40",
      label: "Brand locations",
    },
    {
      number: "100k",
      label: "Satisfied customers",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#A8A8A8] to-sky-[#F2F2F200] text-[120px] font-medium">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-xl font-medium text-[#F2F2F2]">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
