import { Card } from '@shared/index';
import './favourites.scss';

export const Favourites = () => {
  return (
    <div className="favourites">
      <div className="favourites__container _container">
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
  );
};
