import { createEl } from '../../shared/create-el';
import style from './cell.module.css';

export class Cell {
  cellEl = createEl('div');

  #state;

  constructor(callback, state = 'white') {
    console.log('new cell');
    this.#state = state;
    this.changeStyle();
    this.cellEl.addEventListener('click', () => {
      this.toggleState();
      callback(this.#state);
    });
    this.cellEl.addEventListener('contextmenu', (event)=>{
      event.preventDefault()
      if (this.#state === 'black') {
        this.setCross()
        callback(this.#state)
      } else {
        this.setCross()
      }
    })
  }

  changeStyle() {
    this.cellEl.className = `${style[this.#state]} ${style.cell}`;
  }

  toggleState() {
    if (this.#state !== 'black') {
      this.#state = 'black';
    } else {
      this.#state = 'white';
    }
    this.changeStyle();
  }

  setCross() {
    this.#state = 'cross'
    this.changeStyle()
  }
}
