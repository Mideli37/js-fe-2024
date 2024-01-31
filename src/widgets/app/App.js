import { Timer } from '../../components/timer/Timer';
import { createControlButton } from '../../shared/create-control-button';
import { createEl } from '../../shared/create-el';
import { getRandomNumber } from '../../shared/get-random-number';
import { nonograms } from '../../shared/nonorgams';
import { Dialog } from '../dialog/Dialog';
import { Nonogram } from '../nonogram/Nonogram';
import style from './app.module.css';

export class App {
  #menuPanelContainer = createEl('div', style.menuPanelContainer);

  #nonogramWrapper = createEl('div', style.nonogramWrapper);

  #controlButtonsContainer = createEl('div', style.controlsContainer);

  #winDialogHeading = createEl('h2', style.dialogHeading);

  #winDialog = new Dialog([this.#winDialogHeading]);

  #timer = new Timer();

  #currentNonogram;

  #nonogram;

  constructor() {
    // win dialog

    this.#winDialog.init();

    // menu and levelList
    const menuDialog = new Dialog();
    const levelListDialog = new Dialog();

    menuDialog.init();
    const menuButton = createControlButton('MENU', () => menuDialog.container.showModal());
    this.#menuPanelContainer.append(menuButton);

    const newGameButton = createControlButton('New Game', () => {
      levelListDialog.container.showModal();
    });
    menuDialog.appendElements([newGameButton]);

    // level list

    const levelsHeading = createEl('h2', style.levelHeading, 'Choose a level');
    const levelList = createEl('ul', style.levelList);
    nonograms.forEach((nonogram) => {
      const listItem = createEl('li', style.levelItem);
      const buttonLabel = `${nonogram.width} x ${nonogram.height} ${nonogram.name} (${nonogram.difficulty})`;
      const button = createEl('button', style.button, buttonLabel);
      levelList.append(listItem);
      listItem.append(button);
      button.addEventListener('click', () => {
        this.#startNewGame(nonogram.id);
        levelListDialog.container.close();
        menuDialog.container.close();
      });
    });
    const randomGameButton = createControlButton('Random Game', () => {
      const id = getRandomNumber(nonograms.length);
      console.log(id);
      this.#startNewGame(id);
      levelListDialog.container.close();
      menuDialog.container.close();
    });
    levelListDialog.appendElements([levelsHeading, randomGameButton, levelList]);
    levelListDialog.init();
    levelListDialog.container.showModal();

    // timer

    this.#menuPanelContainer.append(this.#timer.timerElement);
  }

  init() {
    document.body.append(
      this.#menuPanelContainer,
      this.#nonogramWrapper,
      this.#controlButtonsContainer
    );
  }

  #win() {
    this.#winDialog.container.showModal();
    this.#timer.stop();
    this.#winDialogHeading.replaceChildren(
      `Great! You have solved the nonogram in ${this.#timer.getTime()} seconds!`
    );
  }

  #startNewGame(nonogramId) {
    this.#currentNonogram = nonograms[nonogramId - 1];
    this.#nonogramWrapper.replaceChildren();
    this.#timer.reset();
    this.#timer.update();
    const totalCell = this.#currentNonogram.width * this.#currentNonogram.height;

    const checkWinCondition = (correctCellCounter) => {
      if (correctCellCounter >= totalCell) {
        this.#win();
      }
    };

    this.#nonogram = new Nonogram(this.#currentNonogram.scheme, checkWinCondition, () =>
      this.#timer.start()
    );
    this.#nonogramWrapper.append(this.#nonogram.container);

    this.#controlButtonsContainer.replaceChildren();

    const resetButton = createControlButton('Reset game', () => this.#nonogram.resetField());
    this.#controlButtonsContainer.append(resetButton);
  }
}
