import { Router } from "express";
import { authController } from "../controllers/authController";

const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.get("/login", authController.login);
authRouter.delete("/logout", authController.logout);
authRouter.get("/refresh", authController.refresh);
authRouter.get("/activate/:activateLink", authController.activate);

export default authRouter;
