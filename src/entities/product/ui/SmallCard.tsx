import like from '@shared//assets/images/like.svg';
import template from '@shared/template/template-img.png';
import './SmallCard.scss';

export const SmallCard = () => {
  return (
    <div className="small-card">
      <div className="small-card__img">
        <img src={template} alt="card-img" />
      </div>
      <div className="small-card__content">
        <h3 className="small-card__title">Уилл Грема застрелят</h3>
        <p className="small-card__text">
          Lorem ipsum dolor sit amet. consectetur adipisicing elit Sequi provident commodi.
          repudiandae veniam.
        </p>
        <div className="small-card__bottom">
          <div className="small-card__pricing">
            <p className="small-card__new-price">1 999 ₽</p>
            <p className="small-card__old-price">2598 ₽</p>
          </div>
          <div className="small-card__btn">
            <p className="small-card__btn-text">В корзину</p>
          </div>
        </div>
      </div>
      <div className="small-card__like">
        <img src={like} alt="like" />
      </div>
    </div>
  );
};
