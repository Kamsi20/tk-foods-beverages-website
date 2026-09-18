import Gencard from "../common/GenCard";
import Data from "../data/Data";
import products from "/src/assets/productimages/products.png"

const DProduct = () => {
  return (
    <div className="mt-35">
      <div>
        <img src={products} />
       <u> <h1 className="grid items-center justify-center my-10 text-3xl font-semibold">Find Your Favourites</h1></u>
      </div>
      <div className="grid lg:grid-cols-3 gap-15">
        {Data.map((product) => (
          <Gencard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DProduct;
