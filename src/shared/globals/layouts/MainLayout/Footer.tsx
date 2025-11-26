import mail from '@features/icons/mail.svg';
import telegram from '@features/icons/telegram.svg';
import whatsapp from '@features/icons/whatsapp.svg';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__columns">
          <div className="footer__main-info">
            <h2 className="footer__logo">MrFlower</h2>
            <div className="footer__socials">
              <div className="footer__social">
                <img src={mail} alt="mail" />
              </div>
              <div className="footer__social">
                <img src={telegram} alt="telegram" />
              </div>
              <div className="footer__social">
                <img src={whatsapp} alt="whatsapp" />
              </div>
            </div>
          </div>
          <div className="footer__info">
            <h3 className="footer__info-title">Каталог</h3>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="">Новинки</a>
              </li>
              <li className="footer__link">
                <a href="">Цветы</a>
              </li>
              <li className="footer__link">
                <a href="">Подарки</a>
              </li>
              <li className="footer__link">
                <a href="">В тренде</a>
              </li>
              <li className="footer__link">
                <a href="">Скидки</a>
              </li>
              <li className="footer__link">
                <a href="">Вкусное</a>
              </li>
            </ul>
          </div>
          <div className="footer__info">
            <h3 className="footer__info-title">Полезные ссылки</h3>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="">Отзывы</a>
              </li>
              <li className="footer__link">
                <a href="">Инструкции по уходу за букетом</a>
              </li>
              <li className="footer__link">
                <a href="">Как оформить заказ</a>
              </li>
              <li className="footer__link">
                <a href="">Помощь</a>
              </li>
              <li className="footer__link">
                <a href="">Сервисы</a>
              </li>
              <li className="footer__link">
                <a href="">Вакансии</a>
              </li>
              <li className="footer__link">
                <a href="">Франшиза</a>
              </li>
            </ul>
          </div>
          <div className="footer__info">
            <h3 className="footer__info-title">Дополнительно</h3>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="">Политика конфиденциальности</a>
              </li>
              <li className="footer__link">
                <a href="">Условия пользования</a>
              </li>
              <li className="footer__link">
                <a href="">Правила</a>
              </li>
              <li className="footer__link">
                <a href="">Скидка с первого заказа</a>
              </li>
              <li className="footer__link">
                <a href="">Правила отмены заказа</a>
              </li>
            </ul>
          </div>
          <div className="footer__info">
            <h3 className="footer__info-title">Контакты</h3>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="">+7 (987) 175 29-73</a>
              </li>
              <li className="footer__link">
                <a href="">Москва, улица Лорем Апсум, 15А</a>
              </li>
              <li className="footer__link">
                <a href="">Телеграм</a>
              </li>
              <li className="footer__link">
                <a href="">Почта</a>
              </li>
              <li className="footer__link">
                <a href="">Создание сайтов - RumpStudio</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__addition">
          <p className="footer__addition-text">
            Дизайн и верстку для проекта в портфолио подготовил: <span>FrogiiiNotFound</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
