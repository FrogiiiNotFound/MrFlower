import { Card } from '@/entities/product';
import { useProducts } from '@/entities/product/model/useProducts';
import type { Product } from '@/shared/types/products/product';
import arrow from '@shared/assets/images/arrow-slider.svg';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import './Slider.scss';

export const Slider = ({ filter }: { filter: string }) => {
  const swiperRef = useRef<SwiperRef>(null);

  const { data, isLoading, error }: any = useProducts();

  if (isLoading) {
    console.log('Загрузка...');
    return <div>Загрузка...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Ошибка загрузки</div>;
  }
  if (!data) return null;

  const list: Product[] = Array.isArray(data) ? data : data.products;
  const products = list.filter((item: Product) => item.tags.includes(filter));

  return (
    <div className="slider">
      <Swiper
        className="slider__wrapper"
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={27}
        slidesPerView={4}
        navigation={false}
        speed={400}>
        {products.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider__buttons">
        <div onClick={() => swiperRef.current?.swiper.slidePrev()} className="slider__prev">
          <img src={arrow} alt="arrow" />
        </div>
        <div onClick={() => swiperRef.current?.swiper.slideNext()} className="slider__next">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
