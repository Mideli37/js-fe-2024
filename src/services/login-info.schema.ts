import { z } from 'zod';

export const loginInfoSchema = z.object({
  firstName: z.string(),
  surname: z.string(),
});

export type LoginInfo = z.infer<typeof loginInfoSchema>;
