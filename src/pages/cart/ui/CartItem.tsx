import minus from "@shared/assets/images/minus.svg";
import plus from "@shared/assets/images/plus.svg";
import bin from "@shared/assets/images/bin.svg";
import template from "@shared/template/template-img.png";

import "./CartItem.scss";
import type { CartItem as TCardItem } from "@/entities/card/model/types";
import { useCartStore } from "@/entities/card";

export const CartItem = ({ item }: { item: TCardItem }) => {
    const { removeFromCart } = useCartStore();
    return (
        <div className="purchase">
            <div className="purchase__img">
                <img src={template} alt="purchase__img" />
            </div>
            <div className="purchase__content">
                <div>
                    <h3 className="purchase__title">{item.name}</h3>
                    <p className="purchase__text">{item.description}</p>
                </div>
                <div className="purchase__bottom">
                    <div className="purchase__amount">
                        <div className="purchase__amount-decrease">
                            <img src={minus} alt="minus" />
                        </div>
                        <p className="purchase__amount-value">{item.amount}</p>
                        <div className="purchase__amount-increase">
                            <img src={plus} alt="plus" />
                        </div>
                    </div>
                    <div className="purchase__pricing">
                        <p className="purchase__new-price">{item.price} ₽</p>
                        <div className="purchase__old-price">
                            {item.oldPrice} ₽
                        </div>
                    </div>
                </div>
            </div>
            <div className="remove">
                <img src={bin} alt="remove" />
            </div>
        </div>
    );
};
