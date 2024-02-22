import type { Source } from './source.type';

export type Article = {
  source: Pick<Source, 'id' | 'name'>;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
