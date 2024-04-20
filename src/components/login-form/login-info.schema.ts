import { z } from 'zod';

export const loginInfoSchema = z.object({
  login: z.string(),
  password: z.string(),
});

export type LoginInfo = z.infer<typeof loginInfoSchema>;

export const userInfoSchema = z.object({
  login: z.string(),
  isLogined: z.boolean(),
});

export type UserInfo = z.infer<typeof userInfoSchema>;
