

import HeroSlider from "../ui/HeroSlider";
import ProductCategories from "../ui/ProductCategories";
import Flavour from "../ui/Flavour";
import Advert from "../ui/Advert";
import Stats from "../ui/Stats";
import Get from "../ui/Get";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
     
      <HeroSlider />

    
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* LEFT */}
            <div>
              <span className="text-[#FF7A00] text-sm font-bold uppercase tracking-[0.25em]">
                Welcome to TK Foods & Beverages
              </span>

              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
                Quality Products.
                <br />
                Great Taste.
                <br />
                <span className="text-[#0F3D91]">Every Time.</span>
              </h2>
            </div>

            
            <div className="lg:border-l lg:border-gray-200 lg:pl-12">
              <p className="text-gray-600 text-base sm:text-lg leading-8">
                At TK Foods & Beverages, we are committed to bringing quality
                food and beverage products to consumers across Nigeria. Our
                growing range of confectionery products is carefully selected to
                deliver great taste, quality, and value.
              </p>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8">
                From everyday treats to products made for sharing, we continue
                to build a trusted brand focused on customer satisfaction,
                reliability, and long-term relationships.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-12 bg-[#FF7A00] rounded-full"></div>
                <span className="text-[#0F3D91] font-semibold">
                  Taste. Quality. Trust.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-20 sm:py-24 lg:py-28 bg-gray-50">
        <ProductCategories />
      </section>

     
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <Advert />
      </section>

     
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF7A00] rounded-3xl -z-0"></div>

              <div className="relative z-10 h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/src/assets/mixfruit2.png"
                  alt="TK Foods and Beverages products"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#0F3D91] rounded-3xl -z-0"></div>
            </div>

            
            <div>
              <span className="text-[#FF7A00] text-sm font-bold uppercase tracking-[0.25em]">
                Our Promise
              </span>

              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Taste & Quality
                <br />
                <span className="text-[#0F3D91]">101%</span>
              </h2>

              <p className="mt-7 text-gray-600 text-base sm:text-lg leading-8">
                At TK Foods & Beverages, we believe every treat should deliver
                more than just sweetness. It should create a moment worth
                remembering.
              </p>

              <p className="mt-5 text-gray-600 text-base sm:text-lg leading-8">
                Our products are selected with a strong focus on taste, quality,
                consistency, and customer satisfaction. From candies and
                chocolates to wafers and cookies, we aim to make every bite an
                enjoyable experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div>
                  <div className="h-1 w-10 bg-[#FF7A00] rounded-full mb-4"></div>
                  <h3 className="font-bold text-gray-900">Quality</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Products you can trust
                  </p>
                </div>

                <div>
                  <div className="h-1 w-10 bg-[#0F3D91] rounded-full mb-4"></div>
                  <h3 className="font-bold text-gray-900">Variety</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Something for everyone
                  </p>
                </div>

                <div>
                  <div className="h-1 w-10 bg-[#FF7A00] rounded-full mb-4"></div>
                  <h3 className="font-bold text-gray-900">Satisfaction</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Customer comes first
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <span className="text-[#FF7A00] text-sm font-bold uppercase tracking-[0.25em]">
                Our Products
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Discover Your
                <br />
                <span className="text-[#0F3D91]">Favourite Flavour</span>
              </h2>
            </div>

            <p className="max-w-lg text-gray-600 text-base sm:text-lg leading-8">
              Explore our selection of delicious products created to bring great
              taste and memorable moments to every occasion.
            </p>
          </div>

          <Flavour />
        </div>
      </section>

      
      <section className="py-12 lg:py-20 bg-white">
        <Stats />
      </section>

      
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <Get />
      </section>
    </div>
  );
};

export default Home;
