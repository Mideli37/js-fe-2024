import { z } from 'zod';

const levelDataSchema = z.object({
  id: z.string(),
  name: z.string(),
  imageSrc: z.string(),
  cutSrc: z.string(),
  author: z.string(),
  year: z.string(),
});

const wordSchema = z.object({
  audioExample: z.string(),
  textExample: z.string(),
  textExampleTranslate: z.string(),
  id: z.number(),
  word: z.string(),
  wordTranslate: z.string(),
});

const roundSchema = z.object({
  levelData: levelDataSchema,
  words: z.array(wordSchema),
});

const wordCollectionSchema = z.object({
  rounds: z.array(roundSchema),
  roundsCount: z.number(),
});

export type WordCollection = z.infer<typeof wordCollectionSchema>;

export async function fetchWordCollectionByLvl(level: 1 | 2 | 3 | 4 | 5 | 6): Promise<WordCollection> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel${level}.json`
    );
    return wordCollectionSchema.parse(await res.json());
  } catch {
    throw new Error('smth went wrong with fetch');
  }
}
