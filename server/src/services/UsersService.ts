import bcrypt from "bcrypt";
import { UserModel } from "../models/UserModel";
import UserResponseDto from "../utils/dtos/UserResponseData";
import ApiError from "../utils/exeptions/ApiError";
import { OrderModel } from "../models/OrderModel";

class UserService {
    async getUser(userId: string) {
        const user = await UserModel.findOne({ user_id: userId });
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        return user;
    }

    async getUserOrders(userId: string, limit: number, offset: number) {
        const user = await UserModel.findOne({ user_id: userId });
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        const orders = await OrderModel.find({ user_id: userId })
            .sort({ createdAt: -1 })
            .skip(offset)
            .limit(limit);
        if (!orders) throw ApiError.NotFound("История заказов пуста");

        return orders;
    }
    
    async getUserOrder(orderId: string, userId: string) {
        const order = OrderModel.findOne({ _id: orderId, user_id: userId });
        if (!order) throw ApiError.NotFound("Заказ не найден");

        return order;
    }

    async changeNickname(nickname: string, userId: string) {
        const changedUser = UserModel.findOneAndUpdate(
            { user_id: userId },
            { nickname },
        );
        if (!changedUser) throw ApiError.NotFound("Пользователь не найден");

        const userData = new UserResponseDto(changedUser);

        return userData;
    }

    async changePassword(
        userId: string,
        newPassword: string,
        oldPassword: string,
    ) {
        const user = await UserModel.findById(userId);
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        const isPasswordValid = bcrypt.compare(oldPassword, user.password);
        if (!isPasswordValid)
            throw ApiError.BadRequest("Текущий пароль неверный");

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        await user.save();
    }
}
export default new UserService();
