import { FormButton } from '@/shared/ui/form-button';
import { Modal } from '@/shared/ui/modal';
import close from '@shared/assets/images/close.svg';

import './login-form.scss';
import { useRegisterStore } from '../model/registerStore';

export const LoginForm = () => {
  const { isLoginOpen, toggleLogin } = useRegisterStore();

  if (!isLoginOpen) return null;

  return (
    <Modal>
      <div className="login">
        <div className="login__container _container">
          <div className="login__upper-content">
            <h2 className="login__title">Войти</h2>
            <div className="login__close" onClick={() => toggleLogin()}>
              <img src={close} alt="close-button" />
            </div>
          </div>
          <form action="" className="login__form">
            <div className="login__inputs">
              <input
                type="text"
                className="login__input"
                placeholder="Ваша почта или телефон"
                required
              />
              <input type="text" className="login__input" placeholder="Пароль" required />
              <div className="login__forgot-password">Забыли пароль?</div>
              <FormButton text="Войти в кабинет" />
              <div className="login__sign-in">Войти</div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
