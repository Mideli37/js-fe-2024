import type { Options } from '@/types/options.type';

export function assertIsOptions(value: unknown): asserts value is Options {
  if (!(value instanceof Object && 'apiKey' in value && typeof value.apiKey === 'string')) {
    throw new Error("value type is not 'Options'");
  }
}
