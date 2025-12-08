import { $api } from '@shared/index';

export const productsApi = {
  getAllProducts: async () => {
    const { data } = await $api.get('products');
    
    return data;
  },
};
