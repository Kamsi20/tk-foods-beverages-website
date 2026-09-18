import { useState } from "react";

export const Card = ({
  bg,
  text = "Learning AI today",
  text1 = "Discover more",
}) => {
  const [showText, setShowText] = useState(false);
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="lg:w-130 w-100 lg:h-100 h-100 p-3 bg-yellow-600 rounded-3xl group overflow-hidden"
      style={style}
      onClick={() => setShowText(!showText)}
    >
      <div className="p-5 pt-26 ">
       <p className="text-2xl font-semibold"> {text}</p>

        {/* Desktop - Hover */}
        <div
          className="
            hidden lg:block
            pt-30
            opacity-0
            translate-y-10
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            ease-out
          "
        >
         <p className="text-gray-100  text-xl"> {text1}</p>
        </div>

        {/* Mobile - Click */}
        <div
          className={`
            lg:hidden
            pt-30
            transition-all
            duration-500
            ease-out
            ${
              showText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >
          <p className="text-gray-100">{text1}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
