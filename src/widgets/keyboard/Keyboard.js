import { createEl } from '../../shared/create-el';
import style from './keyboard.module.css';

export class Keyboard {
  keys = [...'abcdefghijklmnopqrstuvwxyz'];
  container = createEl('div', style.container);
  constructor() {
    this.keys = this.keys.map((key) => {
      const keyEl = createEl('button', style.key, key.toUpperCase());
      this.container.append(keyEl);
      return keyEl;
    });
  }

  disableButton(key) {
    const keyToDisable = this.keys.find((el) => {
      if (el.textContent.toLowerCase() === key.toLowerCase()) {
        return el;
      }
    });

    if (keyToDisable) {
      keyToDisable.disabled = true;
      keyToDisable.classList.add(style.disabled);
    }
  }

  resetButtons() {
    this.keys.forEach((key) => {
      if (key.classList.contains(style.disabled)) {
        key.classList.remove(style.disabled);
        key.disabled = false;
      }
    });
  }
}
