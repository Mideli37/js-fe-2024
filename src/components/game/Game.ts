import { createElement } from '@/helpers/create-element';
import { createWordCards, shuffleWords } from '@/helpers/get-word-cards';
import cardsInfo from '../../round-data-example.json';
import type { Card } from './Card';

const containersStyle = 'flex flex-row justify-start h-16 p-2 w-full bg-[#fcf3ee] border-2 border-[#7f1d1d] rounded-md';

type Props = {
  setCheckButtonState: (arg0: boolean) => void;
};

export class Game {
  private gameWrapper = createElement('div', { className: 'h-full w-4/5 max-w-[800px] flex flex-col justify-around' });

  private resultContainer = createElement('div', {
    className: containersStyle,
  });

  private sourceContainer = createElement('div', {
    className: containersStyle,
  });

  private sourceCards: Card[] = [];

  private resultCards: Card[] = [];

  private correctCards: string[] = [];

  private setCheckButtonState: (arg0: boolean) => void;

  constructor({ setCheckButtonState }: Props) {
    this.gameWrapper.append(this.resultContainer, this.sourceContainer);
    this.setNewSentence(0, 0);
    this.setCheckButtonState = setCheckButtonState;
  }

  private setNewSentence(round: number, line: number): void {
    const sentence = cardsInfo.rounds[round]?.words[line]?.textExample;
    if (!sentence) {
      throw new Error(`no data for round ${round} line ${line}`);
    }
    this.correctCards = sentence.split(' ');
    this.sourceCards = createWordCards(this.correctCards.slice());
    shuffleWords(this.sourceCards);
    this.sourceCards.forEach((card) => {
      const element = card.getElement();
      element.addEventListener('click', () => {
        if (element.parentElement === this.resultContainer) {
          const index = this.resultCards.indexOf(card);
          this.resultCards.splice(index, 1);
          this.sourceCards.push(card);
          this.sourceContainer.append(element);
        } else {
          const index = this.sourceCards.indexOf(card);
          this.sourceCards.splice(index, 1);
          this.resultCards.push(card);
          this.resultContainer.append(element);
        }
        if (this.sourceCards.length === 0) {
          this.setCheckButtonState(false);
        } else {
          this.setCheckButtonState(true);
          this.resetBg();
        }
      });
    });
    this.sourceContainer.append(...this.sourceCards.map((card) => card.getElement()));
  }

  public checkCards(): void {
    this.resultCards.forEach((card, index) => {
      if (card.getWord() === this.correctCards[index]) {
        card.setState('wrong');
      } else {
        card.setState('correct');
      }
    });
  }

  private resetBg(): void {
    [...this.resultCards, ...this.sourceCards].forEach((card) => {
      card.setState('unchecked');
    });
  }

  public getGameWrapper(): HTMLDivElement {
    return this.gameWrapper;
  }
}
