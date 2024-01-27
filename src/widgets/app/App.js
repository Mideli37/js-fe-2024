import schemes from '../../shared/nonorgams.json';
import { Dialog } from '../dialog/Dialog';
import { Nonogram } from '../nonogram/Nonogram';

export class App {
  constructor() {
    const currentScheme = schemes.nonograms[0];
    const totalCell = currentScheme.width * currentScheme.height;
    const checkWinCondition = (correctCellCounter) => {
      if (correctCellCounter >= totalCell) {
        console.log('ura');
      }
    };
    this.nonogram = new Nonogram(currentScheme.scheme, checkWinCondition);

    const dialog = new Dialog();
    dialog.init();
  }

  init() {
    document.body.append(this.nonogram.container);
  }
}
