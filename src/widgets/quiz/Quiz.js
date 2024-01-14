import { createEl } from '../../shared/create-el';
import styles from './quiz.module.css';
import { qaPairs } from '../../shared/qa-pairs';

export class Quiz {
  container = createEl('div', styles.quizContaier);
  answer = [];
  constructor(index) {
    this.answerContainer = createEl('div', styles.answerContainer);
    this.questionLabel = createEl('p', styles.questionLabel);
    this.container.append(this.answerContainer, this.questionLabel);
    this.set(index);
  }

  reset() {
    this.answerContainer.replaceChildren();
  }

  set(index) {
    this.answer = [...qaPairs[index].answer];
    this.questionLabel.textContent = `Hint: ${qaPairs[index].question}`;
    this.build();
  }

  build() {
    this.answer = this.answer.map((letter) => {
      const letterEl = createEl('div', styles.letter);
      this.answerContainer.append(letterEl);
      return [letterEl, letter];
    });
  }

  openLetter(index) {
    this.answer[index][0].classList.add(styles.open);
    this.answer[index][0].textContent = this.answer[index][1];
  }
}
