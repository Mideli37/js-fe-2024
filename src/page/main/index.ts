import { createElement } from '@/helpers/create-element';

export class MainPage {
  private container = createElement('div', { className: 'h-full w-full flex justify-between items-center flex-col' });

  public init(): void {
    this.container.append('The main page');
    document.body.replaceChildren(this.container);
  }
}
