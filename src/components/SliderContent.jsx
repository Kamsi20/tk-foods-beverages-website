const SliderContent = ({ image }) => {
  return (
    <div className="w-full px-3 sm:px-5 lg:px-8 flex justify-center">
      <div className="w-full max-w-[500px] aspect-square overflow-hidden border flex items-center justify-center h-100">
        <img
          src={image}
          alt="product"
          className="w-full h-full object-contain py-3"
        />
      </div>
    </div>
  );
};

export default SliderContent;
