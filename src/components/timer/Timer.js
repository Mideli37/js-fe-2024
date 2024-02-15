import { createEl } from '../../shared/create-el';

export class Timer {
  timerElement = createEl('span', null, '00:00');

  #totalTime = 0;

  #timerInterval;

  update() {
    const seconds = Math.floor(Math.floor(this.#totalTime) % 60).toString();
    const minutes = Math.floor(this.#totalTime / 60).toString();
    this.timerElement.replaceChildren(`${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
  }

  start() {
    this.#timerInterval = setInterval(() => {
      this.#totalTime += 1;
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.#timerInterval);
  }

  reset() {
    this.#totalTime = 0;
  }

  getTime() {
    return this.#totalTime;
  }

  setTime(time) {
    this.#totalTime = time;
  }
}
