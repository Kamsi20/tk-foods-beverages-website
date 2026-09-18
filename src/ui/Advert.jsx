import ladyyogurt4 from "/src/assets/productimages/ladyyogurt4.png";
import alpines1 from "/src/assets/mixfruit2.png";
import richroll7 from "/src/assets/productimages/RICHROLL/richroll7.png";

const Advert = () => {
  return (
    <div className="mt-25 mx-10">
      <div>
        <div className="flex items-center justify-center">
          <h1 className="lg:text-4xl font-semibold md:text-3xl  text-4xl ">
            There's a Product for Every Occasion or Craving.
          </h1>
        </div>
        <div className="mt-20 grid lg:grid-cols-3  items-center justify-center">
          <div>
            <div className="w-full max-w-md  bg-blue-100  p-10 rounded-2xl  ">
              <h1 className="text-2xl font-semibold">Made for Everyone</h1>
              <p className="mt-5 text-gray-800">
                From little moments to special celebrations, there’s something
                for everyone. Enjoy delicious treats crafted to bring joy to
                every taste, every age, and every occasion.
              </p>
            </div>
            <div className="w-full max-w-md my-5 bg-green-100 p-10 rounded-2xl  ">
              <h1 className="text-2xl font-semibold">Share with Everyone</h1>
              <p className="mt-5 text-gray-800">
                Good moments are better when shared. Whether it’s a family
                gathering, a celebration with friends, or simply a treat to
                enjoy together, our delicious range of chocolates, wafers,
                cookies, and candies is made to bring people closer—one bite at
                a time.
              </p>
            </div>
            <div className="w-full max-w-md  bg-yellow-100 p-10 rounded-2xl  ">
              <h1 className="text-2xl font-semibold">
                {" "}
                Experiences Made Better
              </h1>
              <p className="mt-5 text-gray-800">
                Turn everyday moments into something special with flavors you’ll
                love. From the first bite to the last, our delicious treats are
                made to add a little more joy, excitement, and indulgence to
                every experience.
              </p>
            </div>
          </div>
          <div className="grid items-center justify-center   ">
            <img src={ladyyogurt4} className=" w-80" alt="richroll" />
            <img src={richroll7} className=" w-80" alt="richroll" />
          </div>
          <div>
            <div className="w-full max-w-md   bg-orange-100 p-10 rounded-2xl  ">
              <h1 className="text-2xl font-semibold">Taste And Quality 101%</h1>
              <p className="mt-5 text-gray-800">
                Every bite delivers more of what you love. We combine
                irresistible taste with exceptional quality to create treats
                that are delicious, satisfying, and made to leave you wanting
                more. Because when it comes to great taste and quality, we
                always go beyond 100%.
              </p>
            </div>
            <div className="w-full max-w-md my-5 bg-pink-100 p-10 rounded-2xl  ">
              <h1 className="text-2xl font-semibold">
                A Flavor for Every Mood{" "}
              </h1>
              <p className="mt-5 text-gray-800">
                Whatever the mood, there’s a flavor waiting for you. From rich
                chocolate and creamy wafers to sweet candies and delicious
                cookies, our irresistible treats are made to match every mood.
              </p>
            </div>

            <div className="w-full max-w-md  bg-purple-100 p-10 rounded-2xl  ">
              <h1 className="text-2xl font-semibold">Unbox Happiness</h1>
              <p className="mt-5 text-gray-800">
                Every package is a little box of joy waiting to be discovered.
                Unwrap delicious flavors, delightful surprises, and irresistible
                treats made to bring a smile to every moment. Open it, share it,
                and let the happiness begin!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 gap-10 items-center justify-center lg:mx-20 mx-5 my-20">
        <div className=" ">
          <img src={alpines1} className=" bg-gray-200 rounded-2xl" />
        </div>
        <div className=" ">
          <h1 className="text-3xl font-semibold">
            {" "}
            TK'S Unbeatable Quality and Taste 101%
          </h1>
          <p className="mt-15 text-lg">
            At TK, we believe every treat should deliver more than just
            sweetness, it should create a moment worth remembering. Our candies
            and confectionery products are made with carefully selected
            ingredients, vibrant flavours, and a commitment to quality that puts
            enjoyment first. From the first taste to the last, TK delivers bold
            flavour, irresistible texture, and consistent quality in every bite.
            We combine creativity, care, and modern confectionery standards to
            create treats that families, friends, and communities can enjoy
            together. Our promise is simple: exceptional quality, unforgettable
            taste, and 101% satisfaction in every TK treat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advert;
