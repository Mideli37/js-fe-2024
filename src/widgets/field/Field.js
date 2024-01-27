import { Cell } from '../../components/cell/Cell';
import { createEl } from '../../shared/create-el';
import style from './field.module.css';

export class Field {
  container = createEl('div', style.container);

  correctCellsCounter = 0;

  constructor(scheme, checkWinCondition) {
    scheme.forEach((row) => {
      const rowEl = createEl('div', style.row);
      this.container.append(rowEl);
      row.forEach((isBlack) => {
        if (!isBlack) {
          this.correctCellsCounter += 1;
        }
        const gridCell = new Cell((cellState) => {
          if ((isBlack && cellState === 'black') || (!isBlack && cellState !== 'black')) {
            this.correctCellsCounter += 1;
          } else {
            this.correctCellsCounter -= 1;
          }
          console.log(this.correctCellsCounter);
          checkWinCondition(this.correctCellsCounter);
        });
        rowEl.append(gridCell.cellEl);
      });
    });
  }
}
