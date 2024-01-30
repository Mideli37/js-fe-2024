import { createEl } from '../../shared/create-el';
import { getClues } from '../../shared/get-clues';
import { Clue } from '../clues/Clues';
import { Field } from '../field/Field';
import style from './nonogram.module.css';

export class Nonogram {
  container = createEl('div', style.container);

  constructor(scheme, checkWinCondition) {
    const clues = getClues(scheme);
    const topClue = new Clue(clues.top, 'top');
    const leftClue = new Clue(clues.left, 'left');
    this.field = new Field(scheme, checkWinCondition);
    console.log(this.field);
    this.container.append(topClue.container, leftClue.container, this.field.container);
  }

  resetField() {
    this.field.reset();
  }
}
