import type { Source } from '@/types/source.type';
import { isString } from './isString';

export function isSource(value: unknown): value is Source {
  const stringProps = ['id', 'name', 'description', 'url', 'category', 'language', 'country'];
  return value instanceof Object && stringProps.every((prop) => prop in value && isString(prop));
}
