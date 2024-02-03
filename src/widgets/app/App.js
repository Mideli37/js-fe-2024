import { Timer } from '../../components/timer/Timer';
import { createControlButton } from '../../shared/create-control-button';
import { createEl } from '../../shared/create-el';
import { getRandomNumber } from '../../shared/get-random-number';
import { nonograms } from '../../shared/nonorgams';
import { Sound } from '../../shared/sound/Sound';
import { Dialog } from '../dialog/Dialog';
import { Nonogram } from '../nonogram/Nonogram';
import style from './app.module.css';

const lsPrefix = 'MideliNonograms';

export class App {
  #menuPanelContainer = createEl('div', style.menuPanelContainer);

  #nonogramWrapper = createEl('div', style.nonogramWrapper);

  #controlButtonsContainer = createEl('div', style.controlsContainer);

  #winDialogHeading = createEl('h2', style.dialogHeading);

  #winDialog = new Dialog([this.#winDialogHeading]);

  #timer = new Timer();

  #currentNonogram;

  #nonogram;

  #gameId;

  #savedGame = null;

  constructor() {
    // win dialog
    this.#winDialog.init();

    // menu and levelList
    this.#createMenuDialog();

    // timer
    this.#menuPanelContainer.append(this.#timer.timerElement);

    // sound
    const soundButton = createEl('button', style.soundButton);
    soundButton.ariaLabel = 'sound switcher';
    if (Sound.getIsMuted()) {
      soundButton.classList.add(style.soundOff);
    }

    soundButton.addEventListener('click', () => {
      Sound.toggleMuted();
      soundButton.classList.toggle(style.soundOff);
    });

    // theme
    const isDarkTheme = false;
    const themeButton = createEl('button', style.themeButton);
    themeButton.ariaLabel = 'theme button';
    if (isDarkTheme) {
      themeButton.classList.add(style.darkTheme);
    }

    themeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      soundButton.classList.toggle(style.darkTheme);
    });
    const buttonContainer = createEl('div', style.buttonContainer);
    buttonContainer.append(soundButton, themeButton);
    this.#menuPanelContainer.append(buttonContainer);

    // first game
    this.#startGame(1);

    if (localStorage.getItem(`${lsPrefix}SavedGame`)) {
      this.#savedGame = JSON.parse(localStorage.getItem(`${lsPrefix}SavedGame`));
    }
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
    Sound.playSound('win');
    this.#timer.stop();
    this.#nonogram.blockField();
    this.#winDialogHeading.replaceChildren(
      `Great! You have solved the nonogram in ${this.#timer.getTime()} seconds!`
    );
  }

  #startGame(nonogramId, savedGameScheme = null, time = 0) {
    this.#gameId = nonogramId;
    console.log(savedGameScheme);
    this.#currentNonogram = nonograms[nonogramId - 1];
    this.#nonogramWrapper.replaceChildren();
    this.#timer.stop();
    this.#timer.setTime(time);
    this.#timer.update();
    const totalCell = this.#currentNonogram.width * this.#currentNonogram.height;

    const checkWinCondition = (correctCellCounter) => {
      if (correctCellCounter >= totalCell) {
        this.#win();
      }
    };

    this.#nonogram = new Nonogram(
      this.#currentNonogram.scheme,
      checkWinCondition,
      () => this.#timer.start(),
      savedGameScheme
    );
    this.#nonogramWrapper.append(this.#nonogram.container);

    this.#controlButtonsContainer.replaceChildren();

    const resetButton = createControlButton('Reset game', () => this.#nonogram.resetField());
    const saveButton = createControlButton('Save game', () => this.#saveCurrentState());
    this.#controlButtonsContainer.append(resetButton, saveButton);
  }

  #createLevelList(levelListDialog, menuDialog) {
    const levelsHeading = createEl('h2', style.levelHeading, 'Choose a level');
    const levelList = createEl('ul', style.levelList);
    nonograms.forEach((nonogram) => {
      const listItem = createEl('li', style.levelItem);
      const buttonLabel = `${nonogram.width} x ${nonogram.height} ${nonogram.name} (${nonogram.difficulty})`;
      const button = createEl('button', style.button, buttonLabel);
      levelList.append(listItem);
      listItem.append(button);
      button.addEventListener('click', () => {
        this.#startGame(nonogram.id);
        levelListDialog.container.close();
        menuDialog.container.close();
      });
    });
    levelListDialog.appendElements([levelsHeading, levelList]);
  }

  #createMenuDialog() {
    const menuDialog = new Dialog();
    const levelListDialog = new Dialog();
    const randomGameButton = createControlButton('Random Game', () => {
      const id = getRandomNumber(nonograms.length);
      this.#startGame(id);
      levelListDialog.container.close();
      menuDialog.container.close();
    });

    menuDialog.init();
    const menuButton = createControlButton('MENU', () => menuDialog.container.showModal());
    this.#menuPanelContainer.append(menuButton);

    const newGameButton = createControlButton('New Game', () => {
      levelListDialog.container.showModal();
    });

    const continueGameButton = createControlButton('Continue game', () => {
      if (this.#savedGame) {
        this.#startGame(...this.#savedGame);
        menuDialog.container.close();
      }
    });
    menuDialog.appendElements([newGameButton, randomGameButton, continueGameButton]);

    this.#createLevelList(levelListDialog, menuDialog);
    levelListDialog.init();
  }

  #saveCurrentState() {
    this.#savedGame = [this.#gameId, this.#nonogram.getFieldState(), this.#timer.getTime()];
  }

  saveDataToLS() {
    localStorage.setItem(`${lsPrefix}SavedGame`, JSON.stringify(this.#savedGame));
  }
}
