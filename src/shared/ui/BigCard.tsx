import star from '@shared/assets/images/star.svg';
import template from '@shared/template/template-img.png';
import type { Product } from '@shared/types/products/product';

export const BigCard = (product: Product) => {
  return (
    <div className="products__big-card">
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
          Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
          repudiandae veniam.
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
  );
};
