import { useQuery } from '@tanstack/react-query';
import { productsApi } from '../api/products';
import type { Product } from '@shared/types/products/product';

type ProductsResponse = {
  products: Product[];
  page?: number;
};

export const useProducts = () =>
  useQuery<ProductsResponse>({
    queryKey: ['products'],
    queryFn: productsApi.getProducts
  });
