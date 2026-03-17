import { SmallCard } from "@/entities/product";
import { useProducts } from "@/entities/product/model/useProducts";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "@/shared/components/ui/pagination";
import type { Product } from "@/shared/types";
import { useSearchParams } from "react-router-dom";
import { Filters } from "./Filters";
import "./search.scss";

export const Search = () => {
    const [searchParams] = useSearchParams();

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

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;
    if (!data) return null;

    const currentPage = Number(page) || 1;
    const totalPages = Math.ceil(data.data.totalCount / data.data.limit);

    return (
        <div className="search">
            <div className="search__container">
                <h2 className="search__title title">Фильтры</h2>
                <div className="search__content">
                    <Filters />
                    <div className="search__main-content">
                        <div className="search__cards">
                            {data.data.products.length !== 0 ? (
                                data.data.products.map((product: Product) => {
                                    return (
                                        <SmallCard
                                            key={product.id}
                                            product={product}
                                        />
                                    );
                                })
                            ) : (
                                <div className="search__not-found">
                                    Товаров не найдено
                                </div>
                            )}
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
                                                ? `?${new URLSearchParams({ ...Object.fromEntries(searchParams), page: String(currentPage - 1) })}`
                                                : "#"
                                        }
                                    />
                                </PaginationItem>

                                {/* {getPages().map((page) => (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href={`/search/${page}`}
                                            isActive={page === currentPage}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))} */}

                                <PaginationItem>
                                    <PaginationNext
                                        className={
                                            currentPage >= totalPages
                                                ? "search__pagination-btn--disabled"
                                                : ""
                                        }
                                        href={
                                            currentPage < totalPages
                                                ? `?${new URLSearchParams({ ...Object.fromEntries(searchParams), page: String(currentPage + 1) })}`
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
