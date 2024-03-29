const names = ['Tesla', 'BMW', 'Toyota', 'Audi', 'Jeep', 'Porsche', 'Lexus', 'Suzuki', 'Honda', 'Volkswagen'];
const models = ['Camry', 'Corolla', 'Highlander', 'Rav4', 'Tacoma', 'Tundra', 'Avenger', 'Renegade', 'Civic', 'Accord'];

export function getRandomName(): string {
  const name = names[Math.floor(Math.random() * 9)];
  const model = models[Math.floor(Math.random() * 9)];

  if (name && model) {
    return `${name} ${model}`;
  }

  throw new Error("Couldn't find name");
}
