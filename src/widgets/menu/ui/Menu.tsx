import template from '@features/template/template-icon.svg';
import './Menu.scss';

export const Menu = () => {
  return (
    <div className="profile__menu">
      <ul className="profile__list">
        <li className="profile__item active">
          <div className="profile__item-img">
            <img src={template} alt="item-img" />
          </div>
          <h3 className="profile__item-text">Профиль</h3>
        </li>
        <li className="profile__item">
          <div className="profile__item-img">
            <img src={template} alt="item-img" />
          </div>
          <h3 className="profile__item-text">Мои заказы</h3>
        </li>
        <li className="profile__item">
          <div className="profile__item-img">
            <img src={template} alt="item-img" />
          </div>
          <h3 className="profile__item-text">Уведомления</h3>
        </li>
        <li className="profile__item">
          <div className="profile__item-img">
            <img src={template} alt="item-img" />
          </div>
          <h3 className="profile__item-text">Бонусы</h3>
        </li>
        <li className="profile__item">
          <div className="profile__item-img">
            <img src={template} alt="item-img" />
          </div>
          <h3 className="profile__item-text">Избранное</h3>
        </li>
      </ul>
      <div className="profile__bonus">
        <div className="profile__bonus-img">
          <img src={template} alt="bonus" />
        </div>
        <div className="profile__bonus-texts">
          <p className="profile__bonus-title">
            <span>0</span> Б
          </p>
          <p className="profile__bonus-text">Бонусов на счете</p>
        </div>
      </div>
    </div>
  );
};
