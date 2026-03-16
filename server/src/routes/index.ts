import { Router } from "express";
import authRouter from "./authRoutes";
import userRouter from "./userRoutes";
import productRouter from "./productsRoutes";

const router = Router();
router.use(authRouter);
router.use(productRouter);
router.use(userRouter);

export default router;
