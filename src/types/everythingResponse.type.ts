import type { Article } from './article.type';

export type EverythingResponse = {
  status: 'ok';
  totalResults: number;
  articles: Article[];
};
