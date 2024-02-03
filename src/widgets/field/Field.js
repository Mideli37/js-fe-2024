import { Cell } from '../../components/cell/Cell';
import { createEl } from '../../shared/create-el';
import style from './field.module.css';

export class Field {
  container = createEl('div', style.container);

  #correctCellsCounter = 0;

  #scheme;

  #checkWinCondition;

  constructor(scheme, checkWinCondition, startTimer, savedScheme) {
    this.#scheme = scheme;
    this.#checkWinCondition = checkWinCondition;
    let isGameStarted = false;
    if (savedScheme) {
      this.savedScheme = savedScheme;
      this.generateSavedField(scheme, this.savedScheme);
    } else {
      this.#generateCleanField(this.#scheme);
    }

    this.container.addEventListener('click', () => {
      if (!isGameStarted) {
        startTimer();
        isGameStarted = true;
      }
    });
  }

  #generateCleanField(scheme) {
    scheme.forEach((row) => {
      const rowEl = createEl('div', style.row);
      this.container.append(rowEl);
      row.forEach((isBlack) => {
        if (!isBlack) {
          this.#correctCellsCounter += 1;
        }
        const gridCell = this.#createCell(isBlack);
        rowEl.append(gridCell.cellEl);
      });
    });
  }

  generateSavedField(scheme, savedGameScheme) {
    scheme.forEach((row, indexRow) => {
      const rowEl = createEl('div', style.row);
      this.container.append(rowEl);
      row.forEach((isBlack, indexCell) => {
        console.log(savedGameScheme);
        const savedState = savedGameScheme[indexRow][indexCell];
        if ((isBlack && savedState === 'black') || (!isBlack && savedState !== 'black')) {
          this.#correctCellsCounter += 1;
        }
        const gridCell = this.#createCell(isBlack, savedState);
        rowEl.append(gridCell.cellEl);
      });
    });
  }

  #createCell(isBlack, state) {
    const cell = new Cell((cellState) => {
      if ((isBlack && cellState === 'black') || (!isBlack && cellState !== 'black')) {
        this.#correctCellsCounter += 1;
      } else {
        this.#correctCellsCounter -= 1;
      }
      console.log(this.#correctCellsCounter);
      this.#checkWinCondition(this.#correctCellsCounter);
    }, state);
    return cell;
  }

  clean() {
    this.container.replaceChildren();
    this.#correctCellsCounter = 0;
    this.#generateCleanField(this.#scheme, this.#checkWinCondition);
  }

  blockClick() {
    this.container.classList.add(style.disabled);
  }
}
