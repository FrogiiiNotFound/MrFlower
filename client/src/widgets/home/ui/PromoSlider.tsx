import { MiniCard } from "@/entities/product";
import { useProducts } from "@/entities/product/model/useProducts";
import arrow from "@shared/assets/images/arrow-slider.svg";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import "./PromoSlider.scss";

export const PromoSlider = () => {
    const SwiperRef = useRef<SwiperRef>(null);

    const { data, isLoading, error }: any = useProducts({
        tags: "акции дня",
    });
    console.log(data);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;
    if (!data) return null;

    return (
        <div className="promo-slider">
            <div className="promo-slider__content">
                <h2 className="promo-slider__title">Товары и акции дня</h2>
                <div className="promo-slider__buttons">
                    <div
                        onClick={() => SwiperRef.current?.swiper.slidePrev()}
                        className="promo-slider__prev"
                    >
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div
                        onClick={() => SwiperRef.current?.swiper.slideNext()}
                        className="promo-slider__next"
                    >
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <Swiper
                className="promo-slider__wrapper"
                ref={SwiperRef}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                speed={400}
                navigation={false}
            >
                {data.data.products.map((product: any, index: any) => {
                    if (index % 2 !== 0) return null;

                    return (
                        <SwiperSlide key={product?.id ?? product?.id ?? index}>
                            <MiniCard product={data.data.products[index]} />
                            {data.data.products[index + 1] && (
                                <MiniCard
                                    product={data.data.products[index + 1]}
                                />
                            )}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
