

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import milkyeclair4 from "/src/assets/productimages/milkyeclairr4.png";

const Get = () => {
  return (
    <section className="w-full mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#0F3D91]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            

            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="text-[#FF7A00] uppercase tracking-[0.2em] text-sm font-semibold">
                Discover TK
              </p>

              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4">
                Treat Yourself
                <br />
                To Something
                <br />
                <span className="text-orange-400">Sweet.</span>
              </h2>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed mt-7 max-w-lg">
                Discover delicious flavours and quality confectionery products
                made for everyday enjoyment, celebrations, sharing, and every
                special moment in between.
              </p>

              <Link
                to="/product"
                className="inline-flex items-center gap-3 mt-9 px-7 py-4 bg-[#FF7A00] text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300"
              >
                Explore Our Products
                <ArrowRight size={20} />
              </Link>
            </div>

            

            <div className="flex justify-center rounded-2xl lg:h-full">
              <img
                src={milkyeclair4}
                alt="TK Milk Y Eclair"
                className="w-full  object-contain mb-5 px-5 lg:mt-0 rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get;
