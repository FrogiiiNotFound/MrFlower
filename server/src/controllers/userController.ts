import type { NextFunction, Request, Response } from "express";
import UsersService from "../services/UsersService";

export const userController = {
    getUser: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user!.user_id;

            const user = await UsersService.getUser(userId);

            return res.status(200).json(user);
        } catch (e) {
            next(e);
        }
    },
    getUserOrders: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user!.user_id;
            const page = Number(req.params.page) | 1;
            const limit = 10;
            const offset = (page - 1) * limit;

            const orders = await UsersService.getUserOrders(
                userId,
                limit,
                offset,
            );

            return res.status(200).json({ page, data: orders });
        } catch (e) {
            next(e);
        }
    },
    getUserOrder: async (req: Request<{orderId: string}>, res: Response, next: NextFunction) => {
        try {
            const { orderId } = req.params;
            const userId = req.user!.user_id;

            const order = await UsersService.getUserOrder(orderId, userId);

            return res.status(200).json(order);
        } catch (e) {
            next(e);
        }
    },
    changeNickname: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { nickname } = req.body;
            const userId = req.user!.user_id;

            const userData = UsersService.changeNickname(nickname, userId);

            return res.status(200).json(userData);
        } catch (e) {
            next(e);
        }
    },

    changePassword: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { newPassword, oldPassword } = req.body;
            const userId = req.user!.user_id;

            await UsersService.changePassword(userId, newPassword, oldPassword);

            return res.status(200).json({ message: "Пароль успешно изменен" });
        } catch (e) {
            next(e);
        }
    },
};
