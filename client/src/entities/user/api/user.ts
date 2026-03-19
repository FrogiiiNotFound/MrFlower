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
    getUser: async () => {
        const user = await $api.get("/user");
        return user;
    },
    getAddresses: async () => {
        const addresses = await $api.get("/user/addresses");
        return addresses;
    },
    changeUserInfo: async (data: any) => {
        const updatedUser = await $api.patch("/user", data);
        return updatedUser;
    },
    addAddress: async (address: string) => {
        const addresses = await $api.post("/user/addresses", {
            address,
        });

        return addresses;
    },
    deleteAddress: async (index : number) => {
        const addresses = await $api.delete(`/user/addresses/${index}`);

        return addresses;
    },
};
