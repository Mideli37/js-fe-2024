import whiteCellSound from '../../assets/sounds/happy-pop-1-185286.mp3';
import blackCellSound from '../../assets/sounds/happy-pop-3-185288.mp3';
import crossSound from '../../assets/sounds/click-button-140881.mp3';
import winSoundSrc from '../../assets/sounds/win-sound.mp3';

export class Sound {
  static #isMuted = false;

  static #soundObj = {
    blackClick: blackCellSound,
    whiteClick: whiteCellSound,
    crossClick: crossSound,
    win: winSoundSrc,
  };

  static #audioElements = Object.fromEntries(Sound.#createAudioElements());

  static #createAudioElements() {
    return Object.entries(Sound.#soundObj).map(([soundName, soundSrc]) => {
      const audioElem = document.createElement('audio');
      audioElem.preload = 'auto';
      audioElem.src = soundSrc;
      return [soundName, audioElem];
    });
  }

  static toggleMuted() {
    this.#isMuted = !this.#isMuted;
  }

  static getIsMuted() {
    return this.#isMuted;
  }

  static playSound(name) {
    if (!this.#isMuted) {
      const audioEl = this.#getAudioElement(name);
      audioEl.currentTime = 0;
      audioEl.volume = 0.4;
      audioEl.play();
    }
  }

  static #getAudioElement(name) {
    return this.#audioElements[name];
  }
}
