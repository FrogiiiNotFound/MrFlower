import { SmallCard } from "@/entities/product";
import { useProducts } from "@/entities/product/model/useProducts";
import { useGetFavourites } from "@/entities/user/model/useGetFavourites";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shared/components/ui/pagination";
import type { Product } from "@/shared/types";
import { useSearchParams } from "react-router-dom";
import { Filters } from "./Filters";
import "./search.scss";
import { useMemo } from "react";

const LIMIT = 30;

export const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category");
    const priceFrom = searchParams.get("priceFrom");
    const priceTo = searchParams.get("priceTo");
    const composition = searchParams.get("composition");
    const tags = searchParams.get("tags");
    const page = searchParams.get("page");

    const { data, isLoading, error }: any = useProducts({
        category,
        priceFrom,
        priceTo,
        composition,
        tags,
        page,
    });
    const { data: favourites } = useGetFavourites();

    const currentPage = Number(page) || 1;
    const totalPages = Math.ceil(data?.data?.totalCount / LIMIT);

    const goToPage = (p: number) => {
        const next = new URLSearchParams(searchParams);
        p <= 1 ? next.delete("page") : next.set("page", String(p));
        setSearchParams(next);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const getPages = () => {
        const pages: number[] = [];
        for (
            let i = Math.max(1, currentPage - 2);
            i <= Math.min(totalPages, currentPage + 2);
            i++
        ) {
            pages.push(i);
        }
        if (!pages.includes(totalPages)) pages.push(totalPages);
        return pages;
    };

    const favouriteIds = useMemo<Set<string>>(() => {
        return new Set(
            favourites?.data?.map((fav: any) => String(fav._id)) || [],
        );
    }, [favourites]);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;
    if (!data) return null;

    return (
        <div className="search">
            <div className="search__container">
                <h2 className="search__title title">Фильтры</h2>
                <div className="search__content">
                    <Filters />
                    <div className="search__main-content">
                        <div className="search__cards">
                            {data.data.products.length !== 0 ? (
                                data.data.products.map((product: Product) => (
                                    <SmallCard
                                        key={product._id}
                                        product={product}
                                        favouriteIds={favouriteIds}
                                    />
                                ))
                            ) : (
                                <div className="search__not-found">
                                    Товаров не найдено
                                </div>
                            )}
                        </div>
                        {totalPages > 1 && (
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            className={
                                                currentPage <= 1
                                                    ? "pointer-events-none opacity-50"
                                                    : "cursor-pointer"
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage > 1)
                                                    goToPage(currentPage - 1);
                                            }}
                                        />
                                    </PaginationItem>
                                    {getPages().map((p) => (
                                        <PaginationItem key={p}>
                                            <PaginationLink
                                                isActive={p === currentPage}
                                                className="cursor-pointer"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    goToPage(p);
                                                }}
                                            >
                                                {p}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                    <PaginationItem>
                                        <PaginationNext
                                            className={
                                                currentPage >= totalPages
                                                    ? "pointer-events-none opacity-50"
                                                    : "cursor-pointer"
                                            }
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (currentPage < totalPages)
                                                    goToPage(currentPage + 1);
                                            }}
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
