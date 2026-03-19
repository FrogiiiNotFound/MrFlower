import { productsApi } from "@/entities/product/api/products";
import like from "@shared/assets/images/like.svg";
import share from "@shared/assets/images/share.svg";
import star from "@shared/assets/images/star.svg";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./Product.scss";

export const Product = () => {
    const { id } = useParams();
    if (!id) return <Navigate to={"/404"} replace />;
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const product = (await productsApi.getProductById(id)) as any;
            if (!product) {
                return <Navigate to="/404" replace />;
            }

            setProduct(product.data);
        };
        fetchProduct();
    }, [id]);

    const oldPrice =
        product?.price + Math.round((product?.discount / 100) * product?.price);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="product">
            <div className="product__container _container">
                <div className="product__upper-content">
                    <div className="product__perks">
                        <div className="product__perk">Выгодно</div>
                    </div>
                    <div className="product__title-wrapper">
                        <h2 className="product__title">{product?.name}</h2>
                        <div className="product__icons">
                            <div className="product__icon">
                                <img src={like} alt="like" />
                            </div>
                            <div className="product__icon">
                                <img src={share} alt="share" />
                            </div>
                        </div>
                    </div>
                    <div className="product__reviews">
                        <div className="product__review-img">
                            <img src={star} alt="star" />
                        </div>
                        <div className="product__review-info">
                            <div className="product__review-value">
                                {product?.rating}
                            </div>
                            <div className="product__review-amount">
                                {product?.reviews} отзывов
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__content">
                    <div className="product__img">
                        <img src={product?.image} alt="product-img" />
                    </div>
                    <div className="product__info">
                        <div className="product__price-wrapper">
                            <div className="product__price-pricing">
                                <div className="product__new-price">
                                    {product?.price} ₽
                                </div>
                                <div className="product__old-price">
                                    {oldPrice} ₽
                                </div>
                            </div>
                            <div className="product__discount">
                                -{product?.discount}%
                            </div>
                        </div>
                        <div className="product__in-stock">
                            {product?.inStock
                                ? "Есть в наличии"
                                : "Товар закончился"}
                        </div>
                        <div className="product__desc-wrapper">
                            <h3 className="product__desc-title">Описание</h3>
                            <p className="product__desc">
                                {product?.description}
                            </p>
                        </div>
                        <div className="product__comp-wrapper">
                            <h3 className="product__comp-title">Состав</h3>
                            <div className="product__comp-list">
                                {product?.flowersCount.map((flower: any) => (
                                    <div
                                        key={`${product?._id ?? product?.id}-${flower?.title ?? ""}`}
                                        className="product__comp-item"
                                    >
                                        {flower.title} - {flower.value}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product__btn">Добавить в корзину</div>
                    </div>
                </div>
                <Link to={"/"}>
                    <div className="product__btn-back">Вернутся назад</div>
                </Link>
            </div>
        </div>
    );
};
