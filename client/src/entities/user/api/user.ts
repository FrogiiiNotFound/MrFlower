import { $mockApi } from "@/shared";
import type { User } from "../shemas/user.schema";

export const userApi = {
    registerUser: async (user: User) => {
        const { data } = await $mockApi.post("users", user);
        return data;
    },
    getAllUsers: async () => {
        const { data } = await $mockApi.get("users");
        return data;
    },
};
