import { Checkbox } from "@/shared/ui/checkbox";
import arrow from "@shared/assets/images/arrow-filters.svg";
import "./Filters.scss";

import { Slider } from "@/shared/ui/slider";
import { useState } from "react";
import { useFilters } from "../model/useFiltersStore";
import { tags } from "../constants/tags";
import { flowersName } from "../constants/flowersName";

export const Filters = () => {
    const {
        category,
        flowers,
        price,
        setCategory,
        setTags,
        deleteTags,
        setPrice,
        setFlowers,
        deleteFlowers,
    } = useFilters();
    const [isFlowersOpen, setIsFlowersOpen] = useState(false);
    const [isSpecialOpen, setIsSpecialOpen] = useState(false);

    return (
        <div className="filters__filters">
            <div className="filters__filter">
                <h3 className="filters__filter-title">Категории</h3>
                <div className="filters__filter-buttons">
                    <div
                        className={`filters__filter-button ${
                            category === "all" ? "active" : ""
                        }`}
                        onClick={() => setCategory("all")}
                    >
                        <div className="filters__filter-button-text">Все</div>
                    </div>
                    <div
                        className={`filters__filter-button ${
                            category === "flowers" ? "active" : ""
                        }`}
                        onClick={() => setCategory("flowers")}
                    >
                        <div className="filters__filter-button-text">Цветы</div>
                    </div>
                    <div
                        className={`filters__filter-button ${
                            category === "presents" ? "active" : ""
                        }`}
                        onClick={() => setCategory("presents")}
                    >
                        <div className="filters__filter-button-text">
                            Подарки
                        </div>
                    </div>
                    <div
                        className={`filters__filter-button ${
                            category === "sweet" ? "active" : ""
                        }`}
                        onClick={() => setCategory("sweet")}
                    >
                        <div className="filters__filter-button-text">
                            Сладкое
                        </div>
                    </div>
                    <div
                        className={`filters__filter-button ${
                            category === "decorations" ? "active" : ""
                        }`}
                        onClick={() => setCategory("decorations")}
                    >
                        <div className="filters__filter-button-text">
                            Украшения
                        </div>
                    </div>
                </div>
            </div>
            <div className="filters__filter">
                <h3 className="filters__filter-title">Параметры</h3>
                <h4 className="filters__filter-subtitle">Цена</h4>
                <div className="filters__filter-inputs">
                    <input
                        value={price[0]}
                        type="text"
                        className="filters__filter-input"
                        placeholder="0"
                        onChange={(e) =>
                            setPrice([Number(e.target.value), price[1]])
                        }
                    />
                    <input
                        value={price[1]}
                        type="text"
                        className="filters__filter-input"
                        placeholder="20000+"
                        onChange={(e) =>
                            setPrice([price[0], Number(e.target.value)])
                        }
                    />
                </div>
                <Slider
                    value={price}
                    onValueChange={(value) =>
                        setPrice(value as [number, number])
                    }
                    defaultValue={[200, 20000]}
                    min={200}
                    max={20000}
                    step={2}
                />
            </div>
            <div className="filters__addition-filters">
                <div className="filters__addition-filter">
                    <div
                        className="filters__addition-filter-header"
                        onClick={() => setIsFlowersOpen(!isFlowersOpen)}
                    >
                        <h3 className="filters__addition-filter-title">
                            Цветы в составе
                        </h3>
                        <div
                            className={`filters__addition-filter-icon ${
                                isFlowersOpen ? "active" : ""
                            }`}
                        >
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                    <div
                        className={`filters__addition-filter-body ${
                            isFlowersOpen ? "active" : ""
                        }`}
                    >
                        <div className="body-buttons">
                            {flowersName.map((flower) => (
                                <Checkbox
                                    onChange={() => {
                                        if (flowers.includes(flower.value)) {
                                            deleteFlowers(flower.value);
                                        } else {
                                            setFlowers(flower.value);
                                        }
                                    }}
                                    text={flower.label}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="filters__addition-filter">
                    <div
                        className="filters__addition-filter-header"
                        onClick={() => setIsSpecialOpen(!isSpecialOpen)}
                    >
                        <h3 className="filters__addition-filter-title">Теги</h3>
                        <div
                            className={`filters__addition-filter-icon ${
                                isSpecialOpen ? "active" : ""
                            }`}
                        >
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                    <div
                        className={`filters__addition-filter-body ${
                            isSpecialOpen ? "active" : ""
                        }`}
                    >
                        <div className="body-buttons">
                            {tags.map((tag) => (
                                <div>
                                    <Checkbox
                                        onChange={() => {
                                            if (flowers.includes(tag.value)) {
                                                deleteTags(tag.value);
                                            } else {
                                                setTags(tag.value);
                                            }
                                        }}
                                        text={tag.label}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
