import { z } from 'zod';
import { jsonSchema, type Json } from '@/helpers/JSON.schema';

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
