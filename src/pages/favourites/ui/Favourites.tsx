import { Card } from '@shared/index';
import './favourites.scss';
import { Menu } from '@widgets/menu';

export const Favourites = () => {
  return (
    <div className="favourites">
      <div className="favourites__container _container">
        <h2 className="favourites__title title">Профиль</h2>
        <div className="favourites__content main-content">
          <Menu />
          <div className="favourites__info-wrapper">
            <h2 className="favourites__title title">Избранное</h2>
            <div className="favourites__cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
