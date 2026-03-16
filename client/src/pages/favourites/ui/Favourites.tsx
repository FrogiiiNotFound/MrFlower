import { SmallCard } from '@/entities/product';
import type { Product } from '@/shared/types';
import './Favourites.scss';
import { Menu } from '@widgets/menu';

export const Favourites = () => {
  // TODO: wire favourites store. For now render an empty state to keep build valid.
  const favourites: Product[] = [];

  return (
    <div className="favourites">
      <div className="favourites__container _container">
        <h2 className="favourites__title title">Профиль</h2>
        <div className="favourites__content main-content">
          <Menu />
          <div className="favourites__info-wrapper">
            <h2 className="favourites__title title">Избранное</h2>
            <div className="favourites__cards">
              {favourites.length === 0 ? (
                <div>Нет избранных товаров</div>
              ) : (
                favourites.map((product) => <SmallCard key={product.id} product={product} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
