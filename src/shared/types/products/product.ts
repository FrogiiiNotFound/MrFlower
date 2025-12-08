import z from 'zod';

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number(),
  rating: z.number(),
  reviewsCount: z.number(),
  flowersCount: z.array(z.object({ title: z.string(), value: z.number() })),
  tags: z.array(z.string()),
  image: z.string(),
  inStock: z.boolean(),
});

export type Product = z.infer<typeof productSchema>;
