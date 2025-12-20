import { MiniCard } from '@/entities/product';
import { useProducts } from '@/entities/product/model/useProducts';
import type { Product } from '@/shared/types';
import arrow from '@shared/assets/images/arrow-slider.svg';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';

export const PromoSlider = () => {
  const SwiperRef = useRef<SwiperRef>(null);

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
  const products = list.filter((item: Product) => item.tags.includes('акции дня'));
  
  return (
    <div className="home__addition-slider">
      <div className="home__addition-slider-content">
        <h2 className="home__addition-title">Товары и акции дня</h2>
        <div className="home__addition-slider-buttons">
          <div
            onClick={() => SwiperRef.current?.swiper.slidePrev()}
            className="home__addition-slider-prev">
            <img src={arrow} alt="arrow" />
          </div>
          <div
            onClick={() => SwiperRef.current?.swiper.slideNext()}
            className="home__addition-slider-next">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <Swiper
        className="home__addition-slider-wrapper"
        ref={SwiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={400}
        navigation={false}>
        {products.map((product, index) => {
          if (index % 2 !== 0) return null;

          return (
            <SwiperSlide key={product.id}>
              <MiniCard product={products[index]} />
              {products[index + 1] && <MiniCard product={products[index + 1]} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
