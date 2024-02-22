import type { EverythingResponse } from '@/types/everythingResponse.type';
import News from './news/news';
import Sources from './sources/sources';
import type { SourceResponse } from '@/types/sourceResponse.type';

export class AppView {
  private news: News;

  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: EverythingResponse | undefined): void {
    const values = data?.articles ?? [];
    this.news.draw(values);
  }

  public drawSources(data: SourceResponse | undefined): void {
    const values = data?.sources ?? [];
    this.sources.draw(values);
  }
}

export default AppView;
