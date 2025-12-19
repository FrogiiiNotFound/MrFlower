import arrow from '@shared/assets/images/arrow-filters.svg';
import filter from '@shared/template/filter.png';

import './search.scss';
import { Checkbox } from '@/shared/ui/checkbox';
import { SmallCard } from '@/entities/product';

export const Search = () => {
  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__title title">Фильтры</h2>
        <div className="search__content">
          <div className="search__filters">
            <div className="search__filter">
              <h3 className="search__filter-title">Категории</h3>
              <div className="search__filter-buttons">
                <div className="search__filter-button active">
                  <div className="search__fliter-button-text">Все</div>
                </div>
                <div className="search__filter-button">
                  <div className="search__fliter-button-text">Цветы</div>
                </div>
                <div className="search__filter-button">
                  <div className="search__fliter-button-text">Подарки</div>
                </div>
                <div className="search__filter-button">
                  <div className="search__fliter-button-text">Сладкое</div>
                </div>
                <div className="search__filter-button">
                  <div className="search__fliter-button-text">Украшения</div>
                </div>
              </div>
            </div>
            <div className="search__filter">
              <h3 className="search__filter-title">Параметры</h3>
              <h4 className="search__filter-subtitle">Цена</h4>
              <div className="search__filter-inputs">
                <input type="text" className="search__filter-input" placeholder="0" />
                <input type="text" className="search__filter-input" placeholder="20000+" />
              </div>
              <div className="search__filter-mini-slider">
                <img src={filter} alt="" />
              </div>
            </div>
            <div className="search__addition-filters">
              <div className="search__addition-filter">
                <div className="search__addition-filter-header">
                  <h3 className="search__addition-filter-title">Цветы в составе</h3>
                  <div className="search__addition-filter-icon">
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="search__addition-filter-body">
                  <div className="search__body-buttons">
                    <Checkbox text="Розы" />
                    <Checkbox text="Пионы" />
                    <Checkbox text="Герберы" />
                    <Checkbox text="Хризантемы" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search__cards">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>
      </div>
    </div>
  );
};
