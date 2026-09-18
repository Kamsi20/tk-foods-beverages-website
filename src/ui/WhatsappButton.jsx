
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  
  const phoneNumber = "+2348025854181";

  const message = "Hey Tk i want to make an inquiry about ..";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TK Foods on WhatsApp"
      title="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        right-5
        sm:bottom-8
        sm:right-8
        z-[9999]
        flex
        items-center
        justify-center
        w-16
        h-16
        sm:w-[76px]
        sm:h-[76px]
        bg-[#25D366]
        text-white
        rounded-full
        shadow-xl
        hover:bg-[#20ba5a]
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <FaWhatsapp className="text-4xl sm:text-5xl" />
    </a>
  );
};

export default WhatsAppButton;