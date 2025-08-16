import { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';

const Statistics = () => {
  const stats = [
    {
      number: 28,
      label: "Years of automotive innovation",
    },
    {
      number: 8,
      label: "Partnered brands",
    },
    {
      number: 39,
      label: "Brand locations",
    },
    {
      number: 80000,
      label: "Satisfied customers",
    },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#A8A8A8] to-sky-[#F2F2F200] text-[120px] font-medium">
                  {visible ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2}
                      formattingFn={(value) => {
                        if (value >= 1000 && value < 1000000) {
                          return `${Math.floor(value / 1000)}k`; // always string
                        }
                        return value.toString(); // convert to string
                      }}
                    />
                  ) : (
                    "0"
                  )}
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
