import { ChevronUp } from "lucide-react";
import FooterHeroImage from "../assets/img/footer-hero.png";
import NusantaraLogo from "../assets/img/nusantara-logo-footer.svg";
import FormHero from "../assets/img/form-hero.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const FooterMenu = [
    {
      menuName: "Navigation",
      menuList: [
        "Our Story",
        "Brands",
        "Branches",
        "Partnership",
        "News",
        "Community",
        "Careers",
      ],
    },
    {
      menuName: "Social",
      menuList: ["WhatsApp", "LinkedIn"],
    },
    {
      menuName: "Legal",
      menuList: ["Privacy Policy", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl w-full py-[72px] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#711917] via-[#0A0A0A] to-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-[#F2F2F2] font-bold text-4xl lg:text-[60px]">
                Feel free to reach us for any inquiries
              </p>
              <p className="text-[#A8A8A8] font-medium text-base lg:text-xl mt-6">
                We will try to reply to you during the 24 hours.
              </p>
            </div>

            <div>
              <p className="text-[#A8A8A8] font-medium text-lg">
                You’re always welcome to book a private appointment with us at
                our <u>Jakarta office</u>.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={FormHero}
                alt="Modern automotive showroom"
                className="w-full  object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={FooterHeroImage}
            alt="Nusantara Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0AF2]"></div>
        </div>

        {/* Content */}
        <div className="relative pt-32 h-full 2xl:h-screen max-md:h-screen z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10 flex-col lg:flex-row justify-between items-center lg:items-start text-[#F2F2F2]">
            <div className="flex flex-col justify-center items-center">
              <img src={NusantaraLogo} className="mb-6" />
              <h1 className="text-2xl lg:text-4xl font-bold">
                Nusantara Group
              </h1>
            </div>

            <div className="text-2xl lg:text-4xl font-bold flex flex-col gap-4">
              <p>info@nusantara-group.com</p>
              <p>+62 (21) 837 88888</p>
              <p>Jl. MT Haryono Kav. 5-6,</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>

          <div className="border-t-[1px] border-[#4B4B4B] my-10" />

          <div className="text-[#F2F2F2] flex gap-4 flex-col lg:flex-row justify-center lg:justify-between">
            <div className="w-full lg:w-1/2">
              <p className="font-medium text-[#A8A8A8]">
                Nusantara Group is registered and operates in Indonesia under
                the legal name PT Nusantara Batavia International. <br />
                <br /> Our head office and management team are based in Jakarta.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-end gap-[100px]">
                {FooterMenu.map((menu, index) => (
                  <div key={index} className="mb-6">
                    <h1 className="font-bold text-[#A8A8A8] text-xl mb-3">
                      {menu.menuName}
                    </h1>
                    {menu.menuList.map((item, idx) => (
                      <p
                        key={idx}
                        className="font-medium mt-2 hover:text-[#A8A8A8] transition-colors duration-300 cursor-pointer"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-[#F4F4F4] mt-10 w-1/2 bg-[#711917] p-6 rounded-lg mb-24 2xl:pb-6">
            <p className="font-medium text-xl mb-4">
              Subscribe to our newsletter and be the first to know about new
              branch openings, exclusive brand updates, and event announcements.
            </p>

            <div className="mt-8">
              <button className="group bg-[#F4F4F4] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                <span>Subscribe</span>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-[#A8A8A8]">
            <div>
              <p className="text-[#A8A8A8] px-8 absolute bottom-8 left-0">
                Copyright © PT Nusantara Batavia International
              </p>
            </div>

            <div>
              <p
                onClick={scrollToTop}
                className="text-[#F4F4F4] px-8 absolute bottom-8 right-0 font-medium cursor-pointer hover:text-[#A8A8A8] transition-colors duration-300"
              >
                Back to Top
                <ChevronUp className="inline-block ml-2 w-6 h-6" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
