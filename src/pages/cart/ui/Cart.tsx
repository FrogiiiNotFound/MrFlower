import { useCartStore, type CartItem as TCartItem } from "@/entities/card";
import "./Cart.scss";
import { CartItem } from "./CartItem";

export const Cart = () => {
    const { cart } = useCartStore();
    return (
        <div className="cart">
            <div className="cart__container _container">
                <h2 className="cart__title title">Корзина</h2>
                {cart.length > 0 ? (
                    <div className="cart__content">
                        <div className="cart__purchases">
                            {cart?.map((product: TCartItem) => (
                                <CartItem item={product} />
                            ))}
                        </div>
                        <div className="cart__price">
                            <h3 className="cart__price-title">Корзина</h3>
                            <div className="cart__cost">
                                <p className="cart__cost-title">
                                    Стоимость товаров
                                </p>
                                <p className="cart__cost-value">1999 ₽ </p>
                            </div>
                            <div className="cart__delivery">
                                <p className="cart__delivery-title">Доставка</p>
                                <p className="cart__delivery-value">
                                    Бесплатно
                                </p>
                            </div>
                            <div className="cart__discount">
                                <p className="cart__discount-title">Скидка</p>
                                <p className="cart__dicount-value">0 ₽ </p>
                            </div>
                            <div className="cart__final-price">
                                <p className="cart__final-price-title">Итого</p>
                                <p className="cart__final-price-value">
                                    1999 ₽{" "}
                                </p>
                            </div>
                            <div className="cart__bonus">
                                <p className="cart__bonus-title">
                                    Вернется бонусами
                                </p>
                                <p className="cart__bonus-value">+ 110 ₽ </p>
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
