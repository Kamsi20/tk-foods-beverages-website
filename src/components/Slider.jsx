

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SliderContent from "./SliderContent";

import "swiper/css";
import "swiper/css/navigation";

export default function Slider({ images }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <SliderContent image={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
