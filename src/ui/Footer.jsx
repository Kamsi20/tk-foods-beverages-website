import { Link } from "react-router-dom";
import logo from "/public/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaRegCopyright,
} from "react-icons/fa";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F3D91] text-white mt-20">
      

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
         

          <div className="lg:pr-8">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="TK Foods and Beverages"
                className="w-40 sm:w-48 h-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm sm:text-base text-blue-100 leading-7">
              Bringing quality food and beverage products to consumers with
              great taste, value, and memorable experiences.
            </p>


            <div className="flex items-center gap-3 mt-7">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-all duration-300"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="https://wa.me/2349079716540?text=Hello%20TK%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                target="_blank"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF7A00] transition-all duration-300"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

  
           

          <div>
            <h3 className="text-lg sm:text-xl font-bold">Company</h3>

            <div className="w-10 h-1 bg-[#FF7A00] rounded-full mt-3 mb-6"></div>

            <ul className="space-y-4 text-sm sm:text-base">
              <li>
                <Link
                  to="/"
                  className="text-blue-100 hover:text-[#FF7A00] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/product"
                  className="text-blue-100 hover:text-[#FF7A00] transition-colors duration-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/aboutus"
                  className="text-blue-100 hover:text-[#FF7A00] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-blue-100 hover:text-[#FF7A00] transition-colors duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 hover:text-[#FF7A00] transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

         

          <div>
            <h3 className="text-lg sm:text-xl font-bold">Contact Us</h3>

            <div className="w-10 h-1 bg-[#FF7A00] rounded-full mt-3 mb-6"></div>


            <div className="flex items-start gap-3 mb-5">
              <MapPin size={20} className="text-[#FF7A00] mt-1 flex-shrink-0" />

              <p className="text-sm sm:text-base text-blue-100 leading-6">
                1st floor 56, offin road ,Oke Arin market Ebute Ero Lagos Island
                Opposite first bank,Lagos , Nigeria
              </p>
            </div>

           

            <div className="flex items-center gap-3 mb-5">
              <Phone size={19} className="text-[#FF7A00] flex-shrink-0" />

              <a
                href="tel:+2340000000000"
                className="text-sm sm:text-base text-blue-100 hover:text-white transition-colors"
              >
                0802 585 4181
              </a>
            </div>

           

            <div className="flex items-center gap-3">
              <Mail size={19} className="text-[#FF7A00] flex-shrink-0" />

              <a
                href="mailto:info@tkfoodsandbeverages.com"
                className="text-sm sm:text-base text-blue-100 hover:text-white transition-colors break-all"
              >
                oluwabunmivictoria25@gmail.com
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-lg sm:text-xl font-bold">Let's Connect</h3>

            <div className="w-10 h-1 bg-[#FF7A00] rounded-full mt-3 mb-6"></div>

            <p className="text-sm sm:text-base text-blue-100 leading-7">
              Have a question, need more information about our products, or
              interested in working with us?
            </p>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-7
                px-6
                py-3
                bg-[#FF7A00]
                hover:bg-orange-600
                text-white
                font-bold
                rounded-lg
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-lg
              "
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* COPYRIGHT */}

            <p className="flex items-center gap-2 text-xs sm:text-sm text-blue-100 text-center">
              <FaRegCopyright />
              {new Date().getFullYear()} TK Foods & Beverages. All Rights
              Reserved.
            </p>


            <div className="flex items-center gap-5 text-xs sm:text-sm">
              <Link
                to={"/privacypolicy"}
                className="text-blue-100 hover:text-[#FF7A00] transition-colors"
              >
                Privacy Policy
              </Link>

              <span className="text-white/30">|</span>

              <Link
                to={"/termsandconditions"}
                className="text-blue-100 hover:text-[#FF7A00] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
