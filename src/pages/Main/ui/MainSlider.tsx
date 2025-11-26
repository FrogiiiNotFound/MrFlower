import mainSliderImg from '@features/main/mainSlider-slide.png';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const MainSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="main-slider__slider">
        <div className="main-slider__slide">лкапорклар</div>
        <SwiperSlide>
          <div className="main-slider-img">
            <img src={mainSliderImg} alt="mainSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-slider-img">
            <img src={mainSliderImg} alt="mainSliderImg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-slider-img">
            <img src={mainSliderImg} alt="mainSliderImg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
