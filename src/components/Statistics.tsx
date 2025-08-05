import React from 'react';

const Statistics = () => {
  const stats = [
    {
      number: '25',
      label: 'Years of automotive innovation',
      description: 'Decades of experience in the Indonesian automotive market'
    },
    {
      number: '8',
      label: 'Partnered brands',
      description: 'Leading automotive brands across various segments'
    },
    {
      number: '40',
      label: 'Brand locations',
      description: 'Full dealerships and authorized service centers nationwide'
    },
    {
      number: '100k',
      label: 'Satisfied customers',
      description: 'Trust and excellence delivered across Indonesia'
    }
  ];

  return (
    <section className="bg-gray-800 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;