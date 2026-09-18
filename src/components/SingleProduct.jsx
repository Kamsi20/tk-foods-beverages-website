import { useParams } from "react-router-dom";
import Slider from "./Slider";
import Data from "../data/Data";

const currencyFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});

const InfoBlock = ({ title, children }) => (
  <div>
    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 tracking-tight">
      {title}
    </h3>
    <div className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
      {children}
    </div>
  </div>
);

const SingleProduct = () => {
  const { id } = useParams();
  const product = Data.find((item) => item.productId === id);

  if (!product) {
    return (
      <div className="w-full mt-40 flex justify-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          Product not found
        </h1>
      </div>
    );
  }

  const {
    productName,
    productDesc,
    productDetails,
    productFlavours,
    productQuantity,
    productPrice,
    productSold,
  } = product;

  return (
    <section className="w-full mt-40  lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
       
        <div className="w-full lg:w-1/2 flex items-start justify-center overflow-hidden py-4">
          <div className="w-full flex justify-center">
            <Slider images={product.productImages} />
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 px-4 ">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight break-words">
            {productName}
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            {productDesc}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoBlock title="Description">
              <p>{productDetails}</p>
            </InfoBlock>

            <InfoBlock title="Flavours">
              <ul className="space-y-1.5">
                {productFlavours.map((flavour) => (
                  <li key={flavour} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                    {flavour}
                  </li>
                ))}
              </ul>
            </InfoBlock>

            <InfoBlock title="Quantity per Carton">
              <p>{productQuantity}</p>
            </InfoBlock>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <span className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Price
              </span>
              <u >
                {" "}
                <span className="mt-1 block text-2xl sm:text-3xl font-bold text-orange-700">
                  {currencyFormatter.format(productPrice)}
                </span>
              </u>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-500 uppercase tracking-wide">
                Quantity Sold
              </span>
              <span className="mt-1 block text-lg font-semibold text-gray-700">
                {productSold}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
