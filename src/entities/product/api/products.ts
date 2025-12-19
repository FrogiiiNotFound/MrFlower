import { $api } from '@shared/index';
export const productsApi = {
  getProducts: async () => {
    const { data } = await $api.get('products');
    return data;
  },
};
