import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";

import connect from "/src/assets/productimages/connect.png"
import owner from "/src/assets/productimages/owner.jpeg"

// import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full bg-white overflow-hidden  mt-20">
      
      <section className="relative bg-[#0F3D91] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px] py-20 lg:py-24">
           

            <div>
              <p className="text-[#FF7A00] text-sm font-bold uppercase tracking-[0.25em]">
                Get In Touch
              </p>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                We'd Love To
                <br />
                <span className="text-[#FF7A00]">Hear From You.</span>
              </h1>

              <p className="mt-6 max-w-xl text-blue-100 text-base sm:text-lg leading-8">
                Whether you have a question about our products, want to make a
                business enquiry, or simply want to learn more about TK Foods &
                Beverages, our team is ready to hear from you.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/+238025854181?text=Hello%20TK%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    bg-[#FF7A00]
                    hover:bg-orange-600
                    rounded-lg
                    font-bold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Send Us A Message
                  <ArrowRight size={18} />
                </a>

                <a
                  href="tel:+2348025854181"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-6
                    py-3
                    border
                    border-white/40
                    hover:bg-white
                    hover:text-[#0F3D91]
                    rounded-lg
                    font-semibold
                    transition-all
                    duration-300
                  "
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>
            </div>

            

            <div className="relative">
              <div
                className="
                  relative
                  h-[300px]
                  sm:h-[380px]
                  lg:h-[430px]
                  rounded-3xl
                  overflow-hidden
                  bg-white/10
                  border
                  border-white/20
                "
              >
               <img src={owner} />

                <div className="h-full flex flex-col items-center justify-center text-center px-6">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageCircle size={38} className="text-[#FF7A00]" />
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-bold">
                    Let's Connect
                  </h3>

                  <p className="mt-3 max-w-sm text-sm sm:text-base text-blue-100">
                    A professional product or team photograph can be placed here
                    to make the Contact page more visually engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#FF7A00] text-sm font-bold uppercase tracking-[0.25em]">
              Contact Information
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              We're Here To Help
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Reach out to us through any of the channels below. Our team will
              be happy to assist you.
            </p>
          </div>

    

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-12">
           

            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <MapPin size={23} className="text-[#0F3D91]" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Our Office
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-6">
                1st floor 56, offin road ,Oke Arin market Ebute Ero Lagos Island
                Opposite first bank,Lagos , Nigeria
              </p>
            </div>

           

            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                <Phone size={23} className="text-[#FF7A00]" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">Phone</h3>

              <a
                href="tel:+2348025854181"
                className="block mt-3 text-sm text-gray-600 hover:text-[#0F3D91]"
              >
                0802 585 4181
              </a>
            </div>

            

            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Mail size={23} className="text-[#0F3D91]" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">Email</h3>

              <a
                href="mailto:okaforkamsimic@gmail.com"
                className="block mt-3 text-sm text-gray-600 hover:text-[#0F3D91] break-all"
              >
                oluwabunmivictoria25@gmail.com
              </a>
            </div>

           

            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                <Clock size={23} className="text-[#FF7A00]" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Business Hours
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-6">
                Monday – Saturday
                <br />
                8:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section id="contact-form" className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
    

            <div>
              <p className="text-[#FF7A00] text-sm font-bold uppercase tracking-[0.25em]">
                Send A Message
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                Let's Start A Conversation.
              </h2>

              <p className="mt-5 text-gray-600 leading-7">
                Fill out the form below and tell us how we can help. We look
                forward to hearing from you.
              </p>

              <form className="mt-8 space-y-5">
               

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="
                      w-full
                      px-4
                      py-3.5
                      border
                      border-gray-200
                      rounded-xl
                      outline-none
                      text-sm
                      text-gray-800
                      placeholder-gray-400
                      focus:border-[#0F3D91]
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  />
                </div>

                

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="
                      w-full
                      px-4
                      py-3.5
                      border
                      border-gray-200
                      rounded-xl
                      outline-none
                      text-sm
                      text-gray-800
                      placeholder-gray-400
                      focus:border-[#0F3D91]
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  />
                </div>

               

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="
                      w-full
                      px-4
                      py-3.5
                      border
                      border-gray-200
                      rounded-xl
                      outline-none
                      text-sm
                      text-gray-800
                      placeholder-gray-400
                      focus:border-[#0F3D91]
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  />
                </div>

               

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="
                      w-full
                      px-4
                      py-3.5
                      border
                      border-gray-200
                      rounded-xl
                      outline-none
                      text-sm
                      text-gray-800
                      placeholder-gray-400
                      focus:border-[#0F3D91]
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  />
                </div>

                

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell us how we can help..."
                    className="
                      w-full
                      px-4
                      py-3.5
                      border
                      border-gray-200
                      rounded-xl
                      outline-none
                      text-sm
                      text-gray-800
                      placeholder-gray-400
                      resize-none
                      focus:border-[#0F3D91]
                      focus:ring-2
                      focus:ring-blue-100
                      transition
                    "
                  ></textarea>
                </div>

            

                <a
                  href="mailto:oluwabunmivictoria25@gmail.com"
               
                >
                  <button
                    type="submit"
                    
                    className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-7
                    py-3.5
                    bg-[#0F3D91]
                    hover:bg-[#0a2d6d]
                    text-white
                    font-bold
                    rounded-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    shadow-lg
                  "
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </a>
              </form>
            </div>

           

            <div className="lg:pt-10">
       

              <div className="relative h-[350px] sm:h-[450px] lg:h-[560px] rounded-3xl overflow-hidden bg-gray-100">
                
                  

                  <img
                    src={connect}
                    alt="TK Foods and Beverages"
                    className="w-full h-full object-cover"
                  />
               

                <div className="h-full flex flex-col items-center justify-center text-center px-8">
                  <div className="w-20 h-20 bg-[#0F3D91] rounded-full flex items-center justify-center">
                    <MapPin size={36} className="text-[#FF7A00]" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    Visit or Connect With Us
                  </h3>

                  <p className="mt-4 max-w-md text-gray-600 leading-7">
                    A photograph of your office, warehouse, team, or products
                    would work perfectly in this section.
                  </p>
                </div>
              </div>

            

              <div className="mt-6 bg-[#0F3D91] rounded-2xl p-6 sm:p-7 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FF7A00] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Business & Distribution Enquiries
                    </h3>

                    <p className="mt-2 text-sm text-blue-100 leading-6">
                      Interested in becoming a distributor, retailer, or
                      business partner? Get in touch with our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[#FF7A00] text-sm font-bold uppercase tracking-[0.25em]">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Looking For A Reliable
            <span className="text-[#0F3D91]"> Business Partner?</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-7">
            Whether you're a retailer, distributor, business owner, or simply
            looking for quality food and beverage products, we'd be happy to
            hear from you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:oluwabunmivictoria25@gmail.com"
              className="
                 inline-flex
                items-center
                justify-center
                gap-2
                px-7
                py-3.5
              bg-[#0F3D91]
              hover:bg-[#0a2d6d]
              text-white
                font-bold
                rounded-xl
               transition-all
                               "
            >
              Email Us
              <Mail size={18} />
            </a>

            <a
              href="https://wa.me/2349079716540?text=Hello%20TK%2C%20I%20would%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-7
                py-3.5
                bg-[#FF7A00]
                hover:bg-orange-600
                text-white
                font-bold
                rounded-xl
                transition-all
              "
            >
              WhatsApp Us
              <FaWhatsappIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};



const FaWhatsappIcon = () => {
  return <span className="text-lg"></span>;
};

export default Contact;
