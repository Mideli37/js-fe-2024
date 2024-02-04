import { createEl } from '../../shared/create-el';
import style from './score.module.css'

export function createRowElements(tag, className, elementsTextContent) {
  console.log(elementsTextContent)
  const elementList = elementsTextContent.map((element) => createEl(tag, className, element));
  return elementList;
}

export function createScoreRow(gameResultList) {
  const rowEl = createEl('tr', style.tableTR);
  rowEl.append(...createRowElements('td', style.tableTD, gameResultList));
  return rowEl;
}

export function createScoreTable(resultsList) {
  const table = createEl('table', style.scoreTable);
  const headerRow = createEl('tr', style.headerRow);
  const thRowElements = ['Time', 'Name', 'Difficulty'];
  headerRow.append(...createRowElements('th', style.tableTH, thRowElements));

  const rowsEl = resultsList.map((result) => createScoreRow(result));
  table.append(headerRow, ...rowsEl);
  console.log(table)
  return table;
}
