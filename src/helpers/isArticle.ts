import type { Article } from '@/types/article.type';
import { isString } from './isString';

export function isArticle(value: unknown): value is Article {
  const stringProps = ['author', 'title', 'description', 'url', 'urlToImage', 'publishedAt', 'content'];
  return (
    value instanceof Object &&
    'source' in value &&
    value.source instanceof Object &&
    'id' in value.source &&
    isString(value.source.id) &&
    'name' in value.source &&
    isString(value.source.name) &&
    stringProps.every((prop) => prop in value && isString(prop))
  );
}

export function assertIsArticle(value: unknown): asserts value is Article {
  if (!isArticle(value)) {
    throw new Error('Value is not Article');
  }
}
