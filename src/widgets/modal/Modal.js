import { createEl } from '../../shared/create-el';
import style from './modal.module.css';

export class Modal {
  container = createEl('div', style.container);
  background = createEl('div', style.background);
  constructor(answer, win) {
    const heading = createEl('h2', style.heading);
    if (win) {
      heading.textContent = 'Congratulations! You guessed the word!';
    } else {
      heading.textContent = 'Game over! Too many incorrect guesses!';
    }

    const word = createEl('p', style.word);
    word.textContent = `Secret word - ${answer.toUpperCase()}`;
    this.button = createEl('button', style.button, 'Play Again');
    this.container.append(heading, word, this.button);
  }

  open() {
    this.background.classList.add(style.open);
    this.container.classList.add(style.open);
  }

  close() {
    this.background.classList.remove(style.open);
    this.container.classList.remove(style.open);
  }
}
