import { createEl } from '../../shared/create-el';
import { getClues } from '../../shared/get-clues';
import { Clue } from '../clues/Clues';
import { Field } from '../field/Field';
import style from './nonogram.module.css';

export class Nonogram {
  container = createEl('div', style.container);

  constructor(scheme) {
    const clues = getClues(scheme);
    const topClue = new Clue(clues.top, 'top');
    const leftClue = new Clue(clues.left, 'left');
    const field = new Field(scheme);
    this.container.append(topClue.container, leftClue.container, field.container);
  }
}
