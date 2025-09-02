import { ChevronUp } from "lucide-react";
import FooterHeroImage from "../assets/img/footer-hero.png";
import NusantaraLogo from "../assets/img/nusantara-logo.png";
import ContactForm from "./ContactForm";
import ModalSubscribe from "./ModalSubscribe";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalPolicy from "./ModalPolicy";

const Footer = () => {
  const Navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalLegal, setIsOpenModalLegal] = useState(false);
  const [legalType, setLegalType] = useState('');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const whatsappNumber = '+6285283984973';
  const defaultMessage = 'Hello! I would like to know more about Nusantara Group services.';

  const FooterMenu = [
    {
      menuName: "Navigation",
      menuList: [
        { name: "Our Journey", href: "/our-story/journey", hasDropdown: false },
        { name: "Our Culture", href: "/our-story/culture", hasDropdown: false },
        { name: "Brands", href: "/brands", hasDropdown: false },
        { name: "Branches", href: "/branches", hasDropdown: false },
        // { name: "Partnership", hasDropdown: false },
        // { name: "Community", hasDropdown: false },
        {
          name: "News",
          hasDropdown: false,
          href: "/news",
        },
      ],
    },
    {
      menuName: "Brands",
      menuList: [
        "Honda",
        "Royal Enfield",
        "Hyundai",
        "Scomadi",
        // "Jeep",
        // "Mercedes-Benz",
        "Ford",
        "Chevrolet",
        "Nusantara Star Service",
      ],
    },
    {
      menuName: "Social",
      menuList: [
        {
          name: "WhatsApp",
          href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`,
        }, 
        {
          name: "LinkedIn",
          href: `https://www.linkedin.com/company/nusantaragroup`,
        }, 
      ],
    },
    {
      menuName: "Legal",
      menuList: ["Privacy Policy", "Cookie Policy"],
    },
  ];

  const handleDropdownItemClick = (href: string | undefined) => {
    // For now, just log the navigation - you can implement actual routing later

    return href && Navigate(href);
    // setIsOurStoryOpen(false);
  };

  return (
    <>
    <footer>
      <ContactForm />

      <div className="relative h-full min-h-screen flex items-center">
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
        <div className="relative pt-32 h-full z-10 mx-auto container w-full px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10 flex-col lg:flex-row justify-between items-center lg:items-start text-[#F2F2F2]">
            <div className="flex flex-col justify-center items-start">
              <div className="w-32">
                <img src={NusantaraLogo} className="mb-6" />
              </div>
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
                Nusantara Group is registered and operates in Indonesia.
              </p>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-4 justify-center lg:justify-end gap-2 lg:gap-[100px]">
              {FooterMenu.map((menu, index) => (
                <div key={index} className="mb-6">
                  <h1 className="font-bold text-[#A8A8A8] text-xl mb-3">
                    {menu.menuName}
                  </h1>
                  {menu.menuList.map((item, idx) => (
                    menu.menuName === 'Navigation' ? 
                      <p
                        key={idx}
                        onClick={() => handleDropdownItemClick(item?.href)}
                        className="font-medium mt-2 hover:text-[#A8A8A8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                      >
                        {item.name}
                      </p>
                    :
                    menu.menuName === 'Social' ? 
                    <p
                      key={idx}
                      className="font-medium mt-2 hover:text-[#A8A8A8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                    >
                      <a
                        target="_blank"
                        href={item?.href}
                        className="font-medium mt-2 hover:text-[#A8A8A8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                      >
                        {item.name}
                      </a>
                    </p>
                    :
                    menu.menuName === 'Legal' ? 
                    <button
                      type="button"
                      key={idx}
                      onClick={() => {
                        setIsOpenModalLegal(true);
                        setLegalType(item);
                      }}
                      className="font-medium mt-2 hover:text-[#A8A8A8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                    >
                      {item}
                    </button>
                    :
                      <p
                      key={idx}
                      className="font-medium mt-2 hover:text-[#A8A8A8] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="text-[#F4F4F4] mt-10 md:w-1/2 w-full  bg-[#711917] p-6 rounded-lg mb-24 2xl:pb-6">
            <p className="font-medium text-xl mb-4">
              Subscribe to our newsletter and be the first to know about new
              branch openings, exclusive brand updates, and event announcements.
            </p>

            <div className="mt-8">
              <button type="button" onClick={() => setIsOpen(true)} className="group bg-[#F4F4F4] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                <span>Subscribe</span>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-[#A8A8A8]">
            <div>
              <p className="text-[#A8A8A8]">
                Copyright © PT Nusantara Batavia International
              </p>
            </div>

            <div>
              <p
                onClick={scrollToTop}
                className="text-[#F4F4F4] px-8 absolute bottom-20 lg:bottom-0 right-0 font-medium cursor-pointer hover:text-[#A8A8A8] transition-colors duration-300"
              >
                Back to Top
                <ChevronUp className="inline-block ml-2 w-6 h-6" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <ModalSubscribe isOpenModal={isOpen} onClose={() => setIsOpen(false)} />
    <ModalPolicy isOpenModal={isOpenModalLegal} onClose={() => setIsOpenModalLegal(false)} legalType={legalType} />
    </>
  );
};

export default Footer;
