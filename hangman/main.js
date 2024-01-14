/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: validateKey

;// CONCATENATED MODULE: ./src/shared/create-el.js
function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) {
    el.className = className;
  }
  if (text) {
    el.append(text);
  }
  return el;
}
;// CONCATENATED MODULE: ./src/shared/qa-pairs.js
const qaPairs = [
  { id: 1, question: 'A popular snack consisting of a cooked sausage served in a sliced bun', answer: 'hotdog' },
  { id: 2, question: 'The amount of money you pay to enter a place or event', answer: 'admission' },
  { id: 3, question: 'A spooky attraction designed to scare visitors with various special effects', answer: 'hauntedhouse' },
  { id: 4, question: 'A small structure or stand where goods or services are sold', answer: 'kiosk' },
  { id: 5, question: 'A small item that is kept as a reminder of a place', answer: 'souvenir' },
  { id: 6, question: 'A small, round object used as payment for rides or games', answer: 'token' },
  { id: 7, question: 'A high-speed, looping ride that provides excitement and adrenaline rushes', answer: 'rollercoaster' },
  { id: 8, question: 'A rotating platform with seats for people to ride on', answer: 'carousel' },
  { id: 9, question: 'A famous and popular amusement park located in California', answer: 'disneyland' },
  { id: 10, question: 'A small piece of paper that allows entry to a park or attraction', answer: 'ticket' },
  { id: 11, question: 'A person who claims to predict the future and answer questions about your life', answer: 'fortuneteller' },
  { id: 12, question: 'Items which can be won by playing games or participating in activities', answer: 'prizes' },
  { id: 13, question: 'A large amusement park that follows a specific concept', answer: 'themepark' },
  { id: 14, question: 'A special pass that allows you to skip long lines and get on rides faster', answer: 'fastpass' },
];

;// CONCATENATED MODULE: ./src/widgets/gallows/gallows.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const gallows_module = ({"gallowContainer":"cs8QfcHzYNjAiuAinuiH","gallowPillow":"V01Fjb3vWcTAWnpIcqxD","head":"FIrJY__wEBYmmg9__DJX","body":"fKfGWHPX756_bLKw73Ml","rightArm":"bEn7QSPlLiaRfYQA4D1j","leftArm":"zSWEOSIivX_FsgUiz_7T","leftLeg":"FnDBYNn31XZ3XeX6Bb1g","rightLeg":"MY3iHisoZa4GwGoZoyi9","hidden":"mC7LWBtH6mCN1jvQeSQG"});
;// CONCATENATED MODULE: ./src/widgets/gallows/assets/head.png
const head_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/widgets/gallows/assets/hand-one.png
const hand_one_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABRCAYAAABrCACaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANMSURBVHgB5ZrNcRpBEIUbzMFHhUAGJgPjIycTgnSnYLn5ZikCFhLwOgLjGzfjCIwzwBkoAnDP1qAS6O3s38zO31e1tWhaK9W+mu5HTTdRxKRpulqv119fr72jSJFCfOFrPJlMaLfb/RbrPYoQFuPz+Xze3izvB4PBfXQ7ZLVaDfm24+v9TWjIIh36FBFCjF6v94s/3t3GeP1xsVh8j0oQfulvfBuC0JbFeBIfohFEFtExCB05VR4uPwwoAoQY/NKPIHTkQjqezWbPl4XgXWaz2Xw8nU57FGORPi2Xy6tY0DtEFFEWI0MxUUSTJNm/WadAYTHu+KX/ECii0lGe0HPBFlWFoxyKxBAEKYh0lCkIiSI6VT0bXMqwGAsulikIPbMYI3aUf6rngxKEHeUDF9EDinEKTTlVfpb9jWBSRjrKFsVkES0VI/9dCgCVozAp2+uSKhLEDlE5Sh0xBN4L0sZREF6nTFtHQXgriA5HQXiZMrocBT5PnqHTURDe7RAWQxTRIQgd2ooh8EoQ6SgJCDVyFIQ3KWPCURBe7BBRRAuOAPMiqksMgfOCVGgdrEkjzgvCL/2DcBHNVAc9TXFaENGM5tsIhETroLWjIJw9ZJatgyJHuWod6MRJlyloRuf0+/3RfD7/S4ZwLmWko2QoxvUkMSmGwClBunYUhFOCKBxla8JREM4IUuIoD9QRTriMLUdBWHcZm44C/ydZxLajIKwJ4oKjIKwJUmW8yQZWBFGNN3ERTcginRfVCuNN2s42mtCpIHXHm2zQ2feQJuNNNuhkh5huHeikk6KqsxltGuOC6G5Gm8ZoynTVOtCJMUFMNaNNYyRlTDajTaN9h/jkKAjtO8QnR0FoFcQ3R0FoSxkfHQWhRRBfHQXROmV8dhREqx3iu6MgWu0QxXjT0UcxBI0FKRlvGpOnNEqZUBwFUXuHdDneZINagrjaOtBJLUFcaEabprIgrjSjTVPpkNmlZrRpSl3GtWa0aZQp42Iz2jSFgsTgKIhCQWJwFAQUJBZHQbxxmZgcBXHlMrE5CuIlZWJ0FEQuSKyOgsgFUbQO9iE7CqJfMt50T5FR9D3EifEmG+QuI0edMpJp48p4kw1ebPdSWPnKYqsbhYi2AkXOf9wS+0yVQyWcAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/widgets/gallows/assets/hand-two.png
const hand_two_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABRCAYAAABrCACaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANjSURBVHgB5ZzvjdpAEMV3VxRAB6GDkApCKsilgpDvCEwFuVSAQXznUkFIBSEVHOmAdOACEGRG8Zwsbln8B693Zn/SnS2vJcTT23mLZ0GrnMVi0ddab4wx6XQ6/a0iReM/EGMAYvyC0wH8Zb1ebziZTP6qCDGr1eo9iPGs/ouB9I/H4w4doyLEnE6nRzhevnl0zA8VIeZ8Pn+C48EyNkrTdKEiw8zn8wxE+QDnmWU8WS6XMxURmk6wlsD02dluguQZxZI8hk7wDUPdSGw3gVDb9Xr9RkWAvryQ1w2bMAeYWu9wiinBmMsLSZLM4bCz3BtF8hjbRVfyQJH9qgSjrw3kq1dcsL1aoGGtmc1mSyUQ7RoEN3wEt2xtY5A8QyjEf5QwjGsQXPAT3PBoG5OaPLrMTY7k2eOiTlLymDI35cmztwwNwUGilvelBEEcyTOWlDylpgwBy/u3+fLeljxjqDnfFXNKOwTBVLm2vAcHpSiYYk4lQRB0wZXk6UtInkpTpggkzwYOY8sQ6+Sp7BAC3rTI5KktSP5gSVzy1J4yhLTkqe0QQlryNBYEkZQ8dxEEAVG+weHJMjSAPs9WMeFugiCu5OHS0rirIDeSJ+GQPI1TxkaePHvrC2r9gM9ZVKDc1SHEjeR5CrnItuIQgmNLoxWHEBxbGq0KgnBrprcuCLdmeqs1pAiXZnrrDiG4NNO9OYQIPXm8OYQIPXm8C4KEnDydCBJy8nivIUVCTJ5OHEKEmDydOoQIKXk6dQjhaKZj8myUR4IQBHEkz4PPB0tBTBkihG1cQQmCOLZxZXnytLqNK5gpQzi2cXlpaQTnEKKrZnpwDiG6aqYHK0hXzfRgpwzhu5kerEMI38304AVBfDbTg58yRXwkDwuHED6Sh5UgPpKH1ZQh2kweloIg4IbP2Di3DDX6ZjqrKVPElTz4zfS6ycNWECTfxmX7ZFx7GxdrQRCYNl+UvcjW2sbFXpBCS+NgGa7c0mBbVC9xbeOq0tJg7xDC9ZmnyvJejEOIpi0NMQ4hmjbTxQmCNGmmixSkSTNdXA0pUqeZLtIhRJ1mumiHEFWSR7RDiCrJE4UgSNnkiUaQsskTRQ0pciN5htE4hHAkzwEEyaITBMn3maSFS3t47DiK9QcxX4Bi+hzjzxtexfaLoP8APlpEzUlRdz8AAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/widgets/gallows/assets/body.png
const body_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAACDCAYAAABFhtEgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAoSURBVHgB7cihEQAgDASwwv7iNwbfq69JZE6SV82tgZRSSimllOv5AVuvA7XPMiECAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/widgets/gallows/assets/leg-one.png
const leg_one_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABRCAYAAABrCACaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANMSURBVHgB5ZrNcRpBEIUbzMFHhUAGJgPjIycTgnSnYLn5ZikCFhLwOgLjGzfjCIwzwBkoAnDP1qAS6O3s38zO31e1tWhaK9W+mu5HTTdRxKRpulqv119fr72jSJFCfOFrPJlMaLfb/RbrPYoQFuPz+Xze3izvB4PBfXQ7ZLVaDfm24+v9TWjIIh36FBFCjF6v94s/3t3GeP1xsVh8j0oQfulvfBuC0JbFeBIfohFEFtExCB05VR4uPwwoAoQY/NKPIHTkQjqezWbPl4XgXWaz2Xw8nU57FGORPi2Xy6tY0DtEFFEWI0MxUUSTJNm/WadAYTHu+KX/ECii0lGe0HPBFlWFoxyKxBAEKYh0lCkIiSI6VT0bXMqwGAsulikIPbMYI3aUf6rngxKEHeUDF9EDinEKTTlVfpb9jWBSRjrKFsVkES0VI/9dCgCVozAp2+uSKhLEDlE5Sh0xBN4L0sZREF6nTFtHQXgriA5HQXiZMrocBT5PnqHTURDe7RAWQxTRIQgd2ooh8EoQ6SgJCDVyFIQ3KWPCURBe7BBRRAuOAPMiqksMgfOCVGgdrEkjzgvCL/2DcBHNVAc9TXFaENGM5tsIhETroLWjIJw9ZJatgyJHuWod6MRJlyloRuf0+/3RfD7/S4ZwLmWko2QoxvUkMSmGwClBunYUhFOCKBxla8JREM4IUuIoD9QRTriMLUdBWHcZm44C/ydZxLajIKwJ4oKjIKwJUmW8yQZWBFGNN3ERTcginRfVCuNN2s42mtCpIHXHm2zQ2feQJuNNNuhkh5huHeikk6KqsxltGuOC6G5Gm8ZoynTVOtCJMUFMNaNNYyRlTDajTaN9h/jkKAjtO8QnR0FoFcQ3R0FoSxkfHQWhRRBfHQXROmV8dhREqx3iu6MgWu0QxXjT0UcxBI0FKRlvGpOnNEqZUBwFUXuHdDneZINagrjaOtBJLUFcaEabprIgrjSjTVPpkNmlZrRpSl3GtWa0aZQp42Iz2jSFgsTgKIhCQWJwFAQUJBZHQbxxmZgcBXHlMrE5CuIlZWJ0FEQuSKyOgsgFUbQO9iE7CqJfMt50T5FR9D3EifEmG+QuI0edMpJp48p4kw1ebPdSWPnKYqsbhYi2AkXOf9wS+0yVQyWcAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/widgets/gallows/assets/leg-two.png
const leg_two_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABRCAYAAABrCACaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANjSURBVHgB5ZzvjdpAEMV3VxRAB6GDkApCKsilgpDvCEwFuVSAQXznUkFIBSEVHOmAdOACEGRG8Zwsbln8B693Zn/SnS2vJcTT23mLZ0GrnMVi0ddab4wx6XQ6/a0iReM/EGMAYvyC0wH8Zb1ebziZTP6qCDGr1eo9iPGs/ouB9I/H4w4doyLEnE6nRzhevnl0zA8VIeZ8Pn+C48EyNkrTdKEiw8zn8wxE+QDnmWU8WS6XMxURmk6wlsD02dluguQZxZI8hk7wDUPdSGw3gVDb9Xr9RkWAvryQ1w2bMAeYWu9wiinBmMsLSZLM4bCz3BtF8hjbRVfyQJH9qgSjrw3kq1dcsL1aoGGtmc1mSyUQ7RoEN3wEt2xtY5A8QyjEf5QwjGsQXPAT3PBoG5OaPLrMTY7k2eOiTlLymDI35cmztwwNwUGilvelBEEcyTOWlDylpgwBy/u3+fLeljxjqDnfFXNKOwTBVLm2vAcHpSiYYk4lQRB0wZXk6UtInkpTpggkzwYOY8sQ6+Sp7BAC3rTI5KktSP5gSVzy1J4yhLTkqe0QQlryNBYEkZQ8dxEEAVG+weHJMjSAPs9WMeFugiCu5OHS0rirIDeSJ+GQPI1TxkaePHvrC2r9gM9ZVKDc1SHEjeR5CrnItuIQgmNLoxWHEBxbGq0KgnBrprcuCLdmeqs1pAiXZnrrDiG4NNO9OYQIPXm8OYQIPXm8C4KEnDydCBJy8nivIUVCTJ5OHEKEmDydOoQIKXk6dQjhaKZj8myUR4IQBHEkz4PPB0tBTBkihG1cQQmCOLZxZXnytLqNK5gpQzi2cXlpaQTnEKKrZnpwDiG6aqYHK0hXzfRgpwzhu5kerEMI38304AVBfDbTg58yRXwkDwuHED6Sh5UgPpKH1ZQh2kweloIg4IbP2Di3DDX6ZjqrKVPElTz4zfS6ycNWECTfxmX7ZFx7GxdrQRCYNl+UvcjW2sbFXpBCS+NgGa7c0mBbVC9xbeOq0tJg7xDC9ZmnyvJejEOIpi0NMQ4hmjbTxQmCNGmmixSkSTNdXA0pUqeZLtIhRJ1mumiHEFWSR7RDiCrJE4UgSNnkiUaQsskTRQ0pciN5htE4hHAkzwEEyaITBMn3maSFS3t47DiK9QcxX4Bi+hzjzxtexfaLoP8APlpEzUlRdz8AAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/widgets/gallows/Gallows.js










class Gallows {
  container = createEl('div', gallows_module.gallowContainer);
  partsCount = 0;

  constructor() {
    const pillow = createEl('div', gallows_module.gallowPillow);
    this.bodyParts = [
      [gallows_module.head, head_namespaceObject],
      [gallows_module.body, body_namespaceObject],
      [gallows_module.leftArm, hand_one_namespaceObject],
      [gallows_module.rightArm, hand_two_namespaceObject],
      [gallows_module.leftLeg, leg_one_namespaceObject],
      [gallows_module.rightLeg, leg_two_namespaceObject],
    ];
    this.container.append(pillow);

    this.bodyParts = this.bodyParts.map((el) => {
      let imgContainer = createEl('div', el[0]);
      let img = createEl('img');
      img.alt = 'body part';
      img.src = el[1];
      imgContainer.classList.add(gallows_module.hidden);
      pillow.append(imgContainer);
      imgContainer.append(img);
      return imgContainer;
    });
  }

  addPart() {
    this.bodyParts[this.partsCount].classList.remove(gallows_module.hidden);
    this.partsCount += 1;
  }

  resetParts() {
    this.bodyParts.forEach((part) => {
      if (!part.classList.contains(gallows_module.hidden)) {
        part.classList.add(gallows_module.hidden);
      }
    });
    this.partsCount = 0;
  }
}

;// CONCATENATED MODULE: ./src/widgets/keyboard/keyboard.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const keyboard_module = ({"key":"hSw7yr0J9OdtExoUwc1x","container":"CkCl_e2XesLssQKgdglQ","disabled":"KEWTnXnsS2uEcCGvrlX7"});
;// CONCATENATED MODULE: ./src/widgets/keyboard/Keyboard.js



class Keyboard {
  keys = [...'abcdefghijklmnopqrstuvwxyz'];
  container = createEl('div', keyboard_module.container);
  constructor() {
    this.keys = this.keys.map((key) => {
      let keyEl = createEl('div', keyboard_module.key, key.toUpperCase());
      this.container.append(keyEl);
      return keyEl;
    });
  }

  disableButton(key) {
    let keyToDisable = this.keys.find((el) => {
      if (el.textContent.toLowerCase() === key.toLowerCase()) {
        return el;
      }
    });

    if (keyToDisable) {
      keyToDisable.disabled = true;
      keyToDisable.classList.add(keyboard_module.disabled);
    }
  }

  resetButtons() {
    this.keys.forEach((key)=> {
      if (key.classList.contains(keyboard_module.disabled)) {
        key.classList.remove(keyboard_module.disabled)
      }
    })
  }
}

;// CONCATENATED MODULE: ./src/widgets/modal/modal.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const modal_module = ({"container":"Uav_KEnQg6QQv4RY_H0I","background":"D3XQrhjk76CJ77N4Ra_Y","open":"F6P05WvvZ_llHWSW_QWX","heading":"oiStho0mngUUWld5ALLj","button":"xSUBwCxtI1PLxGmNp8Yj"});
;// CONCATENATED MODULE: ./src/widgets/modal/Modal.js



class Modal {
  container = createEl('div', modal_module.container);
  background = createEl('div', modal_module.background);
  constructor(answer, win) {
    const heading = createEl('h2', modal_module.heading);
    if (win) {
      heading.textContent = 'Congratulations! You guessed the word!';
    } else {
      heading.textContent = 'Game over! Too many incorrect guesses!';
    }

    const word = createEl('p', modal_module.word);
    word.textContent = `Guessed word - ${answer.toUpperCase()}`;
    this.button = createEl('button', modal_module.button, 'Play Again');
    this.container.append(heading, word, this.button);
  }

  open() {
    this.background.classList.add(modal_module.open);
    this.container.classList.add(modal_module.open);
  }

  close() {
    this.background.classList.remove(modal_module.open);
    this.container.classList.remove(modal_module.open);
  }
}

;// CONCATENATED MODULE: ./src/widgets/quiz/quiz.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const quiz_module = ({"quizContaier":"Ta0ucSa94VoALvAul9Fa","answerContainer":"L41xbHvMuF_TDShhYOjB","questionLabel":"HTH3CQ4SsI834LWrOnId","letter":"IKBPRzMponzvy7daMCHe","open":"Oj9XXSt6OdPANTE21tCa"});
;// CONCATENATED MODULE: ./src/widgets/quiz/Quiz.js




class Quiz {
  container = createEl('div', quiz_module.quizContaier)
  answer = []
  constructor(index) {
    this.answerContainer = createEl('div', quiz_module.answerContainer)
    this.questionLabel = createEl('p', quiz_module.questionLabel)
    this.container.append(this.answerContainer, this.questionLabel)
    this.set(index)

  }

  reset() {
    this.answerContainer.replaceChildren()
  }

  set(index) {
    this.answer = [...qaPairs[index].answer]
    this.questionLabel.textContent = `Hint: ${qaPairs[index].question}`
    this.build()
  }

  build() {
    this.answer = this.answer.map(letter => {
      let letterEl = createEl('div', quiz_module.letter)
      this.answerContainer.append(letterEl)
      return [letterEl, letter]
    });
  }

  openLetter(index) {
    this.answer[index][0].classList.add(quiz_module.open)
    this.answer[index][0].textContent = this.answer[index][1]
  }
}
;// CONCATENATED MODULE: ./src/main.js








const main = createEl('main', 'main');
const gallow = new Gallows();
document.body.append(main);

const quizPartWrapper = createEl('div', 'quiz-part-wrapper');

let pastQuestions = [];

function getRandomNum() {
  const num = Math.floor(Math.random() * qaPairs.length);
  console.log(num);
  return num;
}

let currentQuestionIndex = getRandomNum();
pastQuestions.push(currentQuestionIndex);
let answer = [...qaPairs[currentQuestionIndex].answer];
let disabledKeys = [];

const quiz = new Quiz(currentQuestionIndex);
const keyboard = new Keyboard();
let curIncorrectGuesses = 0;
main.append(gallow.container, quizPartWrapper);

const guessesLabel = createEl('p', 'quesses-count');
guessesLabel.textContent = `Incorrect guesses: ${curIncorrectGuesses} / 6`;

quizPartWrapper.append(quiz.container, guessesLabel, keyboard.container);

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

function openAllLetters(letter) {
  let index = answer.indexOf(letter);
  while (index !== -1) {
    quiz.openLetter(index);
    answer[index] = null;
    index = answer.indexOf(letter);
  }
}

function disableButton(key) {
  disabledKeys.push(key);
  keyboard.disableButton(key);
}

let modal;
let modalIsOpen = false;
function showModal() {
  let gameFinished = false;
  if (curIncorrectGuesses === 6) {
    modal = new Modal(qaPairs[currentQuestionIndex].answer);
    gameFinished = true;
  } else if (answer.every((letter) => letter === null)) {
    modal = new Modal(qaPairs[currentQuestionIndex].answer, true);
    gameFinished = true;
  }
  if (gameFinished) {
    document.body.append(modal.background, modal.container);
    modal.open();
    modalIsOpen = true;
    modal.button.addEventListener('click', setNextQuestion);
  }
}

function validateKey(key) {
  if (alphabet.includes(key) && !disabledKeys.includes(key)) {
    if (answer.indexOf(key) !== -1) {
      openAllLetters(key);
    } else {
      curIncorrectGuesses += 1;
      guessesLabel.textContent = `Incorrect guesses: ${curIncorrectGuesses} / 6`;
      gallow.addPart();
    }
    disableButton(key);
    showModal();
  }
}

window.addEventListener('keydown', (event) => {
  if (!modalIsOpen) {
    let curKey = event.code.substring(3).toLowerCase();
    validateKey(curKey);
  }
});

keyboard.keys.forEach((key) => {
  key.addEventListener('click', () => {
    let curKey = key.textContent.toLowerCase();
    validateKey(curKey);
  });
});

function setNextQuestion() {
  if (pastQuestions.length === qaPairs.length) {
    pastQuestions = [];
  }
  let num;
  do {
    num = getRandomNum();
  } while (pastQuestions.includes(num));
  pastQuestions.push(num);
  currentQuestionIndex = num;
  quiz.reset();
  gallow.resetParts();
  keyboard.resetButtons();
  curIncorrectGuesses = 0;
  guessesLabel.textContent = `Incorrect guesses: ${curIncorrectGuesses} / 6`;
  disabledKeys = [];
  answer = [...qaPairs[num].answer];
  quiz.set(num);
  modal.close();
  modal.container.remove()
  modal.background.remove()
  modal.button.removeEventListener('click', setNextQuestion)
  modalIsOpen = false;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25EQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDN0JBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3NoYXJlZC9jcmVhdGUtZWwuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy9zaGFyZWQvcWEtcGFpcnMuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL2dhbGxvd3MvZ2FsbG93cy5tb2R1bGUuY3NzPzVmZDkiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL2dhbGxvd3MvR2FsbG93cy5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMva2V5Ym9hcmQva2V5Ym9hcmQubW9kdWxlLmNzcz9kMDI1Iiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9rZXlib2FyZC9LZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvbW9kYWwvbW9kYWwubW9kdWxlLmNzcz8wMjFmIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9tb2RhbC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvcXVpei9xdWl6Lm1vZHVsZS5jc3M/OTA2MSIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvcXVpei9RdWl6LmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWwodGFnLCBjbGFzc05hbWUsIHRleHQpIHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgfVxyXG4gIGlmICh0ZXh0KSB7XHJcbiAgICBlbC5hcHBlbmQodGV4dCk7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufSIsImV4cG9ydCBjb25zdCBxYVBhaXJzID0gW1xyXG4gIHsgaWQ6IDEsIHF1ZXN0aW9uOiAnQSBwb3B1bGFyIHNuYWNrIGNvbnNpc3Rpbmcgb2YgYSBjb29rZWQgc2F1c2FnZSBzZXJ2ZWQgaW4gYSBzbGljZWQgYnVuJywgYW5zd2VyOiAnaG90ZG9nJyB9LFxyXG4gIHsgaWQ6IDIsIHF1ZXN0aW9uOiAnVGhlIGFtb3VudCBvZiBtb25leSB5b3UgcGF5IHRvIGVudGVyIGEgcGxhY2Ugb3IgZXZlbnQnLCBhbnN3ZXI6ICdhZG1pc3Npb24nIH0sXHJcbiAgeyBpZDogMywgcXVlc3Rpb246ICdBIHNwb29reSBhdHRyYWN0aW9uIGRlc2lnbmVkIHRvIHNjYXJlIHZpc2l0b3JzIHdpdGggdmFyaW91cyBzcGVjaWFsIGVmZmVjdHMnLCBhbnN3ZXI6ICdoYXVudGVkaG91c2UnIH0sXHJcbiAgeyBpZDogNCwgcXVlc3Rpb246ICdBIHNtYWxsIHN0cnVjdHVyZSBvciBzdGFuZCB3aGVyZSBnb29kcyBvciBzZXJ2aWNlcyBhcmUgc29sZCcsIGFuc3dlcjogJ2tpb3NrJyB9LFxyXG4gIHsgaWQ6IDUsIHF1ZXN0aW9uOiAnQSBzbWFsbCBpdGVtIHRoYXQgaXMga2VwdCBhcyBhIHJlbWluZGVyIG9mIGEgcGxhY2UnLCBhbnN3ZXI6ICdzb3V2ZW5pcicgfSxcclxuICB7IGlkOiA2LCBxdWVzdGlvbjogJ0Egc21hbGwsIHJvdW5kIG9iamVjdCB1c2VkIGFzIHBheW1lbnQgZm9yIHJpZGVzIG9yIGdhbWVzJywgYW5zd2VyOiAndG9rZW4nIH0sXHJcbiAgeyBpZDogNywgcXVlc3Rpb246ICdBIGhpZ2gtc3BlZWQsIGxvb3BpbmcgcmlkZSB0aGF0IHByb3ZpZGVzIGV4Y2l0ZW1lbnQgYW5kIGFkcmVuYWxpbmUgcnVzaGVzJywgYW5zd2VyOiAncm9sbGVyY29hc3RlcicgfSxcclxuICB7IGlkOiA4LCBxdWVzdGlvbjogJ0Egcm90YXRpbmcgcGxhdGZvcm0gd2l0aCBzZWF0cyBmb3IgcGVvcGxlIHRvIHJpZGUgb24nLCBhbnN3ZXI6ICdjYXJvdXNlbCcgfSxcclxuICB7IGlkOiA5LCBxdWVzdGlvbjogJ0EgZmFtb3VzIGFuZCBwb3B1bGFyIGFtdXNlbWVudCBwYXJrIGxvY2F0ZWQgaW4gQ2FsaWZvcm5pYScsIGFuc3dlcjogJ2Rpc25leWxhbmQnIH0sXHJcbiAgeyBpZDogMTAsIHF1ZXN0aW9uOiAnQSBzbWFsbCBwaWVjZSBvZiBwYXBlciB0aGF0IGFsbG93cyBlbnRyeSB0byBhIHBhcmsgb3IgYXR0cmFjdGlvbicsIGFuc3dlcjogJ3RpY2tldCcgfSxcclxuICB7IGlkOiAxMSwgcXVlc3Rpb246ICdBIHBlcnNvbiB3aG8gY2xhaW1zIHRvIHByZWRpY3QgdGhlIGZ1dHVyZSBhbmQgYW5zd2VyIHF1ZXN0aW9ucyBhYm91dCB5b3VyIGxpZmUnLCBhbnN3ZXI6ICdmb3J0dW5ldGVsbGVyJyB9LFxyXG4gIHsgaWQ6IDEyLCBxdWVzdGlvbjogJ0l0ZW1zIHdoaWNoIGNhbiBiZSB3b24gYnkgcGxheWluZyBnYW1lcyBvciBwYXJ0aWNpcGF0aW5nIGluIGFjdGl2aXRpZXMnLCBhbnN3ZXI6ICdwcml6ZXMnIH0sXHJcbiAgeyBpZDogMTMsIHF1ZXN0aW9uOiAnQSBsYXJnZSBhbXVzZW1lbnQgcGFyayB0aGF0IGZvbGxvd3MgYSBzcGVjaWZpYyBjb25jZXB0JywgYW5zd2VyOiAndGhlbWVwYXJrJyB9LFxyXG4gIHsgaWQ6IDE0LCBxdWVzdGlvbjogJ0Egc3BlY2lhbCBwYXNzIHRoYXQgYWxsb3dzIHlvdSB0byBza2lwIGxvbmcgbGluZXMgYW5kIGdldCBvbiByaWRlcyBmYXN0ZXInLCBhbnN3ZXI6ICdmYXN0cGFzcycgfSxcclxuXTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJnYWxsb3dDb250YWluZXJcIjpcImNzOFFmY0h6WU5qQWl1QWludWlIXCIsXCJnYWxsb3dQaWxsb3dcIjpcIlYwMUZqYjN2V2NUQVducEljcXhEXCIsXCJoZWFkXCI6XCJGSXJKWV9fd0VCWW1tZzlfX0RKWFwiLFwiYm9keVwiOlwiZktmR1dIUFg3NTZfYkxLdzczTWxcIixcInJpZ2h0QXJtXCI6XCJiRW43UVNQbExpYVJmWVFBNEQxalwiLFwibGVmdEFybVwiOlwielNXRU9TSWl2WF9Gc2dVaXpfN1RcIixcImxlZnRMZWdcIjpcIkZuREJZTm4zMVhaM1hlWDZCYjFnXCIsXCJyaWdodExlZ1wiOlwiTVkzaUhpc29aYTRHd0dvWm95aTlcIixcImhpZGRlblwiOlwibUM3TFdCdEg2bUNOMWp2UWVTUUdcIn07IiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlLWVsJztcclxuaW1wb3J0IGdhbGxvd1N0eWxlcyBmcm9tICcuL2dhbGxvd3MubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgaGVhZEltZyBmcm9tICcuL2Fzc2V0cy9oZWFkLnBuZyc7XHJcbmltcG9ydCBsQXJtSW1nIGZyb20gJy4vYXNzZXRzL2hhbmQtb25lLnBuZyc7XHJcbmltcG9ydCByQXJtSW1nIGZyb20gJy4vYXNzZXRzL2hhbmQtdHdvLnBuZyc7XHJcbmltcG9ydCBib2R5SW1nIGZyb20gJy4vYXNzZXRzL2JvZHkucG5nJztcclxuaW1wb3J0IGxMZWdJbWcgZnJvbSAnLi9hc3NldHMvbGVnLW9uZS5wbmcnO1xyXG5pbXBvcnQgckxlZ0ltZyBmcm9tICcuL2Fzc2V0cy9sZWctdHdvLnBuZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FsbG93cyB7XHJcbiAgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsIGdhbGxvd1N0eWxlcy5nYWxsb3dDb250YWluZXIpO1xyXG4gIHBhcnRzQ291bnQgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IHBpbGxvdyA9IGNyZWF0ZUVsKCdkaXYnLCBnYWxsb3dTdHlsZXMuZ2FsbG93UGlsbG93KTtcclxuICAgIHRoaXMuYm9keVBhcnRzID0gW1xyXG4gICAgICBbZ2FsbG93U3R5bGVzLmhlYWQsIGhlYWRJbWddLFxyXG4gICAgICBbZ2FsbG93U3R5bGVzLmJvZHksIGJvZHlJbWddLFxyXG4gICAgICBbZ2FsbG93U3R5bGVzLmxlZnRBcm0sIGxBcm1JbWddLFxyXG4gICAgICBbZ2FsbG93U3R5bGVzLnJpZ2h0QXJtLCByQXJtSW1nXSxcclxuICAgICAgW2dhbGxvd1N0eWxlcy5sZWZ0TGVnLCBsTGVnSW1nXSxcclxuICAgICAgW2dhbGxvd1N0eWxlcy5yaWdodExlZywgckxlZ0ltZ10sXHJcbiAgICBdO1xyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHBpbGxvdyk7XHJcblxyXG4gICAgdGhpcy5ib2R5UGFydHMgPSB0aGlzLmJvZHlQYXJ0cy5tYXAoKGVsKSA9PiB7XHJcbiAgICAgIGxldCBpbWdDb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgZWxbMF0pO1xyXG4gICAgICBsZXQgaW1nID0gY3JlYXRlRWwoJ2ltZycpO1xyXG4gICAgICBpbWcuYWx0ID0gJ2JvZHkgcGFydCc7XHJcbiAgICAgIGltZy5zcmMgPSBlbFsxXTtcclxuICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZ2FsbG93U3R5bGVzLmhpZGRlbik7XHJcbiAgICAgIHBpbGxvdy5hcHBlbmQoaW1nQ29udGFpbmVyKTtcclxuICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZChpbWcpO1xyXG4gICAgICByZXR1cm4gaW1nQ29udGFpbmVyO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXJ0KCkge1xyXG4gICAgdGhpcy5ib2R5UGFydHNbdGhpcy5wYXJ0c0NvdW50XS5jbGFzc0xpc3QucmVtb3ZlKGdhbGxvd1N0eWxlcy5oaWRkZW4pO1xyXG4gICAgdGhpcy5wYXJ0c0NvdW50ICs9IDE7XHJcbiAgfVxyXG5cclxuICByZXNldFBhcnRzKCkge1xyXG4gICAgdGhpcy5ib2R5UGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xyXG4gICAgICBpZiAoIXBhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKGdhbGxvd1N0eWxlcy5oaWRkZW4pKSB7XHJcbiAgICAgICAgcGFydC5jbGFzc0xpc3QuYWRkKGdhbGxvd1N0eWxlcy5oaWRkZW4pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMucGFydHNDb3VudCA9IDA7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wia2V5XCI6XCJoU3c3eXIwSjlPZHRFeG9Vd2MxeFwiLFwiY29udGFpbmVyXCI6XCJDa0NsX2UyWGVzTHNzUUtnZGdsUVwiLFwiZGlzYWJsZWRcIjpcIktFV1RuWG5zUzJ1RWNDR3ZybFg3XCJ9OyIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZS1lbCc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2tleWJvYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcclxuICBrZXlzID0gWy4uLidhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiddO1xyXG4gIGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCBzdHlsZS5jb250YWluZXIpO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5rZXlzID0gdGhpcy5rZXlzLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIGxldCBrZXlFbCA9IGNyZWF0ZUVsKCdkaXYnLCBzdHlsZS5rZXksIGtleS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGtleUVsKTtcclxuICAgICAgcmV0dXJuIGtleUVsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlQnV0dG9uKGtleSkge1xyXG4gICAgbGV0IGtleVRvRGlzYWJsZSA9IHRoaXMua2V5cy5maW5kKChlbCkgPT4ge1xyXG4gICAgICBpZiAoZWwudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSA9PT0ga2V5LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChrZXlUb0Rpc2FibGUpIHtcclxuICAgICAga2V5VG9EaXNhYmxlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAga2V5VG9EaXNhYmxlLmNsYXNzTGlzdC5hZGQoc3R5bGUuZGlzYWJsZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRCdXR0b25zKCkge1xyXG4gICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSk9PiB7XHJcbiAgICAgIGlmIChrZXkuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmRpc2FibGVkKSkge1xyXG4gICAgICAgIGtleS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmRpc2FibGVkKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNvbnRhaW5lclwiOlwiVWF2X0tFblFnNlFRdjRSWV9IMElcIixcImJhY2tncm91bmRcIjpcIkQzWFFyaGprNzZDSjc3TjRSYV9ZXCIsXCJvcGVuXCI6XCJGNlAwNVd2dlpfbGxIV1NXX1FXWFwiLFwiaGVhZGluZ1wiOlwib2lTdGhvMG1uZ1VVV2xkNUFMTGpcIixcImJ1dHRvblwiOlwieFNVQndDeHRJMVBMeEdtTnA4WWpcIn07IiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlLWVsJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vbW9kYWwubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWwge1xyXG4gIGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCBzdHlsZS5jb250YWluZXIpO1xyXG4gIGJhY2tncm91bmQgPSBjcmVhdGVFbCgnZGl2Jywgc3R5bGUuYmFja2dyb3VuZCk7XHJcbiAgY29uc3RydWN0b3IoYW5zd2VyLCB3aW4pIHtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbCgnaDInLCBzdHlsZS5oZWFkaW5nKTtcclxuICAgIGlmICh3aW4pIHtcclxuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDb25ncmF0dWxhdGlvbnMhIFlvdSBndWVzc2VkIHRoZSB3b3JkISc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0dhbWUgb3ZlciEgVG9vIG1hbnkgaW5jb3JyZWN0IGd1ZXNzZXMhJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3b3JkID0gY3JlYXRlRWwoJ3AnLCBzdHlsZS53b3JkKTtcclxuICAgIHdvcmQudGV4dENvbnRlbnQgPSBgR3Vlc3NlZCB3b3JkIC0gJHthbnN3ZXIudG9VcHBlckNhc2UoKX1gO1xyXG4gICAgdGhpcy5idXR0b24gPSBjcmVhdGVFbCgnYnV0dG9uJywgc3R5bGUuYnV0dG9uLCAnUGxheSBBZ2FpbicpO1xyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIHdvcmQsIHRoaXMuYnV0dG9uKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChzdHlsZS5vcGVuKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc3R5bGUub3Blbik7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLm9wZW4pO1xyXG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5vcGVuKTtcclxuICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJxdWl6Q29udGFpZXJcIjpcIlRhMHVjU2E5NFZvQUx2QXVsOUZhXCIsXCJhbnN3ZXJDb250YWluZXJcIjpcIkw0MXhiSHZNdUZfVERTaGhZT2pCXCIsXCJxdWVzdGlvbkxhYmVsXCI6XCJIVEgzQ1E0U3NJODM0TFdyT25JZFwiLFwibGV0dGVyXCI6XCJJS0JQUnpNcG9uenZ5N2RhTUNIZVwiLFwib3BlblwiOlwiT2o5WFhTdDZPZFBBTlRFMjF0Q2FcIn07IiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NyZWF0ZS1lbFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcXVpei5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBxYVBhaXJzIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9xYS1wYWlyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1aXoge1xyXG4gIGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCBzdHlsZXMucXVpekNvbnRhaWVyKVxyXG4gIGFuc3dlciA9IFtdXHJcbiAgY29uc3RydWN0b3IoaW5kZXgpIHtcclxuICAgIHRoaXMuYW5zd2VyQ29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsIHN0eWxlcy5hbnN3ZXJDb250YWluZXIpXHJcbiAgICB0aGlzLnF1ZXN0aW9uTGFiZWwgPSBjcmVhdGVFbCgncCcsIHN0eWxlcy5xdWVzdGlvbkxhYmVsKVxyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuYW5zd2VyQ29udGFpbmVyLCB0aGlzLnF1ZXN0aW9uTGFiZWwpXHJcbiAgICB0aGlzLnNldChpbmRleClcclxuXHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuYW5zd2VyQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXHJcbiAgfVxyXG5cclxuICBzZXQoaW5kZXgpIHtcclxuICAgIHRoaXMuYW5zd2VyID0gWy4uLnFhUGFpcnNbaW5kZXhdLmFuc3dlcl1cclxuICAgIHRoaXMucXVlc3Rpb25MYWJlbC50ZXh0Q29udGVudCA9IGBIaW50OiAke3FhUGFpcnNbaW5kZXhdLnF1ZXN0aW9ufWBcclxuICAgIHRoaXMuYnVpbGQoKVxyXG4gIH1cclxuXHJcbiAgYnVpbGQoKSB7XHJcbiAgICB0aGlzLmFuc3dlciA9IHRoaXMuYW5zd2VyLm1hcChsZXR0ZXIgPT4ge1xyXG4gICAgICBsZXQgbGV0dGVyRWwgPSBjcmVhdGVFbCgnZGl2Jywgc3R5bGVzLmxldHRlcilcclxuICAgICAgdGhpcy5hbnN3ZXJDb250YWluZXIuYXBwZW5kKGxldHRlckVsKVxyXG4gICAgICByZXR1cm4gW2xldHRlckVsLCBsZXR0ZXJdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5MZXR0ZXIoaW5kZXgpIHtcclxuICAgIHRoaXMuYW5zd2VyW2luZGV4XVswXS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5vcGVuKVxyXG4gICAgdGhpcy5hbnN3ZXJbaW5kZXhdWzBdLnRleHRDb250ZW50ID0gdGhpcy5hbnN3ZXJbaW5kZXhdWzFdXHJcbiAgfVxyXG59IiwiaW1wb3J0ICcuL21haW4uY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuL3NoYXJlZC9jcmVhdGUtZWwnO1xyXG5pbXBvcnQgeyBxYVBhaXJzIH0gZnJvbSAnLi9zaGFyZWQvcWEtcGFpcnMnO1xyXG5pbXBvcnQgeyBHYWxsb3dzIH0gZnJvbSAnLi93aWRnZXRzL2dhbGxvd3MvR2FsbG93cyc7XHJcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi93aWRnZXRzL2tleWJvYXJkL0tleWJvYXJkJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL3dpZGdldHMvbW9kYWwvTW9kYWwnO1xyXG5pbXBvcnQgeyBRdWl6IH0gZnJvbSAnLi93aWRnZXRzL3F1aXovUXVpeic7XHJcblxyXG5jb25zdCBtYWluID0gY3JlYXRlRWwoJ21haW4nLCAnbWFpbicpO1xyXG5jb25zdCBnYWxsb3cgPSBuZXcgR2FsbG93cygpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChtYWluKTtcclxuXHJcbmNvbnN0IHF1aXpQYXJ0V3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAncXVpei1wYXJ0LXdyYXBwZXInKTtcclxuXHJcbmxldCBwYXN0UXVlc3Rpb25zID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21OdW0oKSB7XHJcbiAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcWFQYWlycy5sZW5ndGgpO1xyXG4gIGNvbnNvbGUubG9nKG51bSk7XHJcbiAgcmV0dXJuIG51bTtcclxufVxyXG5cclxubGV0IGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gZ2V0UmFuZG9tTnVtKCk7XHJcbnBhc3RRdWVzdGlvbnMucHVzaChjdXJyZW50UXVlc3Rpb25JbmRleCk7XHJcbmxldCBhbnN3ZXIgPSBbLi4ucWFQYWlyc1tjdXJyZW50UXVlc3Rpb25JbmRleF0uYW5zd2VyXTtcclxubGV0IGRpc2FibGVkS2V5cyA9IFtdO1xyXG5cclxuY29uc3QgcXVpeiA9IG5ldyBRdWl6KGN1cnJlbnRRdWVzdGlvbkluZGV4KTtcclxuY29uc3Qga2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcclxubGV0IGN1ckluY29ycmVjdEd1ZXNzZXMgPSAwO1xyXG5tYWluLmFwcGVuZChnYWxsb3cuY29udGFpbmVyLCBxdWl6UGFydFdyYXBwZXIpO1xyXG5cclxuY29uc3QgZ3Vlc3Nlc0xhYmVsID0gY3JlYXRlRWwoJ3AnLCAncXVlc3Nlcy1jb3VudCcpO1xyXG5ndWVzc2VzTGFiZWwudGV4dENvbnRlbnQgPSBgSW5jb3JyZWN0IGd1ZXNzZXM6ICR7Y3VySW5jb3JyZWN0R3Vlc3Nlc30gLyA2YDtcclxuXHJcbnF1aXpQYXJ0V3JhcHBlci5hcHBlbmQocXVpei5jb250YWluZXIsIGd1ZXNzZXNMYWJlbCwga2V5Ym9hcmQuY29udGFpbmVyKTtcclxuXHJcbmNvbnN0IGFscGhhYmV0ID0gWy4uLidhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiddO1xyXG5cclxuZnVuY3Rpb24gb3BlbkFsbExldHRlcnMobGV0dGVyKSB7XHJcbiAgbGV0IGluZGV4ID0gYW5zd2VyLmluZGV4T2YobGV0dGVyKTtcclxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XHJcbiAgICBxdWl6Lm9wZW5MZXR0ZXIoaW5kZXgpO1xyXG4gICAgYW5zd2VyW2luZGV4XSA9IG51bGw7XHJcbiAgICBpbmRleCA9IGFuc3dlci5pbmRleE9mKGxldHRlcik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlQnV0dG9uKGtleSkge1xyXG4gIGRpc2FibGVkS2V5cy5wdXNoKGtleSk7XHJcbiAga2V5Ym9hcmQuZGlzYWJsZUJ1dHRvbihrZXkpO1xyXG59XHJcblxyXG5sZXQgbW9kYWw7XHJcbmxldCBtb2RhbElzT3BlbiA9IGZhbHNlO1xyXG5mdW5jdGlvbiBzaG93TW9kYWwoKSB7XHJcbiAgbGV0IGdhbWVGaW5pc2hlZCA9IGZhbHNlO1xyXG4gIGlmIChjdXJJbmNvcnJlY3RHdWVzc2VzID09PSA2KSB7XHJcbiAgICBtb2RhbCA9IG5ldyBNb2RhbChxYVBhaXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5hbnN3ZXIpO1xyXG4gICAgZ2FtZUZpbmlzaGVkID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGFuc3dlci5ldmVyeSgobGV0dGVyKSA9PiBsZXR0ZXIgPT09IG51bGwpKSB7XHJcbiAgICBtb2RhbCA9IG5ldyBNb2RhbChxYVBhaXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5hbnN3ZXIsIHRydWUpO1xyXG4gICAgZ2FtZUZpbmlzaGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKGdhbWVGaW5pc2hlZCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwuYmFja2dyb3VuZCwgbW9kYWwuY29udGFpbmVyKTtcclxuICAgIG1vZGFsLm9wZW4oKTtcclxuICAgIG1vZGFsSXNPcGVuID0gdHJ1ZTtcclxuICAgIG1vZGFsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldE5leHRRdWVzdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVLZXkoa2V5KSB7XHJcbiAgaWYgKGFscGhhYmV0LmluY2x1ZGVzKGtleSkgJiYgIWRpc2FibGVkS2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICBpZiAoYW5zd2VyLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgb3BlbkFsbExldHRlcnMoa2V5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1ckluY29ycmVjdEd1ZXNzZXMgKz0gMTtcclxuICAgICAgZ3Vlc3Nlc0xhYmVsLnRleHRDb250ZW50ID0gYEluY29ycmVjdCBndWVzc2VzOiAke2N1ckluY29ycmVjdEd1ZXNzZXN9IC8gNmA7XHJcbiAgICAgIGdhbGxvdy5hZGRQYXJ0KCk7XHJcbiAgICB9XHJcbiAgICBkaXNhYmxlQnV0dG9uKGtleSk7XHJcbiAgICBzaG93TW9kYWwoKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKCFtb2RhbElzT3Blbikge1xyXG4gICAgbGV0IGN1cktleSA9IGV2ZW50LmNvZGUuc3Vic3RyaW5nKDMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YWxpZGF0ZUtleShjdXJLZXkpO1xyXG4gIH1cclxufSk7XHJcblxyXG5rZXlib2FyZC5rZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gIGtleS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBjdXJLZXkgPSBrZXkudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhbGlkYXRlS2V5KGN1cktleSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2V0TmV4dFF1ZXN0aW9uKCkge1xyXG4gIGlmIChwYXN0UXVlc3Rpb25zLmxlbmd0aCA9PT0gcWFQYWlycy5sZW5ndGgpIHtcclxuICAgIHBhc3RRdWVzdGlvbnMgPSBbXTtcclxuICB9XHJcbiAgbGV0IG51bTtcclxuICBkbyB7XHJcbiAgICBudW0gPSBnZXRSYW5kb21OdW0oKTtcclxuICB9IHdoaWxlIChwYXN0UXVlc3Rpb25zLmluY2x1ZGVzKG51bSkpO1xyXG4gIHBhc3RRdWVzdGlvbnMucHVzaChudW0pO1xyXG4gIGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gbnVtO1xyXG4gIHF1aXoucmVzZXQoKTtcclxuICBnYWxsb3cucmVzZXRQYXJ0cygpO1xyXG4gIGtleWJvYXJkLnJlc2V0QnV0dG9ucygpO1xyXG4gIGN1ckluY29ycmVjdEd1ZXNzZXMgPSAwO1xyXG4gIGd1ZXNzZXNMYWJlbC50ZXh0Q29udGVudCA9IGBJbmNvcnJlY3QgZ3Vlc3NlczogJHtjdXJJbmNvcnJlY3RHdWVzc2VzfSAvIDZgO1xyXG4gIGRpc2FibGVkS2V5cyA9IFtdO1xyXG4gIGFuc3dlciA9IFsuLi5xYVBhaXJzW251bV0uYW5zd2VyXTtcclxuICBxdWl6LnNldChudW0pO1xyXG4gIG1vZGFsLmNsb3NlKCk7XHJcbiAgbW9kYWwuY29udGFpbmVyLnJlbW92ZSgpXHJcbiAgbW9kYWwuYmFja2dyb3VuZC5yZW1vdmUoKVxyXG4gIG1vZGFsLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNldE5leHRRdWVzdGlvbilcclxuICBtb2RhbElzT3BlbiA9IGZhbHNlO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==