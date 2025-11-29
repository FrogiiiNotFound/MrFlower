import search from '@features/main/search.svg';
import star from '@features/icons/star.svg';
import template from '@features/template/template-img.png';
import arrow from '@features/icons/arrow-slider.svg';
import slideAd1 from '@features/main/strawberryinchocolate.png';
import slideAd2 from '@features/main/bentocake.png';
import './Home.scss';
import './Products.scss';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Main = () => {
  const swiperRef = useRef(null);
  return (
    <div>
      <section className="home">
        <div className="home__container _container">
          <ul className="home__search-list">
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">Для девушки</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">День рождения</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">День учителя</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">8 марта</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">Новый год</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">14 февраля</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">14 февраля</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">14 февраля</p>
            </li>
          </ul>
          <div className="home__content">
            <div className="home__main-slider">
              <Swiper
                className="home__main-slider-wrapper"
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={false}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                speed={600}>
                <SwiperSlide className="home__main-slider-slide">
                  <div className="home__main-slider-img">
                    <img src={slideAd1} alt="slide-img" />
                  </div>
                  <p className="home__main-slider-info">
                    <h3 className="home__main-slider-info-title">Клубника в шоколаде</h3>
                    <p className="home__main-slider-info-text">Сладкие моменты для вас!</p>
                  </p>
                </SwiperSlide>
                <SwiperSlide className="home__main-slider-slide">
                  <div className="home__main-slider-img">
                    <img src={slideAd2} alt="slide-img" />
                  </div>
                  <p className="home__main-slider-info">
                    <h3 className="home__main-slider-info-title">Клубника в шоколаде</h3>
                    <p className="home__main-slider-info-text">Сладкие моменты для вас!</p>
                  </p>
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
            <div className="home__addition-slider">
              <div className="home__addition-slider-content">
                <h2 className="home__addition-title">Товары и акции дня</h2>
                <div className="home__addition-slider-buttons">
                  <div className="home__addition-slider-prev">
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className="home__addition-slider-next">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
              <div className="home__addition-slider-wrapper">
                <div className="home__addition-slider-slide">
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
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
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
                <div className="home__addition-slider-slide">
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
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
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
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="products__container _container">
          <div className="products__slider-container">
            <h3 className="products__slider-title">В тренде</h3>
            <div className="products__slider">
              <div className="products__slider-wrapper">
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products__slider-buttons">
                <div className="products__slider-prev">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="products__slider-next">
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="products__slider-container">
            <h3 className="products__slider-title">В тренде</h3>
            <div className="products__slider">
              <div className="products__slider-wrapper">
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products__slider-buttons">
                <div className="products__slider-prev">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="products__slider-next">
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="products__slider-container">
            <h3 className="products__slider-title">В тренде</h3>
            <div className="products__slider">
              <div className="products__slider-wrapper">
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products__slider-slide">
                  <div className="products__slider-img">
                    <img src={template} alt="slider-img" />
                  </div>
                  <div className="products__slider-content">
                    <h3 className="products__slider-slide-title">Уилл Грема застрелят</h3>
                    <div className="products__slider-rating">
                      <div className="products__slider-star">
                        <img src={star} alt="star" />
                      </div>
                      <div className="products__slider-price-container">
                        <div className="products__slider-value">4.6</div>
                        <div className="products__slider-number">(112)</div>
                      </div>
                    </div>
                    <p className="products__slider-desc">
                      Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                      commodi. repudiandae veniam.
                    </p>
                    <div className="products__slider-pricing">
                      <div className="products__slider-price">
                        <p className="products__slider-new-price">1 999 ₽</p>
                        <p className="products__slider-old-price">2598 ₽</p>
                      </div>
                      <div className="products__slider-btn">
                        <p className="products__slider-btn-text">В корзину</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products__slider-buttons">
                <div className="products__slider-prev">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="products__slider-next">
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
