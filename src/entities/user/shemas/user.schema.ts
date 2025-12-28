import z from "zod";

export const UserSchema = z.object({
    name: z.string(),
    surname: z.string(),
    password: z.string(),
    gender: z.string(),
    contacts: z.object({
        phone: z.string(),
        email: z.string(),
    }),
    favourites: z.array(z.number()),
    cart: z.array(z.number()),
    orders: z.array(z.number()),
    notifications: z.object({
        phone: z.boolean(),
        mail: z.boolean(),
        ad: z.boolean(),
        news: z.boolean(),
    }),
    bonuses: z.number(),
});

export type User = z.infer<typeof UserSchema>;
