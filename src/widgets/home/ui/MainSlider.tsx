import arrow from '@shared/assets/images/arrow-slider.svg';
import { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import slideAd1 from '../assets/bento-cake.png';
import slideAd2 from '../assets/strawberry-in-chocolate.png';
import './MainSlider.scss';

export const MainSlider = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="main-slider">
      <Swiper
        className="main-slider__wrapper"
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={600}>
        <SwiperSlide className="main-slider__slide">
          <div className="main-slider__img">
            <img src={slideAd2} alt="slide-img" />
          </div>
          <div className="main-slider__info">
            <h3 className="main-slider__info-title">Клубника в шоколаде</h3>
            <p className="main-slider__info-text">Сладкие моменты для вас!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-slider__slide">
          <div className="main-slider__img">
            <img src={slideAd1} alt="slide-img" />
          </div>
          <div className="main-slider__info">
            <h3 className="main-slider__info-title">Бенто-торты</h3>
            <p className="main-slider__info-text">Милый тренд для особых моментов</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="main-slider__buttons">
        <div onClick={() => swiperRef.current?.swiper.slidePrev()} className="main-slider__prev">
          <img src={arrow} alt="arrow" />
        </div>
        <div onClick={() => swiperRef.current?.swiper.slideNext()} className="main-slider__next">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
