import { Link, useParams } from "react-router-dom";
import Data from "../data/Data";

const CategoryPage = () => {
  const { category } = useParams();

  
  const products = Data.filter(
    (product) => product.category === category
  );

  
  const categoryName =
    category?.charAt(0).toUpperCase() + category?.slice(1);

  return (
    <section className="w-full min-h-screen bg-gray-50 pt-44 pb-20">
      
     
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 mb-12">
        
        <p className="text-[#FF7A00] text-sm font-bold uppercase tracking-[0.2em]">
          Explore Our Range
        </p>

        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          {categoryName}
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600 text-sm sm:text-base lg:text-lg leading-7">
          Discover our delicious collection of {categoryName.toLowerCase()},
          crafted to bring great taste and sweetness to every moment.
        </p>

      </div>


      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">

        {products.length > 0 ? (
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {products.map((product) => (

              <Link
                key={product.productId}
                to={`/product/${product.productId}`}
                className="
                  group
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >

               
                <div className="relative h-64 bg-gray-100 overflow-hidden">

                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="
                      w-full
                      h-full
                      object-contain
                      p-5
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                </div>


                <div className="p-5">

                  <h2 className="
                    text-xl
                    font-bold
                    text-gray-900
                    group-hover:text-[#0F3D91]
                    transition-colors
                  ">
                    {product.productName}
                  </h2>


                  <p className="
                    mt-2
                    text-sm
                    text-gray-600
                    leading-6
                    line-clamp-2
                  ">
                    {product.productDesc}
                  </p>


                 
                  <p className="mt-3 text-xs text-gray-500">
                    {product.productQuantity}
                  </p>


                 
                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-lg font-extrabold text-[#0F3D91]">
                      ₦{product.productPrice.toLocaleString()}
                    </span>

                    <span className="
                      text-[#FF7A00]
                      font-bold
                      text-sm
                      group-hover:translate-x-1
                      transition-transform
                    ">
                      View →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <h2 className="text-2xl font-bold text-gray-800">
              No products found
            </h2>

            <p className="mt-2 text-gray-500">
              There are currently no products in this category.
            </p>

            <Link
              to="/"
              className="
                inline-block
                mt-6
                bg-[#0F3D91]
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:bg-[#FF7A00]
                transition
              "
            >
              Back Home
            </Link>

          </div>

        )}

      </div>

    </section>
  );
};

export default CategoryPage;