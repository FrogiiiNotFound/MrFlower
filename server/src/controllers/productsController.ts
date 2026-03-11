import type { NextFunction, Request, Response } from "express";
import ProductsService from "../services/ProductsService";

export const productsController = {
    getProducts: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const page = Number(req.query.page) | 1;
            const limit = 40;
            const offset = (page - 1) * limit;
            const products = ProductsService.getProducts(limit, offset);

            return res.status(200).json({ page, data: products });
        } catch (e) {
            next(e);
        }
    },
};
