import { z } from 'zod';
import { stringToJsonSchema } from './string-to-json.schema';

const userInfo = z.object({
  login: z.string(),
  isLogined: z.boolean(),
});

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
    user: userInfo,
  }),
});

export const userLogoutResponseSchema = z.object({
  id: z.string(),
  type: z.literal('USER_LOGOUT'),
  payload: z.object({
    user: userInfo,
  }),
});

export const userActiveResponseSchema = z.object({
  id: z.string(),
  type: z.literal('USER_ACTIVE'),
  payload: z.object({
    users: z.array(userInfo),
  }),
});

export const userInactiveResponseSchema = z.object({
  id: z.string(),
  type: z.literal('USER_INACTIVE'),
  payload: z.object({
    users: z.array(userInfo),
  }),
});

export const thirdPartyLoginResponseSchema = z.object({
  id: z.null(),
  type: z.literal('USER_EXTERNAL_LOGIN'),
  payload: z.object({
    user: userInfo,
  }),
});
export const thirdPartyLogoutResponseSchema = z.object({
  id: z.null(),
  type: z.literal('USER_EXTERNAL_LOGOUT'),
  payload: z.object({
    user: userInfo,
  }),
});
export type UserLoginResponse = z.infer<typeof userLoginResponseSchema>;

export const serverResponseSchema = errorSchema
  .or(userLoginResponseSchema)
  .or(userLogoutResponseSchema)
  .or(userActiveResponseSchema)
  .or(userInactiveResponseSchema)
  .or(thirdPartyLoginResponseSchema)
  .or(thirdPartyLogoutResponseSchema);
export type ServerResponse = z.infer<typeof serverResponseSchema>;

export function parseServerResponse(data: unknown): ServerResponse {
  return serverResponseSchema.parse(stringToJsonSchema.parse(data));
}
