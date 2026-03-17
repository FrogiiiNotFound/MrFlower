import { $api } from "@shared/index";
import type { User } from "../shemas/user.schema";

export const userApi = {
    registerUser: async (user: User) => {
        const { data } = await $api.post("register", {
            name: user.name,
            phone: user.contacts.phone,
            password: user.password,
            email: user.contacts.email,
        });
        return data;
    },
    loginUser: async (credentials: { email: string; password: string }) => {
        const { data } = await $api.post("login", credentials);
        return data;
    },
    logout: async () => {
        const { data } = await $api.post("logout");
        return data;
    },
};
