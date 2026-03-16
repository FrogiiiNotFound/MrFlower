import z from 'zod';

export const productSchema = z.object({
  // Mongo returns `_id` as string; we normalize it to `id` (string) in the client API layer.
  id: z.string(),
  _id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number(),
  rating: z.number(),
  reviews: z.number(),
  // Some items come as strings like "7 шт.", so accept string or number.
  flowersCount: z.array(z.object({ title: z.string(), value: z.union([z.string(), z.number()]) })),
  tags: z.array(z.string()),
  image: z.string(),
  inStock: z.boolean(),
  category: z.string()
});

export type Product = z.infer<typeof productSchema>;
