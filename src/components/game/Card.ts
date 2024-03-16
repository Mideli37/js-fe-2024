import { createElement } from '@/helpers/create-element';

const stateObj = {
  wrong: 'bg-[#ff6924]',
  correct: 'bg-[#3eff24]',
  unchecked: 'bg-[#ffe3d5]',
} as const;

type State = keyof typeof stateObj;

export class Card {
  private wrapper: HTMLDivElement;

  private state: State = 'unchecked';

  constructor(
    private word: string,
    width: string
  ) {
    this.wrapper = createElement('div', {
      className:
        'card flex justify-center items-center text-center p-1 border-2 border-[#9e7775] rounded-md font-mono cursor-pointer duration-300 hover:bg-[#fff1eb]',
    });
    this.wrapper.append(createElement('span', { textContent: word }));
    this.wrapper.style.width = width;
    this.setState('unchecked');
  }

  public getWord(): string {
    return this.word;
  }

  public getElement(): HTMLDivElement {
    return this.wrapper;
  }

  public setState(state: State): void {
    this.wrapper.classList.remove(stateObj[this.state]);
    this.state = state;
    this.wrapper.classList.add(stateObj[state]);
  }

  public getState(): State {
    return this.state;
  }

  public removeOnClick(): void {
    this.wrapper.onclick = null;
  }
}
