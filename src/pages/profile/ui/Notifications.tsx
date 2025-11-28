import './notifications.scss';

export const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notifications__container _container">
        <h2 className="notifications__title title">Уведомления</h2>
        <div className="notifications__content">
          <form action="#" className="notifications__form">
            <div className="notifications__notification">
              <h3 className="notifications__notification-title">Способ получения</h3>
              <div className="notifications__inputs">
                <label htmlFor="sms" className="notifications__input-wrapper">
                  <input type="checkbox" className="notifications__input" id="sms" />
                  <span className="notifications__checkmark"></span>
                  SMS сообщения
                </label>
                <label htmlFor="email" className="notifications__input-wrapper">
                  <input type="checkbox" className="notifications__input" id="email" />
                  <span className="notifications__checkmark"></span>
                  SMS сообщения
                </label>
              </div>
            </div>
            <div className="notifications__notification">
              <h3 className="notifications__notification-title">Подписаться на уведомления</h3>
              <div className="notifications__inputs">
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
              </div>
            </div>
            <button className="notifications__btn">Сохранить изменения</button>
          </form>
        </div>
      </div>
    </div>
  );
};
