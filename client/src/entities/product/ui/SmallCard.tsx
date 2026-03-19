import { useCartStore } from "@/entities/cart";
import { useAddUserFavourites } from "@/entities/user/model/useAddUserFavourites";
import type { Product } from "@/shared/types";
import like from "@shared/assets/images/like.svg";
import { Link } from "react-router-dom";
import "./SmallCard.scss";
import { useGetUserFavourites } from "@/entities/user/model/useGetUserFavourites";

export const SmallCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCartStore();
    const { data } = useGetUserFavourites();
    console.log(data);

    const { mutate: addUserFavourite } = useAddUserFavourites();

    const oldPrice =
        product?.price + Math.round((product?.discount / 100) * product?.price);

    const lengthLimit = (text: string, maxLength = 60) => {
        if (!text || text.length <= maxLength) return text;

        const truncated = text.slice(0, maxLength);
        const lastSpaceIndex = truncated.lastIndexOf(" ");

        return truncated.slice(0, lastSpaceIndex) + "...";
    };

    const item = {
        id: product._id as string,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        discount: product.discount,
        oldPrice: oldPrice,
        amount: 1,
    };

    const isLiked = data?.data?.some((fav: any) => fav.id === item.id);

    const onLikeClick = (item: any) => {
        addUserFavourite(item);
        console.log(item);
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
                    onClick={(e) => {
                        e.preventDefault();
                        onLikeClick(item);
                    }}
                    className="small-card__like"
                >
                    <img
                        src={like}
                        alt="like"
                        style={{
                            filter: isLiked
                                ? "invert(74%) sepia(24%) saturate(631%) hue-rotate(326deg) brightness(105%) contrast(101%)"
                                : "none",
                        }}
                    />
                </div>
            </div>
        </Link>
    );
};
