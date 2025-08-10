const AwardAndRecognition = () => {
  const stats = [
    {
      number: "#1",
      label: "Authorized Distributor in Indonesia – by Unit Sales",
    },
    {
      number: "#1",
      label: "Dealer Network Growth – ASEAN Region (2024)",
    },
    {
      number: "98%",
      label: "Customer Satisfaction – After-Sales Service (2023)",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-xl text-[#A8A8A8] font-medium text-center">
          Awards & Recognition
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#A8A8A8] to-sky-[#F2F2F200] text-[160px] font-medium">
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

export default AwardAndRecognition;
