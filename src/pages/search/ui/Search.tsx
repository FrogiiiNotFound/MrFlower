import { SmallCard } from "@/entities/product";
import { useProducts } from "@/entities/product/model/useProducts";
import type { Product } from "@/shared/types";
import { useMemo } from "react";
import { useFilters } from "../model/useFiltersStore";
import { Filters } from "./Filters";
import "./search.scss";

export const Search = () => {
    const {
        category,
        tags,
        flowers,
        price,
        setCategory,
        setTags,
        setPrice,
        setFlowers,
        deleteFlowers,
    } = useFilters();
    const { data, isLoading, error }: any = useProducts();

    const list: Product[] = Array.isArray(data) ? data : data?.products;

    const filteredProducts = useMemo(() => {
        console.log(flowers);
        return list?.filter(
            (item: Product) =>
                (category === "all" || item.category === category) &&
                item.price >= price[0] &&
                item.price <= price[1] &&
                (flowers.length === 0 ||
                    item.flowersCount?.some((flower) =>
                        flowers.some((f) =>
                            flower.title.toLowerCase().includes(f)
                        )
                    ))
        );
    }, [list, category, tags, price, flowers]);

    if (isLoading) {
        console.log("Загрузка...");
        return <div>Загрузка...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Ошибка загрузки</div>;
    }

    if (!data) return null;

    return (
        <div className="search">
            <div className="search__container">
                <h2 className="search__title title">Фильтры</h2>
                <div className="search__content">
                    <Filters />
                    <div className="search__cards">
                        {filteredProducts.map((product: Product) => {
                            return (
                                <SmallCard key={product.id} product={product} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
