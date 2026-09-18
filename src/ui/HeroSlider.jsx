import { useState, useEffect } from "react";
import {  ChevronRight } from "lucide-react";
import richroll from "../assets/sliderimage.png";
import chocowonder from "../assets/sliderimage2.png";
import chocotron from "../assets/sliderimage3.png";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    
    bgImage: richroll,
    badge: "Rich Rolls Collection",
    title: "Rich Roll Wafers",
    subtitle: "Crunchy, Creamy & Irresistibly Delicious! 🍫✨",
    description:
      "Whether you’re enjoying a quick snack at home, sharing with friends and family, or adding a little sweetness to your day, Rich Roll Wafers are the perfect choice.",
    buttonText: "Explore Now",
    buttonLink: "#",
  },
  {
    id: 2,
    bgImage: chocowonder,
    badge: "CHOCO WONDER",
    title: "Taste The Wonder!",
    subtitle: "Crispy Waffles, Rich Chocolate Delight",
    description:
      "Treat yourself to the irresistible taste of Choco Wonder Waffles! Enjoy crispy, golden wafer layers filled with rich, delicious chocolate goodness.",
    buttonText: "Shop Now",
    buttonLink: "#",
  },
  {
    id: 3,
    bgImage: chocotron,
    badge: "CHOCO TRON",
    title: "Chocolate Made Better",
    subtitle: "Rich Chocolate, Crunchy Delight",
    description:
      "Enjoy the irresistible taste of Choco Tron Bar, packed with rich chocolate goodness and a satisfying crunch. ",
    buttonText: "Discover Flavors",
    buttonLink: "#",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Declare functions FIRST
  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // 2. useEffect comes AFTER functions are declared
  useEffect(() => {
    // ScrollReveal setup...
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-35 w-full h-[60vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] min-h-180 overflow-hidden bg-black group">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
            {/* Responsive Content Container */}
            <div className="max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex flex-col justify-center items-start text-white">
              <div className="max-w-xl space-y-3 sm:space-y-4 md:space-y-6">
                {/* Editable Badge */}
                {slide.badge && (
                  <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold tracking-wider text-amber-300 bg-amber-900/60 backdrop-blur-md rounded-full border border-amber-500/30">
                    {slide.badge}
                  </span>
                )}

               
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md leading-tight">
                  {slide.title}
                </h1>

               
                <p className="text-sm sm:text-lg md:text-xl font-medium text-gray-200 drop-shadow">
                  {slide.subtitle}
                </p>

                
                <p className="text-xs sm:text-sm md:text-base text-gray-300 lg:line-clamp-2 sm:line-clamp-3">
                  {slide.description}
                </p>

                
                <div className="pt-2 sm:pt-4">
                 <Link to={"/product"}>
                  <a
                    href={slide.buttonLink}
                    className="inline-block px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    {slide.buttonText}
                  </a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

     
      {/* <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-0 sm:left-2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-r-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-300 focus:outline-none"
      >
        <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
      </button> */}

     
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-l-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all duration-300 focus:outline-none"
      >
        <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 sm:w-10 bg-white"
                : "w-2.5 sm:w-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
