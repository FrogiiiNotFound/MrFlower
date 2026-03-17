import { useCartStore } from "@/entities/cart/model/useCartStore";
import { type CartItem as TCartItem } from "@/entities/cart/model/types";
import "./Cart.scss";
import { CartItem } from "./CartItem";

export const Cart = () => {
    const { cart } = useCartStore();

    const priceWithoutDiscount = cart.reduce(
        (sum, item) => sum + item.oldPrice * item.amount,
        0,
    );
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.amount,
        0,
    );
    const discount = priceWithoutDiscount - totalPrice;
    return (
        <div className="cart">
            <div className="cart__container _container">
                <h2 className="cart__title title">Корзина</h2>
                {cart.length > 0 ? (
                    <div className="cart__content">
                        <div className="cart__purchases">
                            {cart?.map((product: TCartItem) => (
                                <CartItem product={product} />
                            ))}
                        </div>
                        <div className="cart__price">
                            <h3 className="cart__price-title">
                                Оформление заказа
                            </h3>
                            <div className="cart__cost">
                                <p className="cart__cost-title">
                                    Стоимость товаров
                                </p>
                                <p className="cart__cost-value">
                                    {priceWithoutDiscount} ₽
                                </p>
                            </div>
                            <div className="cart__delivery">
                                <p className="cart__delivery-title">Доставка</p>
                                <p className="cart__delivery-value">
                                    Бесплатно
                                </p>
                            </div>
                            <div className="cart__discount">
                                <p className="cart__discount-title">Скидка</p>
                                <p className="cart__dicount-value">
                                    - {discount} ₽{" "}
                                </p>
                            </div>
                            <div className="cart__final-price">
                                <p className="cart__final-price-title">Итого</p>
                                <p className="cart__final-price-value">
                                    {totalPrice} ₽
                                </p>
                            </div>
                            <div className="cart__bonus">
                                <p className="cart__bonus-title">
                                    Вернется бонусами
                                </p>
                                <p className="cart__bonus-value">
                                    + {Math.floor(totalPrice * 0.05)} ₽
                                </p>
                            </div>
                            <div className="cart__btn">
                                <div className="cart__btn-text">
                                    Оформить заказ
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="cart__empty">
                        Вы еще не добавили предметов в корзину
                    </div>
                )}
            </div>
        </div>
    );
};
