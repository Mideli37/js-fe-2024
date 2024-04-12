import { z } from 'zod';

export const loginInfoSchema = z.object({
  login: z.string(),
  password: z.string(),
});

export type LoginInfo = z.infer<typeof loginInfoSchema>;
