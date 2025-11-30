import searchIcon from '@features/header-icon/search.svg';
import cartIcon from '@features/header-icon/shopping-cart.svg';
import profileIcon from '@features/header-icon/user.svg';

import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <p className="header__nav-text">Новинки</p>
            </li>
            <li className="header__nav-item">
              <p className="header__nav-text">Цветы</p>
            </li>
            <li className="header__nav-item">
              <p className="header__nav-text">Подарки</p>
            </li>
            <li className="header__nav-item">
              <p className="header__nav-text">В тренде</p>
            </li>
          </ul>
        </nav>
        <h2 className="header__logo">MrFlower</h2>
        <div className="header__content">
          <div className="header__search-wrapper">
            <input type="text" className="header__search-input" placeholder="Поиск" />
            <div className="header__search-icon">
              <img src={searchIcon} alt="search" />
            </div>
          </div>
          <div className="header__icons">
            <div className="header__cart">
              <img src={cartIcon} alt="cart" />
            </div>
            <div className="header__profile">
              <img src={profileIcon} alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
