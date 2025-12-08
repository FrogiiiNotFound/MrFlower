import template from '@features/template/template-img.png';
import { Menu } from '@widgets/menu';
import './orders.scss';

export const Orders = () => {
  return (
    <div className="orders">
      <div className="orders__container _container">
        <h2 className="orders__title title">Профиль</h2>
        <div className="orders__content main-content">
          <Menu />
          <div className="orders__info-wrapper">
            <h2 className="orders__title title">Мои заказы</h2>
            <div className="orders__content">
              <div className="orders__day">
                <p className="orders__date">22.10.2025</p>
                <div className="orders__orders">
                  <div className="orders__order">
                    <div className="orders__order-items-wrapper">
                      <div className="orders__order-items">
                        <div className="orders__order-item">
                          <div className="orders__order-img">
                            <img src={template} alt="order-img" />
                          </div>
                          <div className="orders__order-content">
                            <h4 className="orders__order-title">Уилл Грема застрелят</h4>
                            <div className="orders__order-price">
                              <p className="orders__order-new-price">1 999 ₽</p>
                              <div className="orders__order-old-price">2598 ₽</div>
                            </div>
                          </div>
                        </div>
                        <div className="orders__order-item">
                          <div className="orders__order-img">
                            <img src={template} alt="order-img" />
                          </div>
                          <div className="orders__order-content">
                            <h4 className="orders__order-title">Уилл Грема застрелят</h4>
                            <div className="orders__order-price">
                              <p className="orders__order-new-price">1 999 ₽</p>
                              <div className="orders__order-old-price">2598 ₽</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="orders__orders-btn">
                        <p className="orders__order-btn-text">Еще 2</p>
                      </div>
                    </div>
                    <div className="orders__order-info">
                      <div className="orders__price">
                        <h4 className="orders__price-title">Заказ на сумму:</h4>
                        <p className="orders__price-value">1999 ₽</p>
                      </div>
                      <div className="orders__status">
                        <h4 className="orders__status-title">Статус заказа:</h4>
                        <div className="orders__status-value">Доставлено</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
