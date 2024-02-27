export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
export function assertIsString(value: unknown): asserts value is string {
  if (!isString(value)) {
    throw new Error('this value type is not string');
  }
}
