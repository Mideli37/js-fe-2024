import { createEl } from '../../shared/create-el';
import { getClues } from '../../shared/get-clues';
import { Clue } from '../clues/Clues';
import { Field } from '../field/Field';
import style from './nonogram.module.css';

export class Nonogram {
  container = createEl('div', style.container);

  #field;

  constructor(scheme, checkWinCondition, startTimer, savedScheme = null) {
    const clues = getClues(scheme);
    const topClue = new Clue(clues.top, 'top');
    const leftClue = new Clue(clues.left, 'left');
    this.#field = new Field(scheme, checkWinCondition, startTimer, savedScheme);
    console.log(this.#field);
    this.container.append(topClue.container, leftClue.container, this.#field.container);
  }

  resetField() {
    this.#field.clean();
  }

  blockField() {
    this.#field.blockClick();
  }

  getFieldState() {
    return this.#field.getFieldState();
  }
}
