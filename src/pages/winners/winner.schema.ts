import { z } from 'zod';

export const winnerSchema = z.object({
  id: z.number(),
  wins: z.number(),
  time: z.number(),
});
export const winnerListSchema = z.array(winnerSchema);

export type Winner = z.infer<typeof winnerSchema>;
