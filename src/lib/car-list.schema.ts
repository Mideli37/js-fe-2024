import { z } from 'zod';

const carSchema = z.object({
  name: z.string(),
  color: z.string(),
  id: z.number(),
});
export const carListSchema = z.array(carSchema);

export type CarInfo = z.infer<typeof carSchema>;
export type CarList = z.infer<typeof carListSchema>;
