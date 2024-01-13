import { createEl } from '../../shared/create-el';
import gallowStyles from './gallows.module.css';

import headImg from './assets/head.png';
import lArmImg from './assets/hand-one.png';
import rArmImg from './assets/hand-two.png';
import bodyImg from './assets/body.png';
import lLegImg from './assets/leg-one.png';
import rLegImg from './assets/leg-two.png';

export class Gallows {
  container = createEl('div', gallowStyles.gallowContainer);
  partsCount = 0;

  constructor() {
    const pillow = createEl('div', gallowStyles.gallowPillow);
    this.bodyParts = [
      [gallowStyles.head, headImg],
      [gallowStyles.body, bodyImg],
      [gallowStyles.leftArm, lArmImg],
      [gallowStyles.rightArm, rArmImg],
      [gallowStyles.leftLeg, lLegImg],
      [gallowStyles.rightLeg, rLegImg],
    ];
    this.container.append(pillow);

    this.bodyParts = this.bodyParts.map((el) => {
      let imgContainer = createEl('div', el[0]);
      let img = createEl('img');
      img.alt = 'body part';
      img.src = el[1];
      imgContainer.classList.add(gallowStyles.hidden);
      pillow.append(imgContainer);
      imgContainer.append(img);
      return imgContainer;
    });
  }

  addPart() {
    this.bodyParts[this.partsCount].classList.remove(gallowStyles.hidden);
    this.partsCount += 1;
  }

  resetParts() {
    this.bodyParts.forEach((part) => {
      if (!part.classList.contains(gallowStyles.hidden)) {
        part.classList.add(gallowStyles.hidden);
      }
    });
    this.partsCount = 0;
  }
}
