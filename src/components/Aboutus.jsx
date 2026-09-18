// import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import founder from "/src/assets/productimages/founder.jpeg";
import share from "/src/assets/productimages/share.png";
import Gencard from "../common/GenCard";
import Data from "../data/Data";

const Aboutus = () => {
  return (
    <div className="mt-35">
      <section className="w-full bg-white py-16 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
            <div className="w-full lg:w-[38%] flex justify-center">
              <img
                src={founder}
                alt="John Doe"
                className="w-full max-w-[540px] h-[500px] lg:h-[700px] object-cover rounded-3xl"
              />
            </div>

           
            <div className="w-full lg:w-[62%]">
              {/* Small Heading */}
              <div>
                <h3 className="text-[#0F3D91] text-xl  font-medium tracking-wide">
                  FOUNDER & REPRESENTATIVE
                </h3>

         
                <div className="w-14 h-1 bg-[#0F3D91] my-5 "></div>
              </div>

              
              <h1 className="text-[#111A33] text-5xl sm:text-6xl lg:text-4xl font-bold leading-tight">
                Okafor Ikenna Anthony
              </h1>

            
              <p className="text-[#0F3D91] text-lg sm:text-xl lg:text-2xl font-medium mt-4">
                Businessman | Nigeria Importer & Representative of OSHON
              </p>

              <div className="mt-5 space-y-7 text-gray-700 text-base sm:text-lg  leading-relaxed">
                <p>
                  Okafor Ikenna is a dedicated Nigerian businessman with a
                  strong passion for quality, excellence, and value.
                </p>

                <p>
                  As the Nigeria Importer and Representative of OSHON, he is
                  committed to bringing the world's finest confectionery
                  products to the Nigerian market. His leadership, integrity,
                  and deep understanding of customer needs have been
                  instrumental in making OSHON a trusted and reliable brand
                  across the country.
                </p>

                <p>
                  With years of experience in business and distribution, Okafor
                  Ikenna continues to build strong relationships, create
                  opportunities, and ensure that OSHON delivers premium quality
                  and great taste to every home, business, and partner in
                  Nigeria.
                </p>
              </div>

              <div className="mt-10 lg:mt-5 bg-[#0F3D91] rounded-2xl px-7 py-7 sm:px-9 sm:py-8">
                <div className="flex gap-5 items-start">
                  {/* Quote Icon */}
                  <div className="text-white/30 text-6xl leading-none font-serif">
                    “
                  </div>

                
                  <p className="text-white text-lg sm:text-xl lg:text-2xl italic leading-relaxed">
                    Our goal is simple: to deliver quality confectionery
                    products, build lasting relationships, and bring happiness
                    to every customer we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="w-full bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
          
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800">
                Our Foundation of Trust
              </h2>

              <p className="mt-7 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
                We are guided by clear principles and our very high quality
                standards that ensure every Tk foods and Beverages product meets
                the highest standards of taste and safety.
              </p>
            </div>

           
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
            
              <div className="flex flex-col gap-4">
           
                <div className="bg-cyan-50 rounded-lg p-8 sm:p-10 min-h-[225px]">
                  <h3 className="text-4xl sm:text-5xl font-medium text-gray-800">
                    Our Vision
                  </h3>

                  <p className="mt-8 max-w-md text-sm sm:text-base leading-relaxed text-gray-600">
                    To become a trusted leader in the food and beverage
                    industry, delivering quality products and creating lasting
                    value for customers across Nigeria and beyond.
                  </p>
                </div>

            
                <div className="bg-cyan-50 rounded-lg p-8 sm:p-10 min-h-[225px]">
                  <h3 className="text-4xl sm:text-5xl font-medium text-gray-800">
                    Our Mission
                  </h3>

                  <p className="mt-8 max-w-md text-sm sm:text-base leading-relaxed text-gray-600">
                    To provide quality, affordable, and enjoyable food and
                    beverage products while continuously improving our products,
                    services, and customer experience.
                  </p>
                </div>
              </div>

              
              <div className="bg-emerald-50 rounded-lg p-8 sm:p-10">
                <h3 className="text-4xl sm:text-5xl font-medium leading-tight text-gray-800">
                  Our Commitment to
                  <br />
                  Quality
                </h3>

               
                <p className="mt-8 text-sm sm:text-base text-gray-600">
                  “Taste and Quality 101%”
                </p>

                <p className="mt-6 text-sm sm:text-base text-gray-600">
                  This isn’t just a slogan—it’s our promise.
                </p>

                <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-600">
                  At TK food and beverages, we are committed to maintaining high
                  standards across our sourcing, production, packaging, and
                  distribution processes, ensuring every product delivers
                  consistent quality, safety, and satisfaction.
                </p>

                <p className="mt-6 text-sm sm:text-base text-gray-600">
                  Our products are proudly approved by:
                </p>

            
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              
                  <div className="bg-pink-100 min-h-[105px] flex items-center justify-center text-center p-4">
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                      National Agency
                      <br />
                      for Food and Drug
                      <br />
                      Administration
                      <br />
                      (NAFDAC)
                    </p>
                  </div>

             
                  <div className="bg-amber-100 min-h-[105px] flex items-center justify-center text-center p-4">
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                      Standards
                      <br />
                      Organization of
                      <br />
                      Nigeria (SON)
                    </p>
                  </div>

                  
                  <div className="bg-sky-100 min-h-[105px] flex items-center justify-center text-center p-4">
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                      Other relevant
                      <br />
                      regulatory bodies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-14">
        
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 leading-tight">
              Spreading Happiness in the Community
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-7">
              At TK Foods & Beverages, we believe our growth goes hand in hand
              with the well-being and development of the communities we serve.
              We are dedicated to supporting initiatives that promote education,
              strengthen families, empower individuals, and contribute to
              sustainable local development.
            </p>
          </div>

       
          <div className="w-full lg:w-1/2">
            <img
              src={share}
              alt="TK Foods & Beverages spreading happiness in the community"
              className="w-full h-auto aspect-[16/9] object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
        <div>
          <div className="mt-20 lg:px-20 px-10">
            <div>
              <h1 className="text-3xl font-semibold lg:px-50  ">
                Some Of Our Products
              </h1>
            </div>
            <div className="mt-20">
              <div className="grid lg:grid-cols-3 gap-15">
                {Data.slice(9, 15).map((product) => (
                  <Gencard key={product.productId} product={product} />
                ))}
              </div>
            </div>
            <div className=" flex justify-center items-center mt-20">
              <Link to={"/product"}>
                {" "}
                <Button text={"View All Products"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
