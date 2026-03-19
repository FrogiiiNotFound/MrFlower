import { useCartStore } from "@/entities/cart";
import type { Product } from "@/shared/types";
import like from "@shared/assets/images/like.svg";
import "./SmallCard.scss";
import { useFavourites } from "@/entities/favourites";
import { Link } from "react-router-dom";

export const SmallCard = ({ product }: { product: Product }) => {
    const { addFavourite } = useFavourites();
    const { addToCart } = useCartStore();

    const oldPrice =
        product?.price + Math.round((product?.discount / 100) * product?.price);

    const lengthLimit = (text: string, maxLength = 60) => {
        if (!text || text.length <= maxLength) return text;

        const truncated = text.slice(0, maxLength);
        const lastSpaceIndex = truncated.lastIndexOf(" ");

        return truncated.slice(0, lastSpaceIndex) + "...";
    };

    const item = {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        discount: product.discount,
        oldPrice: oldPrice,
        amount: 1,
    };

    return (
        <Link to={`/product/${product._id}`} className="small-card-link">
            <div className="small-card">
                <div className="small-card__img">
                    <img src={product?.image} alt="card-img" />
                </div>
                <div className="small-card__content">
                    <h3 className="small-card__title">
                        {lengthLimit(product?.name, 30)}
                    </h3>
                    <p className="small-card__text">
                        {lengthLimit(product?.description)}
                    </p>
                    <div className="small-card__bottom">
                        <div className="small-card__pricing">
                            <p className="small-card__new-price">
                                {product?.price} ₽
                            </p>
                            <p className="small-card__old-price">
                                {oldPrice} ₽
                            </p>
                        </div>
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                addToCart(item);
                            }}
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
        </Link>
    );
};
