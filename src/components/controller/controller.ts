import { assertIsString } from '@/helpers/isString';
import type { GetRespCallback } from '@/types/getRespCallback.type';
import AppLoader from './appLoader';
import { setSearchParam } from '@/helpers/searchParam';

class AppController extends AppLoader {
  public getSources(callback: GetRespCallback): void {
    super.getResp({ endpoint: 'sources' }, callback);
  }

  public getNews(e: Event, callback: GetRespCallback): void {
    if (!(e.target instanceof HTMLElement)) {
      throw new Error('target is not htmlElement!');
    }
    let { target } = e;
    if (!(e.currentTarget instanceof HTMLElement)) {
      throw new Error('CurrentTarget is not htmlElement!');
    }
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        assertIsString(sourceId);
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          setSearchParam('sources', sourceId);
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      if (!(target.parentNode instanceof HTMLElement)) {
        throw new Error('No parentNode for target');
      }
      target = target.parentNode;
    }
  }
}
export default AppController;
