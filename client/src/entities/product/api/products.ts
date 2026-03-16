import { $api } from '@shared/index';
export const productsApi = {
  getProducts: async () => {
    const { data } = await $api.get('products');
    if (data && typeof data === 'object' && 'data' in data) {
      const raw = (data as any).data;
      const products = Array.isArray(raw)
        ? raw.map((p: any) => ({
            ...p,
            _id: p?._id,
            id: (p?._id ?? p?.id)?.toString(),
          }))
        : raw;

      return { products, page: (data as any).page };
    }

    const raw = data;
    const products = Array.isArray(raw)
      ? raw.map((p: any) => ({
          ...p,
          _id: p?._id,
          id: (p?._id ?? p?.id)?.toString(),
        }))
      : raw;

    return { products };
  },
};
