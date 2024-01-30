import { createEl } from '../../shared/create-el';
import { nonograms } from '../../shared/nonorgams';
import { Dialog } from '../dialog/Dialog';
import { Nonogram } from '../nonogram/Nonogram';
import style from './app.module.css';

export class App {
  constructor() {
    this.nonogramWrapper = createEl('div', style.nonogramWrapper);
    console.log(nonograms);

    const winDialogHeading = createEl(
      'h2',
      style.dialogHeading,
      'Great! You have solved the nonogram!'
    );
    this.winDialog = new Dialog([winDialogHeading]);
    this.winDialog.init();

    // level list
    const levelListDialog = new Dialog();

    const levelsHeading = createEl('h2', style.levelHeading, 'Choose a level');
    const levelList = createEl('ul', style.levelList);
    nonograms.forEach((nonogram) => {
      const listItem = createEl('li', style.levelItem);
      const buttonLabel = `${nonogram.width} x ${nonogram.height} ${nonogram.name} (${nonogram.difficulty})`;
      const button = createEl('button', style.button, buttonLabel);
      levelList.append(listItem);
      listItem.append(button);
      button.addEventListener('click', () => {
        this.startNewGame(nonogram.id);
        levelListDialog.container.close();
      });
    });
    levelListDialog.appendElements([levelsHeading, levelList]);
    levelListDialog.init();
    levelListDialog.container.showModal();
  }

  init() {
    document.body.append(this.nonogramWrapper);
  }

  win() {
    this.winDialog.container.showModal();
  }

  startNewGame(nonogramId) {
    this.currentNonogram = nonograms[nonogramId - 1];
    this.nonogramWrapper.replaceChildren();
    const totalCell = this.currentNonogram.width * this.currentNonogram.height;

    const checkWinCondition = (correctCellCounter) => {
      if (correctCellCounter >= totalCell) {
        this.win();
      }
    };

    this.nonogram = new Nonogram(this.currentNonogram.scheme, checkWinCondition);
    this.nonogramWrapper.append(this.nonogram.container);
  }
}
