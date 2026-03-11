import { ProductModel } from "../models/ProductModel";

export class ProductsService {
    static getProducts(limit: number, offset: number) {
        const products = ProductModel.find()
            .sort({ createdAt: -1 })
            .skip(offset)
            .limit(limit)
            .lean();

        return products;
    }
}

export default ProductsService;
