import { z } from 'zod';
import { stringToJsonSchema } from './string-to-json.schema';

export const errorSchema = z.object({
  id: z.string(),
  type: z.literal('ERROR'),
  payload: z.object({
    error: z.string(),
  }),
});

export const userLoginResponseSchema = z.object({
  id: z.string(),
  type: z.literal('USER_LOGIN'),
  payload: z.object({
    user: z.object({
      login: z.string(),
      isLogined: z.boolean(),
    }),
  }),
});

export type UserLoginResponse = z.infer<typeof userLoginResponseSchema>;

export const serverResponseSchema = errorSchema.or(userLoginResponseSchema);
export type ServerResponse = z.infer<typeof serverResponseSchema>;

export function parseServerResponse(data: unknown): ServerResponse {
  return serverResponseSchema.parse(stringToJsonSchema.parse(data));
}
