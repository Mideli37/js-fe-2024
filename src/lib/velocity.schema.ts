import { z } from 'zod';

export const velocitySchema = z.object({
  velocity: z.number(),
  distance: z.number(),
});

export type VelocityInfo = z.infer<typeof velocitySchema>;
