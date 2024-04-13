import { z } from 'zod';
import { jsonSchema, type Json } from '@/helpers/JSON.schema';

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

export const stringToJsonSchema = z.string().transform((value, ctx): Json => {
  try {
    const obj = jsonSchema.parse(JSON.parse(value));
    return obj;
  } catch {
    ctx.addIssue({
      code: 'custom',
      message: 'Not a JSON',
    });
    return z.NEVER;
  }
});

export const serverResponseSchema = errorSchema.or(userLoginResponseSchema);
export type ServerResponse = z.infer<typeof serverResponseSchema>;

export function parseServerResponse(data: unknown): ServerResponse {
  return serverResponseSchema.parse(stringToJsonSchema.parse(data));
}
