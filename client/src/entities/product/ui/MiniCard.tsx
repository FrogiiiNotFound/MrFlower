import type { Product } from "@/shared/types";
import star from "@shared/assets/images/star.svg";
import "./MiniCard.scss";
import { Link } from "react-router-dom";
import { lengthLimit } from "@/shared/utils/helpers/lengthLimit";

export const MiniCard = ({ product }: { product: Product }) => {
    const oldPrice =
        product?.price + Math.round((product?.discount / 100) * product?.price);

    return (
        <Link to={`/product/${product?.id}`} className="mini-card-link">
            <div className="mini-card">
                <div className="mini-card__img">
                    <img src={product?.image} alt="card-img" />
                </div>
                <div className="mini-card__slide-content">
                    <h3 className="mini-card__title">{product?.name}</h3>
                    <div className="mini-card__rating">
                        <div className="mini-card__star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="mini-card__price-container">
                            <div className="mini-card__value">
                                {product?.rating}
                            </div>
                            <div className="mini-card__number">
                                ({product?.reviews})
                            </div>
                        </div>
                    </div>
                    <p className="mini-card__desc">
                        {lengthLimit(product?.description)}
                    </p>
                    <div className="mini-card__pricing">
                        <div className="mini-card__price">
                            <div className="mini-card__new-price">
                                {product?.price} ₽
                            </div>
                            <div className="mini-card__old-price">
                                {oldPrice} ₽
                            </div>
                        </div>
                        <div className="mini-card__btn">
                            <p className="mini-card__btn-text">В корзину</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
