import bcrypt from "bcrypt";
import { UserModel } from "../models/UserModel";
import UserResponseDto from "../utils/dtos/UserResponseData";
import ApiError from "../utils/exeptions/ApiError";
import { OrderModel } from "../models/OrderModel";
import { OrderItemModel } from "../models/OrderItemModel";
import { Types } from "mongoose";
import type { ChangeUserData } from "../types/changeUserData";
import { ProductModel } from "../models/ProductModel";

class UserService {
    async getUser(userId: string) {
        const user = await UserModel.findOne({ _id: userId });
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        return user;
    }

    async getUserOrders(userId: string, limit: number, offset: number) {
        const user = await UserModel.findOne({ user_id: userId });
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        const orders = await OrderModel.aggregate([
            {
                $match: { user_id: userId },
            },
            {
                $lookup: {
                    from: OrderItemModel.collection.name,
                    localField: "_id",
                    foreignField: "order_id",
                    as: "items",
                },
            },
            {
                $sort: { createdAt: -1 },
            },
            {
                $skip: offset,
            },
            {
                $limit: limit,
            },
        ]);
        if (!orders) throw ApiError.NotFound("История заказов пуста");

        return orders;
    }

    async getUserOrder(orderId: string, userId: string) {
        const order = (
            await OrderModel.aggregate([
                {
                    $match: {
                        _id: new Types.ObjectId(orderId),
                        user_id: new Types.ObjectId(userId),
                    },
                },
                {
                    $lookup: {
                        from: "order_items",
                        localField: "_id",
                        foreignField: "order_id",
                        as: "items",
                    },
                },
            ])
        )[0];
        if (!order) throw ApiError.NotFound("Заказ не найден");

        return order;
    }
    async changeUserInfo(data: ChangeUserData, userId: string) {
        const user = await UserModel.findById(userId);
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => {
                return value !== "" && value !== undefined && value !== null;
            }),
        );

        const changedUser = UserModel.findOneAndUpdate(
            { _id: userId },
            { $set: filteredData },
            { returnDocument: "after" },
        );

        return changedUser;
    }

    async getUserFavourites(userId: string) {
        const user = await UserModel.findById(userId).populate("favourites");
        if (!user) throw ApiError.NotFound("Пользователь не найден");
        if (!user.favourites || user.favourites.length === 0) return [];

        const favourites = await ProductModel.find({
            _id: { $in: user.favourites },
        });

        return favourites;
    }

    async addFavourite(itemId: string, userId: string) {
        const changedUser = await UserModel.findOneAndUpdate(
            { _id: userId },
            { $addToSet: { favourites: itemId } },
            { returnDocument: "after" },
        );
        if (!changedUser) throw ApiError.NotFound("Пользователь не найден");

        return changedUser.favourites;
    }
    async deleteFavourite(userId: string, itemId: string) {
        const user = await UserModel.findByIdAndUpdate(
            userId,
            { $pull: { favourites: itemId } },
            { returnDocument: "after" },
        );

        if (!user) throw ApiError.NotFound("Пользователь не найден");

        return user.favourites;
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
    async getAddresses(userId: string) {
        const user = await UserModel.findById(userId);
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        return user.addresses;
    }
    async addAddress(address: string, userId: string) {
        const user = await UserModel.findById(userId);
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        user.addresses.push(address);
        await user.save();

        return user.addresses;
    }
    async deleteAddress(userId: string, index: number) {
        const user = await UserModel.findById(userId);
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        if (index < 0 || index >= user.addresses.length) {
            throw ApiError.BadRequest("Неправильный индекс");
        }
        user.addresses.splice(index, 1);
        await user.save();

        return user.addresses;
    }
}
export default new UserService();
