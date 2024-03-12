import { jsonSchema, type Json } from './JSON.schema';

const localStoragePrefix: string = 'mideli37-RSS-PZ_';

export function getLSData(key: string): Json {
  const storageKey = localStoragePrefix + key;
  try {
    const data = localStorage.getItem(storageKey);
    if (!data) {
      throw new Error(`No value in ls for this key ${storageKey}`);
    }

    return jsonSchema.parse(JSON.parse(data));
  } catch {
    return null;
  }
}

export function saveLSData(key: string, data: unknown): void {
  const validatedData = jsonSchema.parse(data);
  const storageKey = localStoragePrefix + key;
  localStorage.setItem(storageKey, JSON.stringify(validatedData));
}

export function removeLSKey(key: string): void {
  const storageKey = localStoragePrefix + key;
  localStorage.removeItem(storageKey);
}
