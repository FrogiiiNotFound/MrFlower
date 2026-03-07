import { useCart } from "@/entities/card";
import star from "@shared/assets/images/star.svg";
import { Link } from "react-router-dom";
import "./Card.scss";
import type { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ product }) => {
    const { addToCart } = useCart();

    const oldPrice =
        product?.price + Math.round((product?.discount / 100) * product?.price);

    const item = {
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        oldPrice: oldPrice,
        amount: 1,
    };

    return (
        <Link to={`/product/${product?.id}`} className="card-link">
            <div className="card">
                <div className="card__img">
                    <img src={product?.image} alt="card-img" />
                </div>
                <div className="card__content">
                    <div className="card__info">
                        <h3 className="card__slide-title">{product?.name}</h3>
                        <div className="card__rating">
                            <div className="card__star">
                                <img src={star} alt="star" />
                            </div>
                            <div className="card__price-container">
                                <div className="card__value">
                                    {product?.rating}
                                </div>
                                <div className="card__number">
                                    ({product?.reviews})
                                </div>
                            </div>
                        </div>
                        <p className="card__desc">{product?.description}</p>
                    </div>
                    <div className="card__pricing">
                        <div className="card__price">
                            <p className="card__new-price">
                                {product?.price} ₽
                            </p>
                            <p className="card__old-price">{oldPrice} ₽</p>
                        </div>
                        <div
                            className="card__btn"
                            onClick={() => addToCart(item)}
                        >
                            <p className="card__btn-text">В корзину</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
