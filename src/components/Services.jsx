import {
  Truck,
  Store,
  Handshake,
  Package,
  Headphones,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import importation from "/src/assets/productimages/importation.png";
import wholesale from "/src/assets/productimages/wholesale.png";
import retail from "/src/assets/productimages/retail.png";
import business from "/src/assets/productimages/business.png";
import portfolio from "/src/assets/productimages/portfolio.png";
import support from "/src/assets/productimages/customer.png";
import aproach from "/src/assets/productimages/aproach.png";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Product Importation & Sourcing",
      description:
        "We source and import quality food and beverage products from trusted manufacturers and international partners. Our focus is on bringing products that meet the expectations of the Nigerian market while maintaining high standards of quality, safety, and consistency.",
      icon: <Package size={32} />,
      image: importation,
    },

    {
      number: "02",
      title: "Wholesale & Distribution",
      description:
        "We provide efficient wholesale and distribution services for retailers, supermarkets, wholesalers, and other business partners. Our distribution network helps make our products accessible across different markets while ensuring reliable supply and timely delivery.",
      icon: <Truck size={32} />,
      image: wholesale,
    },

    {
      number: "03",
      title: "Retail Supply",
      description:
        "TK Foods & Beverages supplies a wide range of food and beverage products to retail outlets. We work closely with retailers to provide dependable product availability, competitive pricing, and a diverse selection that meets consumer demand.",
      icon: <Store size={32} />,
      image: retail,
    },

    {
      number: "04",
      title: "Business & Trade Partnerships",
      description:
        "We believe strong partnerships are essential to sustainable growth. We work with distributors, retailers, supermarkets, businesses, and other trade partners to create mutually beneficial opportunities and long-term relationships.",
      icon: <Handshake size={32} />,
      image: business,
    },

    {
      number: "05",
      title: "Product Portfolio Management",
      description:
        "We continuously evaluate market trends and consumer preferences to develop and maintain a product portfolio that remains relevant and competitive. Our approach allows us to introduce products that deliver value while responding to changing customer needs.",
      icon: <Package size={32} />,
      image: portfolio,
    },

    {
      number: "06",
      title: "Customer Support & Service",
      description:
        "Our relationship with customers goes beyond the point of sale. We are committed to providing responsive customer service, addressing enquiries, supporting our business partners, and ensuring a positive experience throughout our relationship.",
      icon: <Headphones size={32} />,
      image: support,
    },
  ];

  const reasons = [
    {
      title: "Quality",
      description:
        "We maintain a strong focus on product quality and consistency across our operations.",
    },

    {
      title: "Reliability",
      description:
        "Our customers and business partners can depend on us for consistent service and product availability.",
    },

    {
      title: "Professionalism",
      description:
        "We conduct our business with integrity, accountability, and respect for our customers and partners.",
    },

    {
      title: "Market Knowledge",
      description:
        "We understand the Nigerian market and continually adapt to changing consumer needs and opportunities.",
    },

    {
      title: "Strong Partnerships",
      description:
        "We believe in building long-term relationships based on trust, transparency, and mutual growth.",
    },
  ];

  return (
    <div className="w-full overflow-hidden mt-20">
     

      <section className="relative w-full bg-[#0F3D91] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-[#FF7A00] font-semibold tracking-[0.25em] text-sm uppercase mb-5">
              Our Services
            </p>

            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Quality Products.
              <br />
              Reliable Distribution.
              <br />
              Exceptional Service.
            </h1>

            <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mt-8">
              At TK Foods & Beverages, we provide comprehensive food and
              beverage solutions designed to meet the needs of retailers,
              distributors, businesses, and consumers.
            </p>
          </div>
        </div>
      </section>

      

      <section className="w-full bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <p className="text-[#FF7A00] font-semibold uppercase tracking-widest text-sm">
                What We Do
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mt-4 leading-tight">
                Connecting Quality Products With the Right Market
              </h2>
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                From product sourcing and importation to distribution and
                customer support, we are committed to delivering quality
                products and dependable service at every stage.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-6">
                Our approach is built around understanding the needs of our
                customers and business partners while creating reliable
                solutions that support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="w-full bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[#FF7A00] font-semibold uppercase tracking-widest text-sm">
              Our Services
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-3">
              What We Offer
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-5">
              We provide dependable food and beverage solutions designed to
              support businesses and deliver value to consumers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
             

                <div className="relative w-full h-76 bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-5 left-5 bg-[#0F3D91] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {service.number}
                  </div>
                </div>

                

                <div className="p-7 lg:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0F3D91] flex items-center justify-center">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-[#FF7A00] font-semibold uppercase tracking-widest text-sm">
              Why Choose Us
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-3">
              Why TK Foods & Beverages?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0F3D91] flex items-center justify-center mb-6">
                  <CheckCircle size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <section className="w-full bg-[#0F3D91] py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="w-full h-[350px] lg:h-[500px] rounded-3xl overflow-hidden bg-blue-900">
              <img
                src={aproach}
                alt="TK Foods and Beverages"
                className="w-full h-full object-cover"
              />
            </div>

           

            <div>
              <p className="text-[#FF7A00] font-semibold uppercase tracking-widest text-sm">
                Our Approach
              </p>

              <h2 className="text-white text-4xl sm:text-5xl font-bold mt-4 leading-tight">
                Built Around Quality, Service & Partnership
              </h2>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mt-7">
                At TK Foods & Beverages, we combine quality products, efficient
                distribution, customer-focused service, and strong business
                relationships to create value throughout the supply chain.
              </p>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mt-6">
                Whether you are a retailer looking for reliable product supply,
                a distributor seeking new opportunities, or a business
                interested in partnering with us, we are ready to work with you.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      <section className="w-full bg-orange-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#FF7A00] font-semibold uppercase tracking-widest text-sm">
            Partner With Us
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mt-4">
            Let's Build Something
            <br />
            Better Together
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-7 text-base sm:text-lg leading-relaxed">
            We are open to working with retailers, distributors, supermarkets,
            businesses, and strategic partners who share our commitment to
            quality and excellence.
          </p>
 

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0F3D91] text-white rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-blue-800 transition duration-300">
              Become a Partner
              <ArrowRight size={20} />
            </button>

            <Link to={"/contact"}>
              {" "}
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#0F3D91] text-[#0F3D91] rounded-full font-semibold hover:bg-[#0F3D91] hover:text-white transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
