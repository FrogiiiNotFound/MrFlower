import arrow from '@features/icons/arrow-slider.svg';
import { BigCard } from '@shared/index';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';

export const Slider = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="products__slider">
      <Swiper
        className="products__slider-wrapper"
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={27}
        slidesPerView={4}
        navigation={false}
        speed={400}>
        <SwiperSlide>
          <BigCard />
        </SwiperSlide>
        <SwiperSlide>
          <BigCard />
        </SwiperSlide>
        <SwiperSlide>
          <BigCard />
        </SwiperSlide>
        <SwiperSlide>
          <BigCard />
        </SwiperSlide>
        <SwiperSlide>
          <BigCard />
        </SwiperSlide>
      </Swiper>
      <div className="products__slider-buttons">
        <div
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className="products__slider-prev">
          <img src={arrow} alt="arrow" />
        </div>
        <div
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className="products__slider-next">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
