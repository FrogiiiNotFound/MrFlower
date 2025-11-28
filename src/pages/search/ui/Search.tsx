import template from '@features/template/template-img.png';
import filter from '@features/template/filter.png';
import checkmark from '@features/icons/checkmark.svg';
import arrow from '@features/icons/arrow-filters.svg';
import like from '@features/icons/like.svg';
import './search.scss';
import { Card } from '@shared/index';

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
                    <div className="search__body-btn">
                      <div className="search__body-checkmark">
                        <img src={checkmark} alt="checkmark" />
                      </div>
                      <p className="search__body-btn-text">Розы</p>
                    </div>
                    <div className="search__body-btn">
                      <div className="search__body-checkmark">
                        <img src={checkmark} alt="checkmark" />
                      </div>
                      <p className="search__body-btn-text">Пионы</p>
                    </div>
                    <div className="search__body-btn">
                      <div className="search__body-checkmark">
                        <img src={checkmark} alt="checkmark" />
                      </div>
                      <p className="search__body-btn-text">Герберы</p>
                    </div>
                    <div className="search__body-btn">
                      <div className="search__body-checkmark">
                        <img src={checkmark} alt="checkmark" />
                      </div>
                      <p className="search__body-btn-text">Хризантемы</p>
                    </div>
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
