import { Menu } from '@widgets/menu';
import './settings.scss';

export const Settings = () => {
  return (
    <div className="user">
      <div className="user__container _container">
        <h2 className="user__main-title">Профиль</h2>
        <div className="user__content main-content">
          <Menu />
          <div className="user__info-wrapper">
            <h3 className="user__title">Личные данные пользователя</h3>
            <form className="user__form">
              <div className="user__item">
                <h4 className="user__item-title">Личная информация</h4>
                <div className="user__input-wrapper">
                  <label htmlFor="" className="user__label">
                    Имя*
                  </label>
                  <input type="text" className="user__input" placeholder="Ваше имя" />
                </div>
                <div className="user__input-wrapper">
                  <label htmlFor="" className="user__label">
                    Фамилия*
                  </label>
                  <input type="text" className="user__input" placeholder="Ваша фамилия" />
                </div>
                <div className="user__radiobtns">
                  <div className="user__radio-btn-wrapper">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="user__radio-btn"
                    />
                    <label htmlFor="male" className="user__radio-btn-text">
                      Мужской пол
                    </label>
                  </div>
                  <div className="user__radio-btn-wrapper">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="user__radio-btn"
                    />
                    <label htmlFor="female" className="user__radio-btn-text">
                      Женский пол
                    </label>
                  </div>
                </div>
              </div>
              <div className="user__item">
                <h4 className="user__item-title">Контактная информация</h4>
                <div className="user__input-wrapper">
                  <label htmlFor="" className="user__label">
                    Номер телефона*
                  </label>
                  <input type="text" className="user__input" placeholder="Ваш номер телефона" />
                </div>
                <div className="user__input-wrapper">
                  <label htmlFor="" className="user__label">
                    Email*
                  </label>
                  <input type="text" className="user__input" placeholder="Ваш email" />
                </div>
                <div className="user__input-wrapper">
                  <label htmlFor="" className="user__label">
                    Пароль
                  </label>
                  <input type="text" className="user__input" />
                </div>
              </div>
              <button className="user__button">Сохранить изменения</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
