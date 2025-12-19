import like from '@shared//assets/images/like.svg';
import template from '@shared/template/template-img.png';
import './small-card.scss';

export const SmallCard = () => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={template} alt="card-img" />
      </div>
      <div className="card__content">
        <h3 className="card__title">Уилл Грема застрелят</h3>
        <p className="card__text">
          Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
          repudiandae veniam.
        </p>
        <div className="card__bottom">
          <div className="card__pricing">
            <p className="card__new-price">1 999 ₽</p>
            <p className="card__old-price">2598 ₽</p>
          </div>
          <div className="card__btn">
            <p className="card__btn-text">В корзину</p>
          </div>
        </div>
      </div>
      <div className="card__like">
        <img src={like} alt="like" />
      </div>
    </div>
  );
};
