import { Checkbox } from '@/shared/ui/checkbox';
import arrow from '@shared/assets/images/arrow-filters__filters.svg';
import filters__filter from '@shared/template/filters__filter.png';

import { useState } from 'react';

export const Filters = () => {
  const [category, setCategory] = useState('all');

  return (
    <div className="filters__filters">
      <div className="filters__filter">
        <h3 className="filters__filter-title">Категории</h3>
        <div className="filters__filter-buttons">
          <div
            className={`filters__filter-button ${category === 'all' ? 'active' : ''}`}
            onClick={() => setCategory('all')}>
            <div className="filters__filter-button-text">Все</div>
          </div>
          <div
            className={`filters__filter-button ${category === 'flowers' ? 'active' : ''}`}
            onClick={() => setCategory('flowers')}>
            <div className="filters__filter-button-text">Цветы</div>
          </div>
          <div
            className={`filters__filter-button ${category === 'presents' ? 'active' : ''}`}
            onClick={() => setCategory('presents')}>
            <div className="filters__filter-button-text">Подарки</div>
          </div>
          <div
            className={`filters__filter-button ${category === 'sweet' ? 'active' : ''}`}
            onClick={() => setCategory('sweet')}>
            <div className="filters__filter-button-text">Сладкое</div>
          </div>
          <div
            className={`filters__filter-button ${category === 'decorations' ? 'active' : ''}`}
            onClick={() => setCategory('decorations')}>
            <div className="filters__filter-button-text">Украшения</div>
          </div>
        </div>
      </div>
      <div className="filters__filter">
        <h3 className="filters__filter-title">Параметры</h3>
        <h4 className="filters__filter-subtitle">Цена</h4>
        <div className="filters__filter-inputs">
          <input type="text" className="filters__filter-input" placeholder="0" />
          <input type="text" className="filters__filter-input" placeholder="20000+" />
        </div>
        <div className="filters__filter-mini-slider">
          <img src={filters__filter} alt="" />
        </div>
      </div>
      <div className="addition-filters__filters">
        <div className="addition-filters__filter">
          <div className="addition-filters__filter-header">
            <h3 className="addition-filters__filter-title">Цветы в составе</h3>
            <div className="addition-filters__filter-icon">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="addition-filters__filter-body">
            <div className="body-buttons">
              <Checkbox text="Розы" />
              <Checkbox text="Пионы" />
              <Checkbox text="Герберы" />
              <Checkbox text="Хризантемы" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
