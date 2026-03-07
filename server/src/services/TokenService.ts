import { TokenModel } from "../models/TokenModel";
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "./../config/constants";
import jwt from "jsonwebtoken";

export class TokenService {
  static generateTokens(payload: any) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: "30m" });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "30m" });

    return { accessToken, refreshToken };
  }

  static async saveToken(userId: string, refreshToken: string) {
    const tokenData = await TokenModel.findOne({ user_id: userId });
    if (tokenData) {
      tokenData.refresh_token = refreshToken;
      return tokenData.save();
    }

    const token = await TokenModel.create({
      user_id: userId,
      refresh_token: refreshToken,
    });

    return token;
  }
}

export default TokenService;
