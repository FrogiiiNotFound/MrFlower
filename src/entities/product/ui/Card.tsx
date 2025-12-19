import star from '@shared/assets/images/star.svg';
import type { Product } from '@shared/types/products/product';

type CardProps = {
  product: Product;
};

export const Card: React.FC<CardProps> = ({ product }) => {
  const oldPrice = product?.price + Math.round((product?.discount / 100) * product?.price);

  return (
    <div className="products__big-card">
      <div className="products__slider-img">
        <img src={product?.image} alt="slider-img" />
      </div>
      <div className="products__slider-content">
        <div className='products__slider-info'>
          <h3 className="products__slider-slide-title">{product?.name}</h3>
          <div className="products__slider-rating">
            <div className="products__slider-star">
              <img src={star} alt="star" />
            </div>
            <div className="products__slider-price-container">
              <div className="products__slider-value">{product?.rating}</div>
              <div className="products__slider-number">({product?.reviewsCount})</div>
            </div>
          </div>
          <p className="products__slider-desc">{product?.description}</p>
        </div>
        <div className="products__slider-pricing">
          <div className="products__slider-price">
            <p className="products__slider-new-price">{product?.price} ₽</p>
            <p className="products__slider-old-price">{oldPrice} ₽</p>
          </div>
          <div className="products__slider-btn">
            <p className="products__slider-btn-text">В корзину</p>
          </div>
        </div>
      </div>
    </div>
  );
};
