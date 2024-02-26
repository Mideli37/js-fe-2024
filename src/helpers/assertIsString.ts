export function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('this value type is not string');
  }
}

