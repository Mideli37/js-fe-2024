import type { SourceResponse } from '@/types/sourceResponse.type';
import { isSource } from './isSource';

export function isSourceResponse(value: unknown): value is SourceResponse {
  return (
    value instanceof Object &&
    'status' in value &&
    value.status === 'ok' &&
    'sources' in value &&
    Array.isArray(value.sources) &&
    value.sources.every(isSource)
  );
}
export function assertIsSourceResponse(value: unknown): asserts value is SourceResponse {
  if (!isSourceResponse(value)) {
    throw new Error("value type is not 'SourceResponse'");
  }
}
