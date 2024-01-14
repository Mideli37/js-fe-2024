import { createEl } from '../../shared/create-el';
import styles from './gallows.module.css';

import headImg from './assets/head.png';
import lArmImg from './assets/hand-one.png';
import rArmImg from './assets/hand-two.png';
import bodyImg from './assets/body.png';
import lLegImg from './assets/leg-one.png';
import rLegImg from './assets/leg-two.png';

export class Gallows {
  container = createEl('div', styles.gallowContainer);
  partsCount = 0;

  constructor() {
    const pillow = createEl('div', styles.gallowPillow);
    this.bodyParts = [
      [styles.head, headImg],
      [styles.body, bodyImg],
      [styles.leftArm, lArmImg],
      [styles.rightArm, rArmImg],
      [styles.leftLeg, lLegImg],
      [styles.rightLeg, rLegImg],
    ];
    this.container.append(pillow);

    this.bodyParts = this.bodyParts.map((el) => {
      const imgContainer = createEl('div', el[0]);
      const img = createEl('img');
      img.alt = 'body part';
      img.src = el[1];
      imgContainer.classList.add(styles.hidden);
      pillow.append(imgContainer);
      imgContainer.append(img);
      return imgContainer;
    });
  }

  addPart() {
    this.bodyParts[this.partsCount].classList.remove(styles.hidden);
    this.partsCount += 1;
  }

  resetParts() {
    this.bodyParts.forEach((part) => {
      if (!part.classList.contains(styles.hidden)) {
        part.classList.add(styles.hidden);
      }
    });
    this.partsCount = 0;
  }
}
