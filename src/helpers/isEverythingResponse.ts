import type { EverythingResponse } from '@/types/everythingResponse.type';
import { isArticle } from './isArticle';

export function isEverythingResponse(value: unknown): value is EverythingResponse {
  return (
    value instanceof Object &&
    'status' in value &&
    value.status === 'ok' &&
    'totalResults' in value &&
    typeof value.totalResults === 'number' &&
    'articles' in value &&
    Array.isArray(value.articles) &&
    value.articles.every(isArticle)
  );
}
export function assertIsEverythingResponse(value: unknown): asserts value is EverythingResponse {
  if (!isEverythingResponse(value)) {
    throw new Error("value type is not 'EverythingResponse'");
  }
}
