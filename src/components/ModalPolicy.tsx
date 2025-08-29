import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ModalPolicy({
    isOpenModal,
    onClose,
    legalType,
  }: {
    isOpenModal: boolean;
    onClose: () => void;
    legalType: string;
  }) {
    const [isOpen, setIsOpen] = useState(isOpenModal);
    function legalContent() {
        console.log(legalType)
        if(legalType === 'Privacy Policy') {
            return `To ensure optimal functionality and deliver the best experience, 
            this website uses cookies. By continuing to browse, you agree to our Privacy Policy. 
            You may manage or modify your cookie preferences at any time through the settings provided. 
            While we recommend enabling all cookies for full functionality, you are free to customize your preferences.`
        } else {
            return `Nusantara Group uses cookies to record the preferences of visitors, to enable us to optimize the design of our web site. 
            Cookies are small files which are stored on your hard drive. 
            They ease navigation, and increase the user-friendliness of a web site. 
            Cookies also help us to identify the most popular sections of our web site. 
            This enables us to provide content that is more accurately suited to your needs, and in so doing improve our service.
             Cookies can be used to determine whether there has been any contact between us and your computer in the past. 
             Only the cookie on your computer is identified.`
        }
    }
  
    // sync prop -> state
    useEffect(() => {
      setIsOpen(isOpenModal);
    }, [isOpenModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black text-white rounded-xl p-10 w-full max-w-lg relative shadow-xl">
        <div className="flex align-middle justify-between w-full content-center">
            <h2 className="text-white text-lg mt-1">
                {legalType}
            </h2>
            {/* Close Button */}
            <button
            onClick={() => {
                setIsOpen(false);
                onClose();
            }}
            className=" text-gray-300 hover:text-white"
            >
            <X size={20} />
            </button>
        </div>

        {/* Content */}
        <h2 className="text-lg font-medium mb-4 mt-8">
        {legalContent()}
        </h2>
      </div>
    </div>
  );
}
