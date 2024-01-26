import { createEl } from '../../shared/create-el';
import style from './clues.module.css';

export class Clue {
  container = createEl('div', style.container);

  constructor(cluesArr, side) {
    this.container.classList.add(style[side]);
    for (let i = 0; i < cluesArr.length; i += 1) {
      const clueWrapper = createEl('div', `${style[side]} ${style.cluesWrapper}`);

      for (let j = 0; j < cluesArr[i].length; j += 1) {
        const clueEl = createEl('div', style.clue, cluesArr[i][j]);
        clueWrapper.append(clueEl);
      }
      this.container.append(clueWrapper);
    }
  }
}
