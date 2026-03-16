import { ProductModel } from "../models/ProductModel";
import type { FilterParams } from "../types/productFilters";
import ApiError from "../utils/exeptions/ApiError";

export class ProductsService {
    static async getProducts(
        limit: number,
        offset: number,
        filters?: FilterParams,
    ) {
        const query: any = {};

        if (filters?.category) {
            query.category = filters.category;
        }
        if (filters?.priceFrom || filters?.priceTo) {
            query.price = {};

            if (filters.priceFrom) {
                query.price.$gte = Number(filters.priceFrom);
            }

            if (filters.priceTo) {
                query.price.$lte = Number(filters.priceTo);
            }
        }
        if (filters?.composition) {
            query.composition = {
                $in: filters.composition.split(","),
            };
        }
        if (filters?.tags) {
            query.tags = {
                $in: filters.tags.split(","),
            };
        }

        const products = await ProductModel.find()
        console.log(products);
            // .sort({ createdAt: -1 })
            // .skip(offset)
            // .limit(limit)
            // .lean();

        return products;
    }
    static async getProductById(productId: string) {
        const product = await ProductModel.findOne({ _id: productId });
        if (!product) throw ApiError.NotFound("Товар не найден или был удален");

        return product;
    }
}

export default ProductsService;
