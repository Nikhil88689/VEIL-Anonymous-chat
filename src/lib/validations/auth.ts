import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address.")
    .max(254, "Email addresses must be 254 characters or fewer."),
});

export type SignInValues = z.infer<typeof signInSchema>;
