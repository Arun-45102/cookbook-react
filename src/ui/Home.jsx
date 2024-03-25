import styles from "./Home.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  return (
    <>
      <div>
        <p className="text-center" data-aos="fade-in">
          Welcome to React Cook book
        </p>
        <Swiper spaceBetween={20} slidesPerView={6}>
          <SwiperSlide>Swiper Slide 1</SwiperSlide>
          <SwiperSlide>Swiper Slide 2</SwiperSlide>
          <SwiperSlide>Swiper Slide 3</SwiperSlide>
          <SwiperSlide>Swiper Slide 4</SwiperSlide>
          <SwiperSlide>Swiper Slide 5</SwiperSlide>
          <SwiperSlide>Swiper Slide 6</SwiperSlide>
          <SwiperSlide>Swiper Slide 7</SwiperSlide>
          <SwiperSlide>Swiper Slide 8</SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
}

// export async function loader() {
//   const trivia = await getTrivia();
//   // console.log
//   return trivia;
// }

export default Home;
