import search from "@shared/assets/images/search.svg";
import "./Home.scss";
import "./Products.scss";

import { LoginForm } from "@/widgets/login/ui/LoginForm";
import { MainSlider, PromoSlider, Slider } from "@widgets/home";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useFilters } from "@/pages/search/model/useFiltersStore";
import { Link } from "react-router-dom";
import { RegisterForm } from "@/widgets/register";

export const Home = () => {
    const { setTags } = useFilters();
    return (
        <div>
            <section className="home">
                <div className="home__container _container">
                    <ul className="home__search-list">
                        <Link
                            onClick={() => setTags("для девушки")}
                            to={"/search"}
                        >
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">Для девушки</p>
                            </li>
                        </Link>
                        <Link
                            onClick={() => setTags("день рождения")}
                            to={"/search"}
                        >
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">
                                    День рождения
                                </p>
                            </li>
                        </Link>
                        <Link
                            onClick={() => setTags("день учителя")}
                            to={"/search"}
                        >
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">
                                    День учителя
                                </p>
                            </li>
                        </Link>
                        <Link onClick={() => setTags("8 марта")} to={"/search"}>
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">8 марта</p>
                            </li>
                        </Link>
                        <Link
                            onClick={() => setTags("новый год")}
                            to={"/search"}
                        >
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">Новый год</p>
                            </li>
                        </Link>
                        <Link
                            onClick={() => setTags("14 февраля")}
                            to={"/search"}
                        >
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">14 февраля</p>
                            </li>
                        </Link>
                        <Link onClick={() => setTags("новинки")} to={"/search"}>
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">Новинки</p>
                            </li>
                        </Link>
                        <Link onClick={() => setTags("акции")} to={"/search"}>
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">Акции</p>
                            </li>
                        </Link>
                        <Link onClick={() => setTags("коллеге")} to={"/search"}>
                            <li className="home__search-item">
                                <div className="home__search-img">
                                    <img src={search} alt="search" />
                                </div>
                                <p className="home__search-text">Коллеге</p>
                            </li>
                        </Link>
                    </ul>
                    <div className="home__content">
                        <MainSlider />
                        <PromoSlider />
                    </div>
                </div>
            </section>
            <section className="products">
                <div className="products__container _container">
                    <div className="products__title">
                        Доставка цветов по всей России💐
                    </div>
                    <div className="products__slider-container">
                        <h3 className="products__slider-title">В тренде🔥</h3>
                        <Slider filter="в тренде" />
                    </div>
                    <div className="products__slider-container">
                        <h3 className="products__slider-title">Выгодно💯</h3>
                        <Slider filter="выгодно" />
                    </div>
                    <div className="products__slider-container">
                        <h3 className="products__slider-title">Новинки🏆</h3>
                        <Slider filter="новинки" />
                    </div>
                </div>
            </section>
            <LoginForm />
            <RegisterForm />
        </div>
    );
};
