import type { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";

export const authController = {
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, phone, password } = req.body;

      const data = await AuthService.register(name, phone, password);

      res.cookie("refreshToken", data.tokens.accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
      });

      return res.status(201).json({
        user: data.user,
        accessToken: data.tokens.accessToken,
      });
    } catch (e) {
      next(e);
    }
  },
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { phone, password } = req.body;

      const data = await AuthService.login(phone, password);

      res.cookie("refreshToken", data.tokens.refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
      });

      return res.status(200).json({
        user: data.user,
        accessToken: data.tokens.accessToken,
      });
    } catch (e) {
      next(e);
    }
  },
  refresh: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken } = req.cookies;
      const userId = req.user!.user_id;

      const data = await AuthService.refresh(refreshToken);
    } catch (e) {
      next(e);
    }
  },
  activate: async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (e) {
      next(e);
    }
  },
};
