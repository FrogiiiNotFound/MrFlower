import { Menu } from '@widgets/menu';
import './notifications.scss';

export const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notifications__container _container">
        <h2 className="notifications__title title">Профиль</h2>
        <div className="notifications__content main-content">
          <Menu />
          <div className="notifications__info-wrapper">
            <h2 className="notifications__title title">Уведомления</h2>
            <div className="notifications__content">
              <form action="#" className="notifications__form">
                <fieldset className="notifications__inputs">
                  <legend className="notifications__notification-title">Способ получения</legend>

                  <label className="notifications__input-wrapper">
                    <input type="checkbox" className="notifications__input" />
                    <span className="notifications__checkmark"></span>
                    SMS сообщения
                  </label>
                  <label className="notifications__input-wrapper">
                    <input type="checkbox" className="notifications__input" />
                    <span className="notifications__checkmark"></span>
                    SMS сообщения
                  </label>
                </fieldset>
                <fieldset className="notifications__inputs">
                  <legend className="notifications__notification-title">
                    Подписаться на уведомления
                  </legend>
                  
                  <label htmlFor="discounts" className="notifications__input-wrapper">
                    <input type="checkbox" className="notifications__input" id="discounts" />
                    <span className="notifications__checkmark"></span>
                    Акции и скидки
                  </label>
                  <label htmlFor="news" className="notifications__input-wrapper">
                    <input type="checkbox" className="notifications__input" id="news" />
                    <span className="notifications__checkmark"></span>
                    Новости
                  </label>
                </fieldset>
                <button className="notifications__btn">Сохранить изменения</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
