import arrow from '@features/icons/arrow-filters.svg';
import filter from '@features/template/filter.png';
import { Card } from '@shared/index';
import './search.scss';

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
                    <label htmlFor="roses" className="search__input-wrapper">
                      <input type="checkbox" className="search__input" id="roses" />
                      <span className="search__checkmark"></span>
                      Розы
                    </label>
                    <label htmlFor="pions" className="search__input-wrapper">
                      <input type="checkbox" className="search__input" id="pions" />
                      <span className="search__checkmark"></span>
                      Пионы
                    </label>
                    <label htmlFor="gerberas" className="search__input-wrapper">
                      <input type="checkbox" className="search__input" id="gerberas" />
                      <span className="search__checkmark"></span>
                      Герберы
                    </label>
                    <label htmlFor="chrysanthemums" className="search__input-wrapper">
                      <input type="checkbox" className="search__input" id="chrysanthemums" />
                      <span className="search__checkmark"></span>
                      Хризантемы
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search__cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
