import template from '@shared/template/template-icon.svg';
import './Menu.scss';
import { Link, useLocation } from 'react-router-dom';

export const Menu = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="profile__menu">
      <ul className="profile__list">
        <Link to={'/settings'}>
          <li className={`profile__item ${location.pathname === '/settings' ? 'active' : ''}`}>
            <div className="profile__item-img">
              <img src={template} alt="item-img" />
            </div>
            <h3 className="profile__item-text">Профиль</h3>
          </li>
        </Link>
        <Link to={'/orders'}>
          <li className={`profile__item ${location.pathname === '/orders' ? 'active' : ''}`}>
            <div className="profile__item-img">
              <img src={template} alt="item-img" />
            </div>
            <h3 className="profile__item-text">Мои заказы</h3>
          </li>
        </Link>
        <Link to={'/notifications'}>
          <li className={`profile__item ${location.pathname === '/notifications' ? 'active' : ''}`}>
            <div className="profile__item-img">
              <img src={template} alt="item-img" />
            </div>
            <h3 className="profile__item-text">Уведомления</h3>
          </li>
        </Link>
        <Link to={'/favourites'}>
          <li className={`profile__item ${location.pathname === '/favourites' ? 'active' : ''}`}>
            <div className="profile__item-img">
              <img src={template} alt="item-img" />
            </div>
            <h3 className="profile__item-text">Избранное</h3>
          </li>
        </Link>
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
