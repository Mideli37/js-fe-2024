import { createEl } from '../../shared/create-el';
import { Sound } from '../../shared/sound/Sound';
import style from './cell.module.css';

export class Cell {
  cellEl = createEl('div');

  #state;

  constructor(callback, state = 'white') {
    this.#state = state;
    this.#changeStyle();
    this.cellEl.addEventListener('click', () => {
      this.#toggleState();
      callback(this.#state);
    });
    this.cellEl.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (this.#state === 'black') {
        this.#setCross();
        callback(this.#state);
      } else if (this.#state === 'white') {
        this.#setCross();
      } else {
        this.#state = 'white';
        this.#changeStyle();
        Sound.playSound('whiteClick');
      }
    });
  }

  #changeStyle() {
    this.cellEl.className = `${style[this.#state]} ${style.cell}`;
  }

  #toggleState() {
    if (this.#state !== 'black') {
      this.#state = 'black';
      Sound.playSound('blackClick');
    } else {
      this.#state = 'white';
      Sound.playSound('whiteClick');
    }
    this.#changeStyle();
  }

  #setCross() {
    this.#state = 'cross';
    this.#changeStyle();
    Sound.playSound('crossClick');
  }

  getState() {
    return this.#state;
  }

  setState(state) {
    if (state === 'white' || state === 'black' || state === 'cross') {
      this.#state = state;
      this.#changeStyle();
    }
  }
}
