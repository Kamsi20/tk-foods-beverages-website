
import { Link } from "react-router-dom";

const Gencard = ({ product }) => {
  if (!product) return null;

  return (
    <Link
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
        block
      "
    >
      {/* ================= IMAGE ================= */}
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

      {/* ================= PRODUCT INFO ================= */}
      <div className="p-5">

        {/* PRODUCT NAME */}
        <h2
          className="
            text-xl
            font-bold
            text-gray-900
            group-hover:text-[#0F3D91]
            transition-colors
          "
        >
          {product.productName}
        </h2>

        {/* FLAVOURS */}
        {product.productFlavours && (
          <p className="mt-1 text-xs text-gray-500">
            {Array.isArray(product.productFlavours)
              ? product.productFlavours.join(" • ")
              : product.productFlavours}
          </p>
        )}

        {/* DESCRIPTION */}
        <p
          className="
            mt-2
            text-sm
            text-gray-600
            leading-6
            line-clamp-2
          "
        >
          {product.productDesc}
        </p>

        {/* QUANTITY */}
        {product.productQuantity && (
          <p className="mt-3 text-xs text-gray-500">
            {product.productQuantity}
          </p>
        )}

        {/* PRICE + VIEW */}
        <div className="mt-4 flex items-center justify-between">

          {/* PRICE */}
          {product.productPrice && (
            <span className="text-lg font-extrabold text-[#0F3D91]">
              ₦{product.productPrice.toLocaleString()}
            </span>
          )}

          {/* VIEW */}
          <span
            className="
              text-[#FF7A00]
              font-bold
              text-sm
              group-hover:translate-x-1
              transition-transform
            "
          >
            View →
          </span>

        </div>

      </div>
    </Link>
  );
};

export default Gencard;

