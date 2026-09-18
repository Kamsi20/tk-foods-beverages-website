import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import Gencard from "../common/GenCard";
import Data from "../data/Data";

const Flavour = () => {
  return (
    <div className="mt-20 lg:px-20 px-10">
      <div>
        <h1 className=" grid items-center justify-center text-3xl font-semibold   ">
          Choose Your Flavour
        </h1>
      </div>
      <div className="mt-20">
        <div className="grid lg:grid-cols-3 gap-15">
          {Data.slice(0, 9).map((product) => (
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
  );
};

export default Flavour;
