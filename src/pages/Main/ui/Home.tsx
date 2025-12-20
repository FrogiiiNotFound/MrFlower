import search from '@shared/assets/images/search.svg';
import './Home.scss';
import './Products.scss';

import { LoginForm } from '@/widgets/login/ui/LoginForm';
import { MainSlider, PromoSlider, Slider } from '@widgets/home';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';

const response = axios.get('');
console.log(response);

export const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home__container _container">
          <ul className="home__search-list">
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">Для девушки</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">День рождения</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">День учителя</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">8 марта</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">Новый год</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">14 февраля</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">14 февраля</p>
            </li>
            <li className="home__search-item">
              <div className="home__search-img">
                <img src={search} alt="search" />
              </div>
              <p className="home__search-text">14 февраля</p>
            </li>
          </ul>
          <div className="home__content">
            <MainSlider />
            <PromoSlider />
          </div>
        </div>
      </section>
      <section className="products">
        <div className="products__container _container">
          <div className="products__title">Доставка цветов по всей России💐</div>
          <div className="products__slider-container">
            <h3 className="products__slider-title">В тренде🔥</h3>
            <Slider filter="в тренде" />
          </div>
          <div className="products__slider-container">
            <h3 className="products__slider-title">Выгодно💯</h3>
            <Slider filter="выгодно" />
          </div>
          <div className="products__slider-container">
            <h3 className="products__slider-title">Новинки🏆</h3>
            <Slider filter="новинки" />
          </div>
        </div>
      </section>
      <LoginForm />
    </div>
  );
};
