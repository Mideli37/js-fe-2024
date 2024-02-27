import placeholderImg from '@/assets/placeholder.avif';
import { isOdd } from '@/helpers/isOdd';
import { safeQuerySelector } from '@/helpers/safeQuerySelector';
import type { Article } from '@/types/article.type';
import './news.css';

const MAX_NEWS_QUANTITY = 10;

class News {
  public draw(data: Article[]): void {
    const news = data.length >= MAX_NEWS_QUANTITY ? data.filter((_item, idx) => idx < MAX_NEWS_QUANTITY) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = safeQuerySelector('#newsItemTemp');
    if (!(newsItemTemp instanceof HTMLTemplateElement)) {
      throw Error('newsItemTemp is not template');
    }

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true);

      if (isOdd(idx)) {
        safeQuerySelector('.news__item', newsClone).classList.add('alt');
      }
      safeQuerySelector('.news__meta-photo', newsClone).style.backgroundImage = `url(${
        item.urlToImage || placeholderImg
      })`;
      safeQuerySelector('.news__meta-author', newsClone).textContent = item.author || item.source.name;
      safeQuerySelector('.news__meta-date', newsClone).textContent = item.publishedAt
        .slice(0, MAX_NEWS_QUANTITY)
        .split('-')
        .reverse()
        .join('-');

      safeQuerySelector('.news__description-title', newsClone).textContent = item.title;
      safeQuerySelector('.news__description-source', newsClone).textContent = item.source.name;
      safeQuerySelector('.news__description-content', newsClone).textContent = item.description;
      safeQuerySelector('.news__read-more a', newsClone).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    safeQuerySelector('.news').innerHTML = '';
    safeQuerySelector('.news').appendChild(fragment);
  }
}

export default News;
