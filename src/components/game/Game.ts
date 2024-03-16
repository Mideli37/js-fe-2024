import { createElement } from '@/helpers/create-element';
import { createWordCards, shuffleArr } from '@/helpers/get-word-cards';
import type { Card } from './Card';
import { fetchWordCollectionByLvl, type WordCollection } from '@/helpers/fetch-word-collection-by-lvl';

const containersStyle = 'flex flex-row justify-start h-16 p-2 w-full bg-[#fcf3ee] border-2 border-[#7f1d1d] rounded-md';

type Props = {
  setCheckButtonState: (arg0: boolean) => void;
  setContinueButtonState: (arg0: boolean) => void;
};

export class Game {
  private gameWrapper = createElement('div', { className: 'h-full w-4/5 max-w-[800px] flex flex-col justify-around' });

  private linesWrapper = createElement('div', { className: 'w-full max-w-[800px] flex flex-col justify-around' });

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

  private setContinueButtonState: (arg0: boolean) => void;

  private currentRound: number = 0;

  private currentLine: number = 0;

  private wordCollection?: WordCollection;

  constructor({ setCheckButtonState, setContinueButtonState }: Props) {
    this.gameWrapper.append(this.linesWrapper, this.sourceContainer);
    this.setCheckButtonState = setCheckButtonState;
    this.setContinueButtonState = setContinueButtonState;
    void this.init();
  }

  private async init(): Promise<void> {
    const collection = await fetchWordCollectionByLvl(1);
    this.wordCollection = collection;
    this.setNewSentence(this.currentRound, this.currentLine, collection);
  }

  private setNewSentence(round: number, line: number, collection: WordCollection): void {
    this.resultCards = [];
    this.resultContainer = createElement('div', {
      className: containersStyle,
    });
    const sentence = collection.rounds[round]?.words[line]?.textExample;
    if (!sentence) {
      throw new Error(`no data for round ${round} line ${line}`);
    }
    this.correctCards = sentence.split(' ');
    this.sourceCards = createWordCards(this.correctCards.slice());
    shuffleArr(this.sourceCards);
    this.sourceCards.forEach((card) => {
      const element = card.getElement();
      element.onclick = (): void => {
        this.onElementClick(card);
      };
    });
    this.sourceContainer.append(...this.sourceCards.map((card) => card.getElement()));
    this.linesWrapper.append(this.resultContainer);
  }

  private onElementClick(card: Card): void {
    const element = card.getElement();
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
      this.setContinueButtonState(true);
      this.resetBg();
    }
  }

  public checkCards(): void {
    this.resultCards.forEach((card, index) => {
      if (card.getWord() === this.correctCards[index]) {
        card.setState('correct');
      } else {
        card.setState('wrong');
      }
    });
    if (this.resultCards.every((card) => card.getState() === 'correct')) {
      this.setContinueButtonState(false);
    } else {
      this.setContinueButtonState(true);
    }
  }

  public resetBg(): void {
    [...this.resultCards, ...this.sourceCards].forEach((card) => {
      card.setState('unchecked');
    });
  }

  public removeOnClick(): void {
    this.resultCards.forEach((card) => {
      card.removeOnClick();
    });
  }

  public getGameWrapper(): HTMLDivElement {
    return this.gameWrapper;
  }

  public setNextLine(): void {
    this.currentLine += 1;
    if (this.wordCollection) {
      if (this.wordCollection.rounds[this.currentRound]?.words.length === this.currentLine) {
        this.linesWrapper.replaceChildren();
        this.currentRound += 1;
        this.currentLine = 0;
      }
      this.setNewSentence(this.currentRound, this.currentLine, this.wordCollection);
    }
  }
}
