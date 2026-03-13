import { Router } from "express";
import { userController } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/user", userController.getUser);
userRouter.get("/user/orders", userController.getUserOrders);
userRouter.get("/user/orders/:orderId", userController.getUserOrder);
userRouter.patch("/user/name", userController.changeNickname);
userRouter.patch("/user/password", userController.changePassword);

export default userRouter;
