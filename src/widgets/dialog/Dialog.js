import { createEl } from '../../shared/create-el';
import style from './dialog.module.css';

export class Dialog {
  constructor(children) {
    this.container = createEl('dialog', style.container);
    if (children) {
    this.appendElements(children)};
  }

  init() {
    document.body.append(this.container);
  }

  appendElements(elements) {
    this.container.append(...elements);
  }
}
