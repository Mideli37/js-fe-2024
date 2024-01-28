import { createEl } from '../../shared/create-el';
import style from './dialog.module.css';

export class Dialog {
  constructor() {
    this.dialogContainer = createEl('dialog', style.container);
    const heading = createEl('h2', style.heading, 'Great! You have solved the nonogram!');
    this.dialogContainer.append(heading);
  }

  init() {
    document.body.append(this.dialogContainer);
  }
}
