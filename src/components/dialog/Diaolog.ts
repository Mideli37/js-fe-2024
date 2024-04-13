import { createElement } from '@/helpers/create-element';

export class Dialog {
  private container = createElement('dialog', { className: 'container' });

  private contentWrapper = createElement('div', { className: 'contentWrapper' });

  constructor(children?: HTMLElement[]) {
    this.container.append(this.contentWrapper);
    if (children) {
      this.appendElements(children);
    }
    this.container.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.container.close();
      }
    });
  }

  public init(): void {
    document.body.append(this.container);
  }

  public open(): void {
    this.container.showModal();
  }

  public close(): void {
    this.container.close();
  }

  public appendElements(elements: HTMLElement[]): void {
    this.contentWrapper.append(...elements);
  }

  public clean(): void {
    this.contentWrapper.replaceChildren();
  }
}
