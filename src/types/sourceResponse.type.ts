import type { Source } from './source.type';

export type SourceResponse = {
  status: 'ok';
  sources: Source[];
};
