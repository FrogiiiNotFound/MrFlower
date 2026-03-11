import { UserModel } from "../models/UserModel";
import UserResponseDto from "../utils/dtos/UserResponseData";
import ApiError from "../utils/exeptions/ApiError";

class UserService {
    async getUser(userId: string) {
        const user = await UserModel.findOne({ user_id: userId });
        if (!user) throw ApiError.NotFound("Пользователь не найден");

        return user;
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
}
export default new UserService();
