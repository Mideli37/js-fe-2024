import { EntryPage } from '@/page/entry';

export class App {
  public init(): this {
    const entryPage = new EntryPage();
    entryPage.init();
    return this;
  }
}
