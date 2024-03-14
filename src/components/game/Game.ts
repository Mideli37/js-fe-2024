import { createElement } from '@/helpers/create-element';
import cardsInfo from '../../round-data-example.json';
import { getWordCards, shuffleCards } from '@/helpers/get-word-cards';

const containersStyle = 'flex flex-row justify-start h-16 p-2 w-full bg-[#fcf3ee] border-2 border-[#7f1d1d] rounded-md';

export class Game {
  private gameWrapper = createElement('div', { className: 'h-full w-4/5 max-w-[800px] flex flex-col justify-around' });

  private resultContainer = createElement('div', {
    className: containersStyle,
  });

  private sourceContainer = createElement('div', {
    className: containersStyle,
  });

  constructor() {
    this.gameWrapper.append(this.resultContainer, this.sourceContainer);
    this.addSentenceToSource(0, 0);
  }

  private addSentenceToSource(round: number, line: number): void {
    const sentence = cardsInfo.rounds[round]?.words[line]?.textExample;
    if (!sentence) {
      throw new Error(`no data for round ${round} line ${line}`);
    }
    const elements = getWordCards(sentence);
    shuffleCards(elements);
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.parentElement === this.resultContainer) {
          this.sourceContainer.append(element);
        } else {
          this.resultContainer.append(element);
        }
      });
    });
    this.sourceContainer.append(...elements);
  }

  public getGameWrapper(): HTMLDivElement {
    return this.gameWrapper;
  }
}
