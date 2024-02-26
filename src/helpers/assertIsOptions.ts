import type { Options } from "@/types/options.type";
import { assertIsString } from "./assertIsString";

export function assertIsOptions(value: unknown): asserts value is Options {
  if(!(value instanceof Object && 'apiKey' in value && assertIsString(value.apiKey))) {
    throw new Error('value type is not \'Options\'')
  }
}
