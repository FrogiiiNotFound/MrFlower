import { useRegisterUser } from "@/entities/user/model/useRegisterUser";
import { FormButton } from "@/shared/ui/form-button";
import { useLogin } from "@/widgets/login/model/useLoginStore";
import close from "@shared/assets/images/close.svg";
import { Checkbox } from "@shared/ui/checkbox";
import { Modal } from "@shared/ui/modal";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { RegisterFormValue } from "../model/types";
import { useRegister } from "../model/useRegisterStore";
import "./registerForm.scss";

export const RegisterForm = () => {
    const { isRegisterOpen, toggleRegister } = useRegister();
    const { toggleLogin } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValue>();
    const { mutate, isError } = useRegisterUser();

    if (!isRegisterOpen) return null;

    const onSubmit = (data: RegisterFormValue) => {
        console.log(data);

        mutate({
            name: data.name,
            surname: "",
            password: data.password,
            gender: "",
            contacts: {
                phone: data.phone,
                email: data.email,
            },
            favourites: [],
            cart: [],
            orders: [],
            notifications: {
                phone: false,
                mail: false,
                ad: false,
                news: false,
            },
            bonuses: 0,
        });
        toast("Регистрация прошла успешно!");
    };

    return (
        <Modal>
            <div className="register">
                <div className="register__container _container">
                    <div className="register__upper-content">
                        <h2 className="register__title">Регистрация</h2>
                        <div
                            className="register__close"
                            onClick={() => toggleRegister()}
                        >
                            <img src={close} alt="close-button" />
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="register__form"
                    >
                        <div className="register__inputs">
                            <input
                                type="text"
                                className="register__input"
                                placeholder="Как к вам обращаться? *"
                                {...register("name", {
                                    required: "Имя обязательно",
                                })}
                            />
                            {errors.name && (
                                <div className="error-message">
                                    {errors.name.message}
                                </div>
                            )}
                            <input
                                type="text"
                                className="register__input"
                                placeholder="Номер телефона *"
                                {...register("phone", {
                                    required: "Телефон обязателен",
                                })}
                            />
                            {errors?.phone && (
                                <div className="error-message">
                                    {errors?.phone.message}
                                </div>
                            )}
                            <input
                                type="password"
                                className="register__input"
                                placeholder="Пароль *"
                                {...register("password", {
                                    required: "Пароль обязателен",
                                })}
                            />
                            {errors?.password && (
                                <div className="error-message">
                                    {errors?.password.message}
                                </div>
                            )}
                            <input
                                type="email"
                                className="register__input"
                                placeholder="Электронная почта"
                                {...register("email")}
                            />
                            {errors?.email && (
                                <div className="error-message">
                                    {errors?.email.message}
                                </div>
                            )}
                        </div>
                        <div className="register__checkboxes">
                            <Checkbox
                                onChange={() => {}}
                                text="Соглашение на обработку персональных данных *"
                            />
                            <Checkbox
                                onChange={() => {}}
                                text="Согласен получать рассылку об акциях и скидках *"
                            />
                        </div>
                        <FormButton text="Зарегистрироваться" />
                        <div
                            onClick={() => {
                                toggleRegister();
                                toggleLogin();
                            }}
                            className="register__sign-in"
                        >
                            Войти
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};
