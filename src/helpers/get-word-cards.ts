import { Card } from '@/components/game/Card';

export function createWordCards(words: string[]): Card[] {
  const totalLength = words.join('').length;
  const elementArr = words.map((word) => {
    const width = `${(word.length / totalLength) * 100}%`;
    return new Card(word, width);
  });
  return elementArr;
}

export function shuffleArr<T>(array: T[]): void {
  const arr = array;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    const iValue = arr[i];
    const jValue = arr[j];

    if (typeof iValue !== 'undefined' && typeof jValue !== 'undefined') {
      [arr[i], arr[j]] = [jValue, iValue];
    }
  }
}
