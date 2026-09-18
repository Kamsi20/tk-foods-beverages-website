import { Link } from "react-router-dom";
import waffer from "/src/assets/waffer1.jpg";
import candies from "/src/assets/candies2.jpg";
import chocolates from "/src/assets/chocolates2.jpg";
import lollipops from "/src/assets/lollipops2.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "Wafers",
      slug: "wafers",
      subtitle: "Crispy. Creamy. Irresistible.",
      description:
        "Discover delicious wafer treats with crispy layers and rich creamy fillings made for every sweet moment.",
      image: waffer,
      size: "large",
    },

    {
      title: "Chocolates",
      slug: "chocolates",
      subtitle: "Richness in Every Bite.",
      description:
        "Indulge in smooth, rich chocolate flavours crafted to satisfy every craving.",
      image: chocolates,
      size: "small",
    },

    {
      title: "Candies",
      slug: "candies",
      subtitle: "Colour. Fun. Sweetness.",
      description:
        "Bright and delicious treats perfect for celebrations, sharing and everyday enjoyment.",
      image: candies,
      size: "small",
    },

    {
      title: "Lollipops",
      slug: "lollipops",
      subtitle: "Sweetness on a Stick.",
      description:
        "Colourful and fun lollipops packed with exciting flavours for kids and the young at heart.",
      image: lollipops,
      size: "large",
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 mb-10 sm:mb-14">
        <div className="max-w-3xl">
          <p className="text-[#FF7A00] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            Explore Our Range
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Something Sweet
            <br className="hidden sm:block" />
            <span className="text-[#0F3D91]">For Everyone.</span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-600 leading-7 sm:leading-8">
            From crispy wafers and rich chocolates to colourful candies and
            playful lollipops, discover delicious treats made for every taste,
            mood and occasion.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-7">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/category/${category.slug}`}
              className={`
                 group relative overflow-hidden rounded-2xl sm:rounded-3xl
                 min-h-[320px] sm:min-h-[360px] lg:min-h-[430px]
                 ${category.size === "large" ? "lg:min-h-[500px]" : ""}
               `}
            >
              <img
                src={category.image}
                alt={category.title}
                className="
                  absolute
                   inset-0
                     w-full
                   h-full
                   object-cover
                   transition-transform
                    duration-700
                   ease-out
                   group-hover:scale-105
                  "
              />

              <div
                className="
                    absolute
                     inset-0
                     bg-gradient-to-t
                   from-black/85
                  via-black/35
                  to-black/5
                "
              />

              <div
                className="
                 absolute
                bottom-0
                left-0
                right-0
                p-5
                sm:p-7
                lg:p-8
               text-white
                "
              >
                <p className="text-[#FF7A00] text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {category.subtitle}
                </p>

                <h3
                  className="
        mt-2
        text-2xl
        sm:text-3xl
        lg:text-4xl
        font-extrabold
      "
                >
                  {category.title}
                </h3>

                <p
                  className="
        mt-2
        sm:mt-3
        max-w-lg
        text-xs
        sm:text-sm
        lg:text-base
        text-gray-200
        leading-6
      "
                >
                  {category.description}
                </p>

                <div className="mt-4 sm:mt-5 flex items-center gap-2">
                  <span
                    className="
          text-xs
          sm:text-sm
          font-semibold
          uppercase
          tracking-wider
        "
                  >
                    Explore
                  </span>

                  <span
                    className="
          text-[#FF7A00]
          text-lg
          transition-transform
          duration-300
          group-hover:translate-x-2
        "
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
