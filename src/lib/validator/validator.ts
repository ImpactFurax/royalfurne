import { z } from "zod"
 
export const formNewsletter = z.object({
  email: z.string().min(2).max(50),
})