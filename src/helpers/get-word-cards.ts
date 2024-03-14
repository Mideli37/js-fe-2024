import { createElement } from './create-element';

type WordElements = HTMLDivElement[];

export function getWordCards(sentence: string): WordElements {
  const wordArr = sentence.split(' ');
  const elementArr = wordArr.map((word) => {
    const wrapper = createElement('div', {
      className:
        'w-fit bg-[#ffe3d5] p-2 border-2 border-[#9e7775] rounded-md cursor-pointer duration-300 hover:bg-[#fff1eb]',
    });
    wrapper.append(createElement('span', { textContent: word }));
    return wrapper;
  });

  return elementArr;
}

export function shuffleCards(cardsArr: WordElements): void {
  const cards = cardsArr;
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    const iValue = cards[i];
    const jValue = cards[j];

    if (typeof iValue !== 'undefined' && typeof jValue !== 'undefined') {
      [cards[i], cards[j]] = [jValue, iValue];
    }
  }
}
