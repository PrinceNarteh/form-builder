import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Title too short. Minimum of four (4) characters." }),
  description: z.string().optional(),
});
export type FormType = z.infer<typeof formSchema>;
