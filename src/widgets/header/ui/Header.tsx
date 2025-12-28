import { useFilters } from "@/pages/search/model/useFiltersStore";
import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/shopping-cart.svg";
import profileIcon from "../assets/user.svg";

import "./header.scss";
import { Link } from "react-router-dom";
import { useUser } from "@/entities/user";
import { useLogin } from "@/widgets/login/model/useLoginStore";
import { useRegister } from "@/widgets/register/model/useRegisterStore";

export const Header = () => {
    const { toggleLogin } = useLogin();
    const { toggleRegister } = useRegister();
    const { isAuth } = useUser();
    const { setCategory, setTags } = useFilters();

    return (
        <header className="header">
            <div className="header__container _container">
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <Link onClick={() => setTags("новинки")} to={"/search"}>
                            <li className="header__nav-item">
                                <p className="header__nav-text">Новинки</p>
                            </li>
                        </Link>
                        <Link
                            onClick={() => setCategory("flowers")}
                            to={"/search"}
                        >
                            <li className="header__nav-item">
                                <p className="header__nav-text">Цветы</p>
                            </li>
                        </Link>
                        <Link
                            onClick={() => setCategory("presents")}
                            to={"/search"}
                        >
                            <li className="header__nav-item">
                                <p className="header__nav-text">Подарки</p>
                            </li>
                        </Link>
                        <Link onClick={() => setCategory("all")} to={"/search"}>
                            <li className="header__nav-item">
                                <p className="header__nav-text">В тренде</p>
                            </li>
                        </Link>
                    </ul>
                </nav>
                <Link to="/">
                    <h2 className="header__logo">MrFlower</h2>
                </Link>
                <div className="header__content">
                    <div className="header__search-wrapper">
                        <input
                            type="text"
                            className="header__search-input"
                            placeholder="Поиск"
                        />
                        <div className="header__search-icon">
                            <img src={searchIcon} alt="search" />
                        </div>
                    </div>
                    {isAuth ? (
                        <div className="header__icons">
                            <Link to="/cart">
                                <div className="header__cart">
                                    <img src={cartIcon} alt="cart" />
                                </div>
                            </Link>
                            <Link to="/settings">
                                <div className="header__profile">
                                    <img src={profileIcon} alt="profile" />
                                </div>
                            </Link>
                        </div>
                    ) : (
                        <div className="header__auth">
                            <div
                                onClick={() => toggleLogin()}
                                className="header__auth-text"
                            >
                                Войти
                            </div>
                            <div className="header__auth-decor">/</div>
                            <div
                                onClick={() => toggleRegister()}
                                className="header__auth-text"
                            >
                                Регистрация
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
