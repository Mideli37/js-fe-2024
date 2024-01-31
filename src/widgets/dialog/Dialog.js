import { createEl } from '../../shared/create-el';
import style from './dialog.module.css';

export class Dialog {
  constructor(children) {
    this.container = createEl('dialog', style.container);
    this.contentWrapper = createEl('div', style.contentWrapper);
    this.container.append(this.contentWrapper);
    if (children) {
      this.appendElements(children);
    }
    this.container.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        console.log('close');
        event.currentTarget.close();
      }
    });
  }

  init() {
    document.body.append(this.container);
  }

  appendElements(elements) {
    this.contentWrapper.append(...elements);
  }
}
