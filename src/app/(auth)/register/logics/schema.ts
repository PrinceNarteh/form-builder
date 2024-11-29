import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, {message: 'First name is required.'}),
  lastName: z.string().min(1, {message: 'Last name is required.'}),
  email: z.string().email({message: 'Please enter a valid email'}),
  password: z.string().min(6, {message: 'Passowrd too short. Must be atleast six (6) characters.'}),
  confirmPassword: z.string().min(6, {message: 'Passowrd too short. Must be atleast six (6) characters.'}),
}).refine(val => val.password === val.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passowrds do not match'
})
export type RegisterType = z.infer<typeof registerSchema>
