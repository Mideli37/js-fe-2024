import whiteCellSound from '../../assets/sounds/happy-pop-1-185286.mp3';
import blackCellSound from '../../assets/sounds/happy-pop-3-185288.mp3';
import crossSound from '../../assets/sounds/click-button-140881.mp3';
import winSoundSrc from '../../assets/sounds/win-sound.mp3';

export class Sound {
  static #isMuted = false;

  static toggleMuted() {
    this.#isMuted = !this.#isMuted;
  }

  static getIsMuted() {
    return this.#isMuted
  }

  static playSound(name) {
    if (!this.#isMuted) {
      const soundSrc = this.#getAudioSrc(name);
      const sound = new Audio(soundSrc);
      sound.play();
    }
  }

  static #getAudioSrc(name) {
    const soundObj = {
      blackClick: blackCellSound,
      whiteClick: whiteCellSound,
      crossClick: crossSound,
      win: winSoundSrc,
    };

    return soundObj[name];
  }
}
