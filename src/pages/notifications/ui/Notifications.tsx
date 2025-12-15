import { Menu } from '@widgets/menu';
import './notifications.scss';
import { Checkbox } from '@shared/ui/checkbox';

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

                  <Checkbox text="SMS сообщения" />
                  <Checkbox text="E-mail" />
                </fieldset>
                <fieldset className="notifications__inputs">
                  <legend className="notifications__notification-title">
                    Подписаться на уведомления
                  </legend>
                  
                  <Checkbox text="Акции и скидки" />
                  <Checkbox text="Новости" />
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
