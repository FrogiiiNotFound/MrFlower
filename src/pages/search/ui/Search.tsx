import filter from '@shared/template/filter.png';

import { SmallCard } from '@/entities/product';
import { useProducts } from '@/entities/product/model/useProducts';
import type { Product } from '@/shared/types';
import './search.scss';
import { Filters } from './Filters';

export const Search = () => {
  const { data, isLoading, error }: any = useProducts();

  if (isLoading) {
    console.log('Загрузка...');
    return <div>Загрузка...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Ошибка загрузки</div>;
  }
  if (!data) return null;

  const list: Product[] = Array.isArray(data) ? data : data.products;
  const products = list.filter((item: Product) => item.tags.includes(filter));

  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__title title">Фильтры</h2>
        <div className="search__content">
          <Filters />
          <div className="search__cards">
            {products.map((product: Product) => {
              return <SmallCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
