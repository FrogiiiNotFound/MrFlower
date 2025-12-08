import React, { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import slideAd1 from '@features/main/strawberryinchocolate.png';
import slideAd2 from '@features/main/bentocake.png';
import arrow from '@features/icons/arrow-slider.svg';

export const MainSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="home__main-slider">
      <Swiper
        className="home__main-slider-wrapper"
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={600}>
        <SwiperSlide className="home__main-slider-slide">
          <div className="home__main-slider-img">
            <img src={slideAd1} alt="slide-img" />
          </div>
          <div className="home__main-slider-info">
            <h3 className="home__main-slider-info-title">Клубника в шоколаде</h3>
            <p className="home__main-slider-info-text">Сладкие моменты для вас!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home__main-slider-slide">
          <div className="home__main-slider-img">
            <img src={slideAd2} alt="slide-img" />
          </div>
          <div className="home__main-slider-info">
            <h3 className="home__main-slider-info-title">Бенто-торты</h3>
            <p className="home__main-slider-info-text">Милый тренд для особых моментов</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="home__main-slider-buttons">
        <div
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="home__main-slider-prev">
          <img src={arrow} alt="arrow" />
        </div>
        <div
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="home__main-slider-next">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
