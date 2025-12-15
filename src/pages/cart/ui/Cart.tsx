import minus from '@shared/assets/images/minus.svg';
import plus from '@shared/assets/images/plus.svg';
import bin from '@shared/assets/images/bin.svg';
import template from '@shared/template/template-img.png';
import './Cart.scss';

export const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__container _container">
        <h2 className="cart__title title">Корзина</h2>
        <div className="cart__content">
          <div className="cart__purchases">
            <div className="cart__purchase">
              <div className="cart__purchase-img">
                <img src={template} alt="purchase-img" />
              </div>
              <div className="cart__purchase-content">
                <div>
                  <h3 className="cart__purchase-title">Уилл Грема застрелят</h3>
                  <p className="cart__purchase-text">
                    Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident
                    commodi. repudiandae veniam.
                  </p>
                </div>
                <div className="cart__purchase-bottom">
                  <div className="cart__purchase-amount">
                    <div className="cart__amount-decrease">
                      <img src={minus} alt="minus" />
                    </div>
                    <p className="cart__amount-value">1</p>
                    <div className="cart__amount-increase">
                      <img src={plus} alt="plus" />
                    </div>
                  </div>
                  <div className="cart__pricing">
                    <p className="cart__new-price">1 999 ₽</p>
                    <div className="cart__old-price">2598 ₽</div>
                  </div>
                </div>
              </div>
              <div className="cart__remove">
                <img src={bin} alt="remove" />
              </div>
            </div>
            <div className="cart__purchase">
              <div className="cart__purchase-img">
                <img src={template} alt="purchase-img" />
              </div>
              <div className="cart__purchase-content">
                <h3 className="cart__purchase-title">Уилл Грема застрелят</h3>
                <p className="cart__purchase-text">
                  Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
                  repudiandae veniam.
                </p>
                <div className="cart__purchase-bottom">
                  <div className="cart__purchase-amount">
                    <div className="cart__amount-decrease">
                      <img src={minus} alt="minus" />
                    </div>
                    <p className="cart__amount-value">1</p>
                    <div className="cart__amount-increase">
                      <img src={plus} alt="plus" />
                    </div>
                  </div>
                  <div className="cart__pricing">
                    <p className="cart__new-price">1 999 ₽</p>
                    <div className="cart__old-price">2598 ₽</div>
                  </div>
                </div>
              </div>
              <div className="cart__remove">
                <img src={bin} alt="remove" />
              </div>
            </div>
          </div>
          <div className="cart__price">
            <h3 className="cart__price-title">Корзина</h3>
            <div className="cart__cost">
              <p className="cart__cost-title">Стоимость товаров</p>
              <p className="cart__cost-value">1999 ₽ </p>
            </div>
            <div className="cart__delivery">
              <p className="cart__delivery-title">Доставка</p>
              <p className="cart__delivery-value">Бесплатно</p>
            </div>
            <div className="cart__discount">
              <p className="cart__discount-title">Скидка</p>
              <p className="cart__dicount-value">0 ₽ </p>
            </div>
            <div className="cart__final-price">
              <p className="cart__final-price-title">Итого</p>
              <p className="cart__final-price-value">1999 ₽ </p>
            </div>
            <div className="cart__bonus">
              <p className="cart__bonus-title">Вернется бонусами</p>
              <p className="cart__bonus-value">+ 110 ₽ </p>
            </div>
            <div className="cart__btn">
              <div className="cart__btn-text">Оформить заказ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
