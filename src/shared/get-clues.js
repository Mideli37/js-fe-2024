export function getClues(scheme) {
  const topClues = [];
  const leftClues = [];

  for (let row = 0; row < scheme.length; row += 1) {
    let rowCounter = 0;
    const rowClues = [];
    let columnCounter = 0;
    const columnClues = [];
    for (let column = 0; column < scheme[0].length; column += 1) {
      if (scheme[row][column]) {
        rowCounter += 1;
        if (column === scheme[0].length - 1) {
          rowClues.push(rowCounter);
        }
      } else if (rowCounter !== 0) {
        rowClues.push(rowCounter);
        rowCounter = 0;
      }

      if (scheme[column][row]) {
        columnCounter += 1;
        if (column === scheme[0].length - 1) {
          columnClues.push(columnCounter);
        }
      } else if (columnCounter !== 0) {
        columnClues.push(columnCounter);
        columnCounter = 0;
      }
    }
    leftClues.push(rowClues);
    topClues.push(columnClues);
  }

  return { top: topClues, left: leftClues };
}
