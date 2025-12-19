import { Card } from '@/entities/product';
import { useProducts } from '@/entities/product/model/useProducts';
import type { Product } from '@/shared/types/products/product';
import arrow from '@shared/assets/images/arrow-slider.svg';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';

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

  console.log('products', products);
  return (
    <div className="products__slider">
      <Swiper
        className="products__slider-wrapper"
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={27}
        slidesPerView={4}
        navigation={false}
        speed={400}
      >
        {products.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
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
