import { $api } from "@shared/index";
export const productsApi = {
    getProducts: async (queryParams: any) => {
        console.log(queryParams);
        const { data } = await $api.get("products", {
            params: queryParams,
        });

        console.log(data);

        return data;
    },
    getProductById: async (id: string) => {
        const { data } = await $api.get(`products/${id}`);

        return data;
    },
};
