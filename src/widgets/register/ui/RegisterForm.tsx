import { Checkbox } from '@shared/ui/checkbox';
import close from '@shared/assets/images/close.svg';
import './registerForm.scss';
import { Modal } from '@shared/ui/modal';
import { FormButton } from '@/shared/ui/form-button';
import { useRegisterStore } from '../model/registerStore';

export const RegisterForm = () => {
  const { isRegisterOpen, toggleRegister } = useRegisterStore();

  if (!isRegisterOpen) return null;

  return (
    <Modal>
      <div className="register">
        <div className="register__container _container">
          <div className="register__upper-content">
            <h2 className="register__title">Регистрация</h2>
            <div className="register__close" onClick={() => toggleRegister()}>
              <img src={close} alt="close-button" />
            </div>
          </div>
          <form action="" className="register__form">
            <div className="register__inputs">
              <input
                type="text"
                className="register__input"
                placeholder="Как к вам обращаться? *"
                required
              />
              <input
                type="text"
                className="register__input"
                placeholder="Номер телефона *"
                required
              />
              <input type="password" className="register__input" placeholder="Пароль *" required />
              <input type="text" className="register__input" placeholder="Электронная почта" />
            </div>
            <div className="register__checkboxes">
              <Checkbox text="Соглашение на обработку персональных данных *" />
              <Checkbox text="Согласен получать рассылку об акциях и скидках *" />
            </div>
            <FormButton text="Зарегистрироваться" />
            <div className="register__sign-in">Войти</div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
