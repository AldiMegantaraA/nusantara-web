import AboutHeroImage from "../../../../assets/img/about-hero.jpg";

const Operation = () => {
  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-1 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={AboutHeroImage}
                alt="Modern automotive showroom"
                className="w-full h-full lg:h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#F2F2F2] mb-8 leading-tight">
              Nusantara Group: a nationwide automotive company with a 50-year
              history
            </h2>

            <div className="space-y-6 text-[#A8A8A8] font-medium text-lg leading-relaxed">
              <p>
                Established in 1975, Nusantara Group is one of Indonesia’s most
                prominent and trusted automotive dealership networks. With
                nearly five decades of experience, we have built a reputation
                for delivering excellence across both mass-market and luxury
                automotive segments.
              </p>
              <p>
                Under the visionary leadership of Mr. Joe Ferry, Nusantara has
                represented six distinguished automotive brands, offering a wide
                spectrum of mobility solutions for Indonesian consumers. Our
                commitment to quality, innovation, and customer satisfaction has
                fueled our sustained growth in a competitive industry.
              </p>
              <p>
                Today, Nusantara Group operates:
                <ul>
                  <li className="list-disc ml-6">
                    12+ full-service dealerships (3S) – Sales, Service, and
                    Spare Parts
                  </li>
                  <li className="list-disc ml-6">
                    9 authorized service centers (2S) – Service and Spare Parts
                  </li>
                </ul>
              </p>
              <p>
                We proudly serve both functional and lifestyle automotive needs,
                combining scale with a personalized touch. With each brand we
                carry and each customer we serve, we continue to drive forward
                with the same dedication and passion that defined our founding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operation;
