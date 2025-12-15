import React from 'react';
import close from '@shared/assets/icons/close.svg';

const Register = () => {
  return (
    <div className="register">
      <div className="register__container _container">
        <div className="register__upper-content">
          <h2 className="register__title">Регистрация</h2>
          <div className="register__close">
            <img src={close} alt="close-button" />
          </div>
        </div>
        <form action="" className="register__form">
          <input type="text" className="register__input" placeholder="Ваше имя" />
          <input type="password" className="register__input" placeholder="Ваш пароль" />
          <label className="register__input-wrapper">
            <input type="text" className="register__checkbox-input" />
            <div className="register__checkbox"></div>
            Соглашение на обработку персональных данных
          </label>
          <label className="register__input-wrapper">
            <input type="text" className="register__checkbox-input" />
            <div className="register__checkbox"></div>
            Согласен получать рассылку об акциях и скидках
          </label>
          <button className="register__button"></button>
          <div className="register__sign-in"></div>
        </form>
      </div>
    </div>
  );
};

export default Register;
