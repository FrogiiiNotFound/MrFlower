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
};
