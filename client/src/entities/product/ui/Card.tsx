import { useCartStore } from "@/entities/cart";
import minus from "@shared/assets/images/minus.svg";
import plus from "@shared/assets/images/plus.svg";
import star from "@shared/assets/images/star.svg";
import { Link } from "react-router-dom";
import "./Card.scss";
import type { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({ product }) => {
    const { cart, decreaseAmount, increaseAmount, removeFromCart, addToCart } =
        useCartStore();

    const oldPrice =
        product?.price + Math.round((product?.discount / 100) * product?.price);

    const item = {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        discount: product.discount,
        oldPrice: oldPrice,
        amount: 1,
    };
    const cartItem = cart.find((item) => item.id === product?.id);

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
                        {cart.find((p) => p.id === product.id) ? (
                            <div
                                className="card__amount"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                            >
                                <div
                                    className="card__amount-decrease"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        if (!cartItem) return;

                                        if (cartItem.amount > 1) {
                                            decreaseAmount(product.id);
                                        } else {
                                            removeFromCart(product.id);
                                        }
                                    }}
                                >
                                    <img src={minus} alt="minus" />
                                </div>
                                <p className="card__amount-value">
                                    {cartItem?.amount || 1}
                                </p>
                                <div
                                    className="card__amount-increase"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        increaseAmount(product.id);
                                    }}
                                >
                                    <img src={plus} alt="plus" />
                                </div>
                            </div>
                        ) : (
                            <div
                                className="card__btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    addToCart(item);
                                }}
                            >
                                <p className="card__btn-text">В корзину</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};
