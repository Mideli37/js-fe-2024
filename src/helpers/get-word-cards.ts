import { createElement } from './create-element';

type WordElements = HTMLDivElement[];

export function getWordCards(sentence: string): WordElements {
  const wordArr = sentence.split(' ');
  const totalLength = sentence.length - (wordArr.length - 1);
  const elementArr = wordArr.map((word) => {
    const wrapper = createElement('div', {
      className:
        'card flex justify-center items-center text-center bg-[#ffe3d5] p-1 border-2 border-[#9e7775] rounded-md font-mono cursor-pointer duration-300 hover:bg-[#fff1eb]',
    });
    wrapper.style.width = `${(word.length / totalLength) * 100}%`;
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
