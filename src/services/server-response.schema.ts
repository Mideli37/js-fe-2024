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

export const msgSendResponseSchema = z.object({
  type: z.literal('MSG_SEND'),
  payload: z.object({
    message: z.object({
      id: z.string(),
      from: z.string(),
      to: z.string(),
      text: z.string(),
      datetime: z.number(),
      status: z.object({
        isDelivered: z.boolean(),
        isReaded: z.boolean(),
        isEdited: z.boolean(),
      }),
    }),
  }),
});
export const msgSendSchema = msgSendResponseSchema.shape.payload.shape.message;

export const msgFromUserResponseSchema = z.object({
  id: z.string(),
  type: z.literal('MSG_FROM_USER'),
  payload: z.object({
    messages: z.array(msgSendSchema),
  }),
});

export type MsgSend = z.infer<typeof msgSendSchema>;

export type UserLoginResponse = z.infer<typeof userLoginResponseSchema>;

export const serverResponseSchema = errorSchema
  .or(userLoginResponseSchema)
  .or(userLogoutResponseSchema)
  .or(userActiveResponseSchema)
  .or(userInactiveResponseSchema)
  .or(thirdPartyLoginResponseSchema)
  .or(thirdPartyLogoutResponseSchema)
  .or(msgSendResponseSchema)
  .or(msgFromUserResponseSchema);
export type ServerResponse = z.infer<typeof serverResponseSchema>;

export function parseServerResponse(data: unknown): ServerResponse {
  return serverResponseSchema.parse(stringToJsonSchema.parse(data));
}
