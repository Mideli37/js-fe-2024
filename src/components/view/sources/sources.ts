import type { Source } from '@/types/source.type';
import './sources.css';
import { safeQuerySelector } from '@/helpers/safeQuerySelector';

class Sources {
  public draw(data: Source[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = safeQuerySelector('#sourceItemTemp');
    if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
      throw Error('sourceItemTemp is not template');
    }

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);

      safeQuerySelector('.source__item-name', sourceClone).textContent = item.name;
      safeQuerySelector('.source__item', sourceClone).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    safeQuerySelector('.sources').append(fragment);
  }
}

export default Sources;
