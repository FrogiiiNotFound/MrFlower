import searchIcon from '../assets/search.svg';
import cartIcon from '../assets/shopping-cart.svg';
import profileIcon from '../assets/user.svg';

import './header.scss';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <h2 className="header__logo">MrFlower</h2>
        </Link>
        <div className="header__content">
          <div className="header__search-wrapper">
            <input type="text" className="header__search-input" placeholder="Поиск" />
            <div className="header__search-icon">
              <img src={searchIcon} alt="search" />
            </div>
          </div>
          <div className="header__icons">
            <Link to="/cart">
              <div className="header__cart">
                <img src={cartIcon} alt="cart" />
              </div>
            </Link>
            <Link to="/settings">
              <div className="header__profile">
                <img src={profileIcon} alt="profile" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
