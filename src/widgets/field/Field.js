import { Cell } from '../../components/cell/Cell';
import { createEl } from '../../shared/create-el';
import style from './field.module.css';

export class Field {
  container = createEl('div', style.container);

  constructor(scheme) {
    scheme.forEach((row) => {
      const rowEl = createEl('div', style.row);
      this.container.append(rowEl);
      row.forEach((isBlack) => {
        const gridCell = new Cell(isBlack ? 'black' : 'cross');
        rowEl.append(gridCell.cellEl);
      });
    });
  }
}
