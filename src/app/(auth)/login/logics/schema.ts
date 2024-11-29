import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, {
    message: "Passowrd too short. Must be atleast six (6) characters.",
  }),
});
export type LoginType = z.infer<typeof loginSchema>;
