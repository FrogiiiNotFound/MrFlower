import { useCart } from "@/entities/card";
import type { Product } from "@/shared/types";
import like from "@shared/assets/images/like.svg";
import "./SmallCard.scss";
import { useFavourites } from "@/entities/favourites";

export const SmallCard = ({ product }: { product: Product }) => {
    const { addFavourite } = useFavourites();
    const { addToCart } = useCart();

    const oldPrice =
        product?.price + Math.round((product?.discount / 100) * product?.price);

    const lengthLimit = (text: string, maxLength = 60) => {
        if (!text || text.length <= maxLength) return text;

        const truncated = text.slice(0, maxLength);
        const lastSpaceIndex = truncated.lastIndexOf(" ");

        return truncated.slice(0, lastSpaceIndex) + "...";
    };

    const item = {
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        oldPrice: oldPrice,
        amount: 1,
    };

    return (
        <div className="small-card">
            <div className="small-card__img">
                <img src={product?.image} alt="card-img" />
            </div>
            <div className="small-card__content">
                <h3 className="small-card__title">{product?.name}</h3>
                <p className="small-card__text">
                    {lengthLimit(product?.description)}
                </p>
                <div className="small-card__bottom">
                    <div className="small-card__pricing">
                        <p className="small-card__new-price">
                            {product?.price} ₽
                        </p>
                        <p className="small-card__old-price">{oldPrice} ₽</p>
                    </div>
                    <div
                        onClick={() => addToCart(item)}
                        className="small-card__btn"
                    >
                        <p className="small-card__btn-text">В корзину</p>
                    </div>
                </div>
            </div>
            <div
                onClick={() => addFavourite(item)}
                className="small-card__like"
            >
                <img src={like} alt="like" />
            </div>
        </div>
    );
};
