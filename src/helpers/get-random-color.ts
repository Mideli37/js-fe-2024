function getRandomNumber(): number {
  return Math.floor(Math.random() * 256);
}

export function getRandomColor(): string {
  let result = '#';
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNumber();
    result += num.toString(16).padStart(2, '0');
  }
  return result;
}
