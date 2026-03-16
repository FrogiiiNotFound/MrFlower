import { SmallCard } from "@/entities/product";
import { useProducts } from "@/entities/product/model/useProducts";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/shared/components/ui/pagination";
import type { Product } from "@/shared/types";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useFilters } from "../model/useFiltersStore";
import { Filters } from "./Filters";
import "./search.scss";

export const Search = () => {
    const params = useParams();
    const { category, tags, flowers, price } = useFilters();
    const { data, isLoading, error }: any = useProducts();

    const list: Product[] = Array.isArray(data) ? data : data?.products;

    const filteredProducts = useMemo(() => {
        console.log(flowers);
        return (list ?? []).filter(
            (item: Product) =>
                (category === "all" || item.category === category) &&
                item.price >= price[0] &&
                item.price <= price[1] &&
                (flowers.length === 0 ||
                    item.flowersCount?.some((flower) =>
                        flowers.some((f) =>
                            flower.title.toLowerCase().includes(f),
                        ),
                    )) &&
                (tags.length === 0 ||
                    item.tags?.some((tag) =>
                        tags.some((t) => tag.toLowerCase().includes(t)),
                    )),
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
    
    const pageSize = 20;
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
    const currentPageRaw = Number(params.page) || 1;
    const currentPage = Math.min(Math.max(currentPageRaw, 1), totalPages);

    const pagedProducts = filteredProducts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
    );

    const getPages = () => {
        const pages: number[] = [];

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - 1 && i <= currentPage + 1) ||
                (currentPage === 1 && i <= 3) ||
                (currentPage === 2 && i <= 3) ||
                (currentPage === totalPages && i >= totalPages - 2) ||
                (currentPage === totalPages - 1 && i >= totalPages - 2)
            ) {
                pages.push(i);
            }
        }

        return pages;
    };

    return (
        <div className="search">
            <div className="search__container">
                <h2 className="search__title title">Фильтры</h2>
                <div className="search__content">
                    <Filters />
                    <div className="search__main-content">
                        <div className="search__cards">
                            {pagedProducts.map((product: Product) => {
                                return (
                                    <SmallCard
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            })}
                        </div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        className={
                                            currentPage <= 1
                                                ? "search__pagination-btn--disabled"
                                                : ""
                                        }
                                        href={
                                            currentPage > 1
                                                ? `/search/${currentPage - 1}`
                                                : "#"
                                        }
                                    />
                                </PaginationItem>

                                {getPages().map((page) => (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href={`/search/${page}`}
                                            isActive={page === currentPage}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                <PaginationItem>
                                    <PaginationNext
                                        className={
                                            currentPage >= totalPages
                                                ? "search__pagination-btn--disabled"
                                                : ""
                                        }
                                        href={
                                            currentPage < totalPages
                                                ? `/search/${currentPage + 1}`
                                                : "#"
                                        }
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
};
