import { Cell } from '../../components/cell/Cell';
import { createEl } from '../../shared/create-el';
import style from './field.module.css';

export class Field {
  container = createEl('div', style.container);

  #correctCellsCounter = 0;

  #scheme;

  #checkWinCondition;

  #cells = [];

  constructor(scheme, checkWinCondition, startTimer, savedScheme) {
    this.#scheme = scheme;
    this.#checkWinCondition = checkWinCondition;
    let isGameStarted = false;
    if (savedScheme) {
      this.savedScheme = savedScheme;
      this.#generateSavedField(scheme, this.savedScheme);
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
    this.#cells = [];
    scheme.forEach((row) => {
      const cellRow = [];
      this.#cells.push(cellRow);
      const rowEl = createEl('div', style.row);
      this.container.append(rowEl);
      row.forEach((isBlack) => {
        if (!isBlack) {
          this.#correctCellsCounter += 1;
        }
        const gridCell = this.#createCell(isBlack);
        cellRow.push(gridCell);
        rowEl.append(gridCell.cellEl);
      });
    });
  }

  #generateSavedField(scheme, savedGameScheme) {
    this.#cells = [];
    scheme.forEach((row, indexRow) => {
      const cellRow = [];
      this.#cells.push(cellRow);
      const rowEl = createEl('div', style.row);
      this.container.append(rowEl);
      row.forEach((isBlack, indexCell) => {
        console.log(savedGameScheme);
        const savedState = savedGameScheme[indexRow][indexCell];
        if ((isBlack && savedState === 'black') || (!isBlack && savedState !== 'black')) {
          this.#correctCellsCounter += 1;
        }
        const gridCell = this.#createCell(isBlack, savedState);
        cellRow.push(gridCell);
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

  getFieldState() {
    const states = [];
    this.#cells.forEach((row) => {
      const rowArr = row.map((cell) => cell.getState());
      states.push(rowArr);
    });
    return states;
  }
}
