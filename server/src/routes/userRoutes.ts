import { Router } from "express";
import { userController } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/user", userController.getUser);
userRouter.patch("/user/name", userController.changeNickname);

export default userRouter;
