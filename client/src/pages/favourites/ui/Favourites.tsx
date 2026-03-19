import { SmallCard } from "@/entities/product";
import type { Product } from "@/shared/types";
import "./Favourites.scss";
import { Menu } from "@widgets/menu";
import { useGetUserFavourites } from "@/entities/user/model/useGetUserFavourites";

export const Favourites = () => {
    const { data } = useGetUserFavourites();

    return (
        <div className="favourites">
            <div className="favourites__container _container">
                <h2 className="favourites__title title">Профиль</h2>
                <div className="favourites__content main-content">
                    <Menu />
                    <div className="favourites__info-wrapper">
                        <h2 className="favourites__title title">Избранное</h2>
                        <div className="favourites__cards">
                            {data?.data.length === 0 ? (
                                <div>Нет избранных товаров</div>
                            ) : (
                                data?.data.map((product: Product) => (
                                    <SmallCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
