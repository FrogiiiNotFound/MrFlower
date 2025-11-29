import React, { useRef } from 'react';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import arrow from '@features/icons/arrow-slider.svg';
import { Navigation } from 'swiper/modules';
import template from '@features/template/template-img.png';
import star from '@features/icons/star.svg';

export const PromoSlider = () => {
  const SwiperRef = useRef<SwiperRef>(null);

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
        <SwiperSlide>
          <div className="home__addition-slider-slide">
            <div className="home__mini-card">
              <div className="home__addition-slider-img">
                <img src={template} alt="slider-img" />
              </div>
              <div className="home__addition-slider-slide-content">
                <h3 className="home__addition-slider-title">Уилл Грема застрелят</h3>
                <div className="home__addition-slider-rating">
                  <div className="home__addition-slider-star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="home__addition-slider-price-container">
                    <div className="home__addition-slider-value">4.6</div>
                    <div className="home__addition-slider-number">(112)</div>
                  </div>
                </div>
                <p className="home__addition-slider-desc">
                  Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
                  repudiandae veniam.
                </p>
                <div className="home__addition-slider-pricing">
                  <div className="home__addition-slider-price">
                    <div className="home__addition-slider-new-price">1 999 ₽</div>
                    <div className="home__addition-slider-old-price">2598 ₽</div>
                  </div>
                  <div className="home__addition-slider-btn">
                    <p className="home__addition-slider-btn-text">В корзину</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__mini-card">
              <div className="home__addition-slider-img">
                <img src={template} alt="slider-img" />
              </div>
              <div className="home__addition-slider-slide-content">
                <h3 className="home__addition-slider-title">Уилл Грема застрелят</h3>
                <div className="home__addition-slider-rating">
                  <div className="home__addition-slider-star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="home__addition-slider-price-container">
                    <div className="home__addition-slider-value">4.6</div>
                    <div className="home__addition-slider-number">(112)</div>
                  </div>
                </div>
                <p className="home__addition-slider-desc">
                  Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
                  repudiandae veniam.
                </p>
                <div className="home__addition-slider-pricing">
                  <div className="home__addition-slider-price">
                    <div className="home__addition-slider-new-price">1 999 ₽</div>
                    <div className="home__addition-slider-old-price">2598 ₽</div>
                  </div>
                  <div className="home__addition-slider-btn">
                    <p className="home__addition-slider-btn-text">В корзину</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home__addition-slider-slide">
            <div className="home__mini-card">
              <div className="home__addition-slider-img">
                <img src={template} alt="slider-img" />
              </div>
              <div className="home__addition-slider-slide-content">
                <h3 className="home__addition-slider-title">Уилл Грема застрелят</h3>
                <div className="home__addition-slider-rating">
                  <div className="home__addition-slider-star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="home__addition-slider-price-container">
                    <div className="home__addition-slider-value">4.6</div>
                    <div className="home__addition-slider-number">(112)</div>
                  </div>
                </div>
                <p className="home__addition-slider-desc">
                  Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
                  repudiandae veniam.
                </p>
                <div className="home__addition-slider-pricing">
                  <div className="home__addition-slider-price">
                    <div className="home__addition-slider-new-price">1 999 ₽</div>
                    <div className="home__addition-slider-old-price">2598 ₽</div>
                  </div>
                  <div className="home__addition-slider-btn">
                    <p className="home__addition-slider-btn-text">В корзину</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__mini-card">
              <div className="home__addition-slider-img">
                <img src={template} alt="slider-img" />
              </div>
              <div className="home__addition-slider-slide-content">
                <h3 className="home__addition-slider-title">Уилл Грема застрелят</h3>
                <div className="home__addition-slider-rating">
                  <div className="home__addition-slider-star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="home__addition-slider-price-container">
                    <div className="home__addition-slider-value">4.6</div>
                    <div className="home__addition-slider-number">(112)</div>
                  </div>
                </div>
                <p className="home__addition-slider-desc">
                  Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
                  repudiandae veniam.
                </p>
                <div className="home__addition-slider-pricing">
                  <div className="home__addition-slider-price">
                    <div className="home__addition-slider-new-price">1 999 ₽</div>
                    <div className="home__addition-slider-old-price">2598 ₽</div>
                  </div>
                  <div className="home__addition-slider-btn">
                    <p className="home__addition-slider-btn-text">В корзину</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="home__addition-slider-slide">
            <div className="home__mini-card">
              <div className="home__addition-slider-img">
                <img src={template} alt="slider-img" />
              </div>
              <div className="home__addition-slider-slide-content">
                <h3 className="home__addition-slider-title">Уилл Грема застрелят</h3>
                <div className="home__addition-slider-rating">
                  <div className="home__addition-slider-star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="home__addition-slider-price-container">
                    <div className="home__addition-slider-value">4.6</div>
                    <div className="home__addition-slider-number">(112)</div>
                  </div>
                </div>
                <p className="home__addition-slider-desc">
                  Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
                  repudiandae veniam.
                </p>
                <div className="home__addition-slider-pricing">
                  <div className="home__addition-slider-price">
                    <div className="home__addition-slider-new-price">1 999 ₽</div>
                    <div className="home__addition-slider-old-price">2598 ₽</div>
                  </div>
                  <div className="home__addition-slider-btn">
                    <p className="home__addition-slider-btn-text">В корзину</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__mini-card">
              <div className="home__addition-slider-img">
                <img src={template} alt="slider-img" />
              </div>
              <div className="home__addition-slider-slide-content">
                <h3 className="home__addition-slider-title">Уилл Грема застрелят</h3>
                <div className="home__addition-slider-rating">
                  <div className="home__addition-slider-star">
                    <img src={star} alt="star" />
                  </div>
                  <div className="home__addition-slider-price-container">
                    <div className="home__addition-slider-value">4.6</div>
                    <div className="home__addition-slider-number">(112)</div>
                  </div>
                </div>
                <p className="home__addition-slider-desc">
                  Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
                  repudiandae veniam.
                </p>
                <div className="home__addition-slider-pricing">
                  <div className="home__addition-slider-price">
                    <div className="home__addition-slider-new-price">1 999 ₽</div>
                    <div className="home__addition-slider-old-price">2598 ₽</div>
                  </div>
                  <div className="home__addition-slider-btn">
                    <p className="home__addition-slider-btn-text">В корзину</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
