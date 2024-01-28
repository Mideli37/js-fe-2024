import schemes from '../../shared/nonorgams.json';
import { Dialog } from '../dialog/Dialog';
import { Nonogram } from '../nonogram/Nonogram';

export class App {
  constructor() {
    const currentScheme = schemes.nonograms[0];
    const totalCell = currentScheme.width * currentScheme.height;

    const dialog = new Dialog();
    dialog.init();
    const checkWinCondition = (correctCellCounter) => {
      if (correctCellCounter >= totalCell) {
        console.log('ura');
        dialog.dialogContainer.showModal();
      }
    };
    this.nonogram = new Nonogram(currentScheme.scheme, checkWinCondition);
  }

  init() {
    document.body.append(this.nonogram.container);
  }
}
