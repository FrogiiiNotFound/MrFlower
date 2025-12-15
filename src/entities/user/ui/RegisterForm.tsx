import React from 'react'
import closeButton from '../../shared/assets/icons/close-button.svg' 

const RegisterForm = () => {
  return (
    <div className='register'>
      <div className="register__container _container">
        <div className="register__upper-content">
            <h2 className="register__title title">Регистрация</h2>
            <div className="register__close">
                <img src={closeButton} alt="close-button" />
            </div>
        </div>
        <form action="" className="register__form">
            <fieldset className="register__inputs">
                <div className="register__input-wrapper">
                    <input type="text" className="register__input" placeholder='Ваше имя' />
                </div>
                <div className="register__input-wrapper">
                    <input type="text" className="register__input" placeholder='Ваше имя' />
                </div>
            </fieldset>
            <fieldset className="register__checkbox-inputs">
                <label  className="register__checkbox-input-wrapper">
                    <input type="checkbox" className="register__checkbox-input"/>
                    <span className="register__checkbox-text">Я согласен с <a href="#" className="register__checkbox-link">Политикой конфиденциальности</a></span>
                </label>
                <label className="register__checkbox-input-wrapper">
                    <input type="checkbox" className="register__checkbox-input" checked/>
                    <span className="register__checkbox-text">Я согласен получать информационные рассылки на электронную почту</span>
                </label>
            </fieldset>
            <button className="register__button">Зарегистрироваться</button>
            <div className="register__sign-in">Войти</div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
