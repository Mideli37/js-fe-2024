import { createEl } from '../../shared/create-el';
import style from './score.module.css';

export function createRowElements(tag, className, elementsTextContent) {
  const elementList = elementsTextContent.map((element) => createEl(tag, className, element));
  return elementList;
}

export function createScoreRow(gameResultList) {
  const rowEl = createEl('tr', style.tableTR);
  const result = gameResultList.slice();
  const time = result[0];
  const seconds = Math.floor(Math.floor(time) % 60).toString();
  const minutes = Math.floor(time / 60).toString();
  result[0] = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  result[0] = rowEl.append(...createRowElements('td', style.tableTD, result));
  return rowEl;
}

export function createScoreTable(resultsList) {
  const table = createEl('table', style.scoreTable);
  const headerRow = createEl('tr', style.headerRow);
  const thRowElements = ['Time', 'Name', 'Difficulty'];
  headerRow.append(...createRowElements('th', style.tableTH, thRowElements));

  const rowsEl = resultsList.map((result) => createScoreRow(result));
  table.append(headerRow, ...rowsEl);
  return table;
}
