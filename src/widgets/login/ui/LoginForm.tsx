import { FormButton } from "@/shared/ui/form-button";
import { Modal } from "@/shared/ui/modal";
import close from "@shared/assets/images/close.svg";

import "./LoginForm.scss";
import { useLogin } from "../model/useLoginStore";
import { useForm } from "react-hook-form";
import type { LoginFormValue } from "../model/types";

export const LoginForm = () => {
    const { isLoginOpen, toggleLogin } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValue>();

    if (!isLoginOpen) return null;

    const onSubmit = (data: LoginFormValue) => {
        console.log(data);
    };

    return (
        <Modal>
            <div className="login">
                <div className="login__container _container">
                    <div className="login__upper-content">
                        <h2 className="login__title">Войти</h2>
                        <div
                            className="login__close"
                            onClick={() => toggleLogin()}
                        >
                            <img src={close} alt="close-button" />
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="login__form"
                    >
                        <div className="login__inputs">
                            <input
                                type="text"
                                className="login__input"
                                placeholder="Ваша почта или телефон"
                                {...register("login", {
                                    required: "Почта или телефон обязательны",
                                })}
                            />
                            {errors?.login && (
                                <div className="errors-message">
                                    {errors?.login.message}
                                </div>
                            )}
                            <input
                                type="text"
                                className="login__input"
                                placeholder="Пароль"
                                {...register("password", {
                                    required: "Пароль обязателен",
                                })}
                            />
                            {errors?.password && (
                                <div className="errors-message">
                                    {errors?.password.message}
                                </div>
                            )}
                            <div className="login__forgot-password">
                                Забыли пароль?
                            </div>
                            <FormButton text="Войти в кабинет" />
                            <div className="login__sign-in">Войти</div>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};
