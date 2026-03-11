import { Router } from "express";
import { productsController } from "../controllers/productsController";

const productRouter = Router();

productRouter.get("/products", productsController.getProducts);

export default productRouter;
