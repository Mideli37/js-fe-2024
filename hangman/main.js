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
      const imgContainer = createEl('div', el[0]);
      const img = createEl('img');
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
      const keyEl = createEl('button', keyboard_module.key, key.toUpperCase());
      this.container.append(keyEl);
      return keyEl;
    });
  }

  disableButton(key) {
    const keyToDisable = this.keys.find((el) => {
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
        key.disabled = false
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
    word.textContent = `Secret word - ${answer.toUpperCase()}`;
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
      const letterEl = createEl('div', quiz_module.letter)
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
const quizPartWrapper = createEl('div', 'quiz-part-wrapper');
const gallows = new Gallows();
const keyboard = new Keyboard();
document.body.append(main);
main.append(gallows.container, quizPartWrapper);

function getRandomNum() {
  const num = Math.floor(Math.random() * qaPairs.length);
  console.log(num);
  return num;
}

let currentQuestionIndex = getRandomNum();
let pastQuestions = [currentQuestionIndex];
let answer = qaPairs[currentQuestionIndex].answer.split('');
let disabledKeys = [];
const quiz = new Quiz(currentQuestionIndex);
let incorrectGuessesCounter = 0;

const guessesLabel = createEl('p', 'quesses-count');
guessesLabel.textContent = `Incorrect guesses: ${incorrectGuessesCounter} / 6`;

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

function resetModal() {
  modal.close();
  modal.container.remove();
  modal.background.remove();
  modal.button.removeEventListener('click', setNextQuestion);
  isModalOpen = false;
}

function resetKeyboard() {
  disabledKeys = [];
  keyboard.resetButtons();
}

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
  incorrectGuessesCounter = 0;
  guessesLabel.textContent = `Incorrect guesses: ${incorrectGuessesCounter} / 6`;
  answer = [...qaPairs[num].answer];
  gallows.resetParts();
  quiz.reset();
  resetKeyboard();
  resetModal();
  quiz.set(num);
}

let modal;
let isModalOpen = false;

function showModal() {
  let isGameFinished = false;
  if (incorrectGuessesCounter === 6) {
    modal = new Modal(qaPairs[currentQuestionIndex].answer);
    isGameFinished = true;
  } else if (answer.every((letter) => letter === null)) {
    modal = new Modal(qaPairs[currentQuestionIndex].answer, true);
    isGameFinished = true;
  }
  if (isGameFinished) {
    document.body.append(modal.background, modal.container);
    modal.open();
    isModalOpen = true;
    modal.button.addEventListener('click', setNextQuestion);
  }
}

function validateKey(key) {
  if (alphabet.includes(key) && !disabledKeys.includes(key)) {
    if (answer.indexOf(key) !== -1) {
      openAllLetters(key);
    } else {
      incorrectGuessesCounter += 1;
      guessesLabel.textContent = `Incorrect guesses: ${incorrectGuessesCounter} / 6`;
      gallows.addPart();
    }
    disableButton(key);
    showModal();
  }
}

window.addEventListener('keydown', (event) => {
  if (!isModalOpen) {
    const currentKey = event.code.substring(3).toLowerCase();
    validateKey(currentKey);
  }
});

keyboard.keys.forEach((key) => {
  key.addEventListener('click', () => {
    const currentKey = key.textContent.toLowerCase();
    validateKey(currentKey);
  });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ25EQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbkNBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3QkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy9zaGFyZWQvY3JlYXRlLWVsLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvc2hhcmVkL3FhLXBhaXJzLmpzIiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9nYWxsb3dzL2dhbGxvd3MubW9kdWxlLmNzcz81ZmQ5Iiwid2VicGFjazovL21pZGVsaTM3LWpzZmUyMDIzcTQvLi9zcmMvd2lkZ2V0cy9nYWxsb3dzL0dhbGxvd3MuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL2tleWJvYXJkL2tleWJvYXJkLm1vZHVsZS5jc3M/ZDAyNSIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMva2V5Ym9hcmQvS2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL21vZGFsL21vZGFsLm1vZHVsZS5jc3M/MDIxZiIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL3dpZGdldHMvbW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL3F1aXovcXVpei5tb2R1bGUuY3NzPzkwNjEiLCJ3ZWJwYWNrOi8vbWlkZWxpMzctanNmZTIwMjNxNC8uL3NyYy93aWRnZXRzL3F1aXovUXVpei5qcyIsIndlYnBhY2s6Ly9taWRlbGkzNy1qc2ZlMjAyM3E0Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsKHRhZywgY2xhc3NOYW1lLCB0ZXh0KSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gIH1cclxuICBpZiAodGV4dCkge1xyXG4gICAgZWwuYXBwZW5kKHRleHQpO1xyXG4gIH1cclxuICByZXR1cm4gZWw7XHJcbn0iLCJleHBvcnQgY29uc3QgcWFQYWlycyA9IFtcclxuICB7IGlkOiAxLCBxdWVzdGlvbjogJ0EgcG9wdWxhciBzbmFjayBjb25zaXN0aW5nIG9mIGEgY29va2VkIHNhdXNhZ2Ugc2VydmVkIGluIGEgc2xpY2VkIGJ1bicsIGFuc3dlcjogJ2hvdGRvZycgfSxcclxuICB7IGlkOiAyLCBxdWVzdGlvbjogJ1RoZSBhbW91bnQgb2YgbW9uZXkgeW91IHBheSB0byBlbnRlciBhIHBsYWNlIG9yIGV2ZW50JywgYW5zd2VyOiAnYWRtaXNzaW9uJyB9LFxyXG4gIHsgaWQ6IDMsIHF1ZXN0aW9uOiAnQSBzcG9va3kgYXR0cmFjdGlvbiBkZXNpZ25lZCB0byBzY2FyZSB2aXNpdG9ycyB3aXRoIHZhcmlvdXMgc3BlY2lhbCBlZmZlY3RzJywgYW5zd2VyOiAnaGF1bnRlZGhvdXNlJyB9LFxyXG4gIHsgaWQ6IDQsIHF1ZXN0aW9uOiAnQSBzbWFsbCBzdHJ1Y3R1cmUgb3Igc3RhbmQgd2hlcmUgZ29vZHMgb3Igc2VydmljZXMgYXJlIHNvbGQnLCBhbnN3ZXI6ICdraW9zaycgfSxcclxuICB7IGlkOiA1LCBxdWVzdGlvbjogJ0Egc21hbGwgaXRlbSB0aGF0IGlzIGtlcHQgYXMgYSByZW1pbmRlciBvZiBhIHBsYWNlJywgYW5zd2VyOiAnc291dmVuaXInIH0sXHJcbiAgeyBpZDogNiwgcXVlc3Rpb246ICdBIHNtYWxsLCByb3VuZCBvYmplY3QgdXNlZCBhcyBwYXltZW50IGZvciByaWRlcyBvciBnYW1lcycsIGFuc3dlcjogJ3Rva2VuJyB9LFxyXG4gIHsgaWQ6IDcsIHF1ZXN0aW9uOiAnQSBoaWdoLXNwZWVkLCBsb29waW5nIHJpZGUgdGhhdCBwcm92aWRlcyBleGNpdGVtZW50IGFuZCBhZHJlbmFsaW5lIHJ1c2hlcycsIGFuc3dlcjogJ3JvbGxlcmNvYXN0ZXInIH0sXHJcbiAgeyBpZDogOCwgcXVlc3Rpb246ICdBIHJvdGF0aW5nIHBsYXRmb3JtIHdpdGggc2VhdHMgZm9yIHBlb3BsZSB0byByaWRlIG9uJywgYW5zd2VyOiAnY2Fyb3VzZWwnIH0sXHJcbiAgeyBpZDogOSwgcXVlc3Rpb246ICdBIGZhbW91cyBhbmQgcG9wdWxhciBhbXVzZW1lbnQgcGFyayBsb2NhdGVkIGluIENhbGlmb3JuaWEnLCBhbnN3ZXI6ICdkaXNuZXlsYW5kJyB9LFxyXG4gIHsgaWQ6IDEwLCBxdWVzdGlvbjogJ0Egc21hbGwgcGllY2Ugb2YgcGFwZXIgdGhhdCBhbGxvd3MgZW50cnkgdG8gYSBwYXJrIG9yIGF0dHJhY3Rpb24nLCBhbnN3ZXI6ICd0aWNrZXQnIH0sXHJcbiAgeyBpZDogMTEsIHF1ZXN0aW9uOiAnQSBwZXJzb24gd2hvIGNsYWltcyB0byBwcmVkaWN0IHRoZSBmdXR1cmUgYW5kIGFuc3dlciBxdWVzdGlvbnMgYWJvdXQgeW91ciBsaWZlJywgYW5zd2VyOiAnZm9ydHVuZXRlbGxlcicgfSxcclxuICB7IGlkOiAxMiwgcXVlc3Rpb246ICdJdGVtcyB3aGljaCBjYW4gYmUgd29uIGJ5IHBsYXlpbmcgZ2FtZXMgb3IgcGFydGljaXBhdGluZyBpbiBhY3Rpdml0aWVzJywgYW5zd2VyOiAncHJpemVzJyB9LFxyXG4gIHsgaWQ6IDEzLCBxdWVzdGlvbjogJ0EgbGFyZ2UgYW11c2VtZW50IHBhcmsgdGhhdCBmb2xsb3dzIGEgc3BlY2lmaWMgY29uY2VwdCcsIGFuc3dlcjogJ3RoZW1lcGFyaycgfSxcclxuICB7IGlkOiAxNCwgcXVlc3Rpb246ICdBIHNwZWNpYWwgcGFzcyB0aGF0IGFsbG93cyB5b3UgdG8gc2tpcCBsb25nIGxpbmVzIGFuZCBnZXQgb24gcmlkZXMgZmFzdGVyJywgYW5zd2VyOiAnZmFzdHBhc3MnIH0sXHJcbl07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZ2FsbG93Q29udGFpbmVyXCI6XCJjczhRZmNIellOakFpdUFpbnVpSFwiLFwiZ2FsbG93UGlsbG93XCI6XCJWMDFGamIzdldjVEFXbnBJY3F4RFwiLFwiaGVhZFwiOlwiRklySllfX3dFQlltbWc5X19ESlhcIixcImJvZHlcIjpcImZLZkdXSFBYNzU2X2JMS3c3M01sXCIsXCJyaWdodEFybVwiOlwiYkVuN1FTUGxMaWFSZllRQTREMWpcIixcImxlZnRBcm1cIjpcInpTV0VPU0lpdlhfRnNnVWl6XzdUXCIsXCJsZWZ0TGVnXCI6XCJGbkRCWU5uMzFYWjNYZVg2QmIxZ1wiLFwicmlnaHRMZWdcIjpcIk1ZM2lIaXNvWmE0R3dHb1pveWk5XCIsXCJoaWRkZW5cIjpcIm1DN0xXQnRINm1DTjFqdlFlU1FHXCJ9OyIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZS1lbCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nYWxsb3dzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IGhlYWRJbWcgZnJvbSAnLi9hc3NldHMvaGVhZC5wbmcnO1xyXG5pbXBvcnQgbEFybUltZyBmcm9tICcuL2Fzc2V0cy9oYW5kLW9uZS5wbmcnO1xyXG5pbXBvcnQgckFybUltZyBmcm9tICcuL2Fzc2V0cy9oYW5kLXR3by5wbmcnO1xyXG5pbXBvcnQgYm9keUltZyBmcm9tICcuL2Fzc2V0cy9ib2R5LnBuZyc7XHJcbmltcG9ydCBsTGVnSW1nIGZyb20gJy4vYXNzZXRzL2xlZy1vbmUucG5nJztcclxuaW1wb3J0IHJMZWdJbWcgZnJvbSAnLi9hc3NldHMvbGVnLXR3by5wbmcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbGxvd3Mge1xyXG4gIGNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCBzdHlsZXMuZ2FsbG93Q29udGFpbmVyKTtcclxuICBwYXJ0c0NvdW50ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBwaWxsb3cgPSBjcmVhdGVFbCgnZGl2Jywgc3R5bGVzLmdhbGxvd1BpbGxvdyk7XHJcbiAgICB0aGlzLmJvZHlQYXJ0cyA9IFtcclxuICAgICAgW3N0eWxlcy5oZWFkLCBoZWFkSW1nXSxcclxuICAgICAgW3N0eWxlcy5ib2R5LCBib2R5SW1nXSxcclxuICAgICAgW3N0eWxlcy5sZWZ0QXJtLCBsQXJtSW1nXSxcclxuICAgICAgW3N0eWxlcy5yaWdodEFybSwgckFybUltZ10sXHJcbiAgICAgIFtzdHlsZXMubGVmdExlZywgbExlZ0ltZ10sXHJcbiAgICAgIFtzdHlsZXMucmlnaHRMZWcsIHJMZWdJbWddLFxyXG4gICAgXTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChwaWxsb3cpO1xyXG5cclxuICAgIHRoaXMuYm9keVBhcnRzID0gdGhpcy5ib2R5UGFydHMubWFwKChlbCkgPT4ge1xyXG4gICAgICBjb25zdCBpbWdDb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgZWxbMF0pO1xyXG4gICAgICBjb25zdCBpbWcgPSBjcmVhdGVFbCgnaW1nJyk7XHJcbiAgICAgIGltZy5hbHQgPSAnYm9keSBwYXJ0JztcclxuICAgICAgaW1nLnNyYyA9IGVsWzFdO1xyXG4gICAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMuaGlkZGVuKTtcclxuICAgICAgcGlsbG93LmFwcGVuZChpbWdDb250YWluZXIpO1xyXG4gICAgICBpbWdDb250YWluZXIuYXBwZW5kKGltZyk7XHJcbiAgICAgIHJldHVybiBpbWdDb250YWluZXI7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFBhcnQoKSB7XHJcbiAgICB0aGlzLmJvZHlQYXJ0c1t0aGlzLnBhcnRzQ291bnRdLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLmhpZGRlbik7XHJcbiAgICB0aGlzLnBhcnRzQ291bnQgKz0gMTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGFydHMoKSB7XHJcbiAgICB0aGlzLmJvZHlQYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XHJcbiAgICAgIGlmICghcGFydC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGVzLmhpZGRlbikpIHtcclxuICAgICAgICBwYXJ0LmNsYXNzTGlzdC5hZGQoc3R5bGVzLmhpZGRlbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5wYXJ0c0NvdW50ID0gMDtcclxuICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJrZXlcIjpcImhTdzd5cjBKOU9kdEV4b1V3YzF4XCIsXCJjb250YWluZXJcIjpcIkNrQ2xfZTJYZXNMc3NRS2dkZ2xRXCIsXCJkaXNhYmxlZFwiOlwiS0VXVG5YbnNTMnVFY0NHdnJsWDdcIn07IiwiaW1wb3J0IHsgY3JlYXRlRWwgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlLWVsJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4va2V5Ym9hcmQubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xyXG4gIGtleXMgPSBbLi4uJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6J107XHJcbiAgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsIHN0eWxlLmNvbnRhaW5lcik7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmtleXMgPSB0aGlzLmtleXMubWFwKChrZXkpID0+IHtcclxuICAgICAgY29uc3Qga2V5RWwgPSBjcmVhdGVFbCgnYnV0dG9uJywgc3R5bGUua2V5LCBrZXkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChrZXlFbCk7XHJcbiAgICAgIHJldHVybiBrZXlFbDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUJ1dHRvbihrZXkpIHtcclxuICAgIGNvbnN0IGtleVRvRGlzYWJsZSA9IHRoaXMua2V5cy5maW5kKChlbCkgPT4ge1xyXG4gICAgICBpZiAoZWwudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSA9PT0ga2V5LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChrZXlUb0Rpc2FibGUpIHtcclxuICAgICAga2V5VG9EaXNhYmxlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAga2V5VG9EaXNhYmxlLmNsYXNzTGlzdC5hZGQoc3R5bGUuZGlzYWJsZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRCdXR0b25zKCkge1xyXG4gICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSk9PiB7XHJcbiAgICAgIGlmIChrZXkuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmRpc2FibGVkKSkge1xyXG4gICAgICAgIGtleS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmRpc2FibGVkKVxyXG4gICAgICAgIGtleS5kaXNhYmxlZCA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGFpbmVyXCI6XCJVYXZfS0VuUWc2UVF2NFJZX0gwSVwiLFwiYmFja2dyb3VuZFwiOlwiRDNYUXJoams3NkNKNzdONFJhX1lcIixcIm9wZW5cIjpcIkY2UDA1V3Z2Wl9sbEhXU1dfUVdYXCIsXCJoZWFkaW5nXCI6XCJvaVN0aG8wbW5nVVVXbGQ1QUxMalwiLFwiYnV0dG9uXCI6XCJ4U1VCd0N4dEkxUEx4R21OcDhZalwifTsiLCJpbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtZWwnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9tb2RhbC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgY29udGFpbmVyID0gY3JlYXRlRWwoJ2RpdicsIHN0eWxlLmNvbnRhaW5lcik7XHJcbiAgYmFja2dyb3VuZCA9IGNyZWF0ZUVsKCdkaXYnLCBzdHlsZS5iYWNrZ3JvdW5kKTtcclxuICBjb25zdHJ1Y3RvcihhbnN3ZXIsIHdpbikge1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsKCdoMicsIHN0eWxlLmhlYWRpbmcpO1xyXG4gICAgaWYgKHdpbikge1xyXG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0NvbmdyYXR1bGF0aW9ucyEgWW91IGd1ZXNzZWQgdGhlIHdvcmQhJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnR2FtZSBvdmVyISBUb28gbWFueSBpbmNvcnJlY3QgZ3Vlc3NlcyEnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdvcmQgPSBjcmVhdGVFbCgncCcsIHN0eWxlLndvcmQpO1xyXG4gICAgd29yZC50ZXh0Q29udGVudCA9IGBTZWNyZXQgd29yZCAtICR7YW5zd2VyLnRvVXBwZXJDYXNlKCl9YDtcclxuICAgIHRoaXMuYnV0dG9uID0gY3JlYXRlRWwoJ2J1dHRvbicsIHN0eWxlLmJ1dHRvbiwgJ1BsYXkgQWdhaW4nKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChoZWFkaW5nLCB3b3JkLCB0aGlzLmJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoc3R5bGUub3Blbik7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0eWxlLm9wZW4pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5vcGVuKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUub3Blbik7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicXVpekNvbnRhaWVyXCI6XCJUYTB1Y1NhOTRWb0FMdkF1bDlGYVwiLFwiYW5zd2VyQ29udGFpbmVyXCI6XCJMNDF4Ykh2TXVGX1REU2hoWU9qQlwiLFwicXVlc3Rpb25MYWJlbFwiOlwiSFRIM0NRNFNzSTgzNExXck9uSWRcIixcImxldHRlclwiOlwiSUtCUFJ6TXBvbnp2eTdkYU1DSGVcIixcIm9wZW5cIjpcIk9qOVhYU3Q2T2RQQU5URTIxdENhXCJ9OyIsImltcG9ydCB7IGNyZWF0ZUVsIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jcmVhdGUtZWxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3F1aXoubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgcWFQYWlycyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcWEtcGFpcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWl6IHtcclxuICBjb250YWluZXIgPSBjcmVhdGVFbCgnZGl2Jywgc3R5bGVzLnF1aXpDb250YWllcilcclxuICBhbnN3ZXIgPSBbXVxyXG4gIGNvbnN0cnVjdG9yKGluZGV4KSB7XHJcbiAgICB0aGlzLmFuc3dlckNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCBzdHlsZXMuYW5zd2VyQ29udGFpbmVyKVxyXG4gICAgdGhpcy5xdWVzdGlvbkxhYmVsID0gY3JlYXRlRWwoJ3AnLCBzdHlsZXMucXVlc3Rpb25MYWJlbClcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmFuc3dlckNvbnRhaW5lciwgdGhpcy5xdWVzdGlvbkxhYmVsKVxyXG4gICAgdGhpcy5zZXQoaW5kZXgpXHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuYW5zd2VyQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXHJcbiAgfVxyXG5cclxuICBzZXQoaW5kZXgpIHtcclxuICAgIHRoaXMuYW5zd2VyID0gWy4uLnFhUGFpcnNbaW5kZXhdLmFuc3dlcl1cclxuICAgIHRoaXMucXVlc3Rpb25MYWJlbC50ZXh0Q29udGVudCA9IGBIaW50OiAke3FhUGFpcnNbaW5kZXhdLnF1ZXN0aW9ufWBcclxuICAgIHRoaXMuYnVpbGQoKVxyXG4gIH1cclxuXHJcbiAgYnVpbGQoKSB7XHJcbiAgICB0aGlzLmFuc3dlciA9IHRoaXMuYW5zd2VyLm1hcChsZXR0ZXIgPT4ge1xyXG4gICAgICBjb25zdCBsZXR0ZXJFbCA9IGNyZWF0ZUVsKCdkaXYnLCBzdHlsZXMubGV0dGVyKVxyXG4gICAgICB0aGlzLmFuc3dlckNvbnRhaW5lci5hcHBlbmQobGV0dGVyRWwpXHJcbiAgICAgIHJldHVybiBbbGV0dGVyRWwsIGxldHRlcl1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkxldHRlcihpbmRleCkge1xyXG4gICAgdGhpcy5hbnN3ZXJbaW5kZXhdWzBdLmNsYXNzTGlzdC5hZGQoc3R5bGVzLm9wZW4pXHJcbiAgICB0aGlzLmFuc3dlcltpbmRleF1bMF0udGV4dENvbnRlbnQgPSB0aGlzLmFuc3dlcltpbmRleF1bMV1cclxuICB9XHJcbn0iLCJpbXBvcnQgJy4vbWFpbi5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbCB9IGZyb20gJy4vc2hhcmVkL2NyZWF0ZS1lbCc7XHJcbmltcG9ydCB7IHFhUGFpcnMgfSBmcm9tICcuL3NoYXJlZC9xYS1wYWlycyc7XHJcbmltcG9ydCB7IEdhbGxvd3MgfSBmcm9tICcuL3dpZGdldHMvZ2FsbG93cy9HYWxsb3dzJztcclxuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL3dpZGdldHMva2V5Ym9hcmQvS2V5Ym9hcmQnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4vd2lkZ2V0cy9tb2RhbC9Nb2RhbCc7XHJcbmltcG9ydCB7IFF1aXogfSBmcm9tICcuL3dpZGdldHMvcXVpei9RdWl6JztcclxuXHJcbmNvbnN0IG1haW4gPSBjcmVhdGVFbCgnbWFpbicsICdtYWluJyk7XHJcbmNvbnN0IHF1aXpQYXJ0V3JhcHBlciA9IGNyZWF0ZUVsKCdkaXYnLCAncXVpei1wYXJ0LXdyYXBwZXInKTtcclxuY29uc3QgZ2FsbG93cyA9IG5ldyBHYWxsb3dzKCk7XHJcbmNvbnN0IGtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pO1xyXG5tYWluLmFwcGVuZChnYWxsb3dzLmNvbnRhaW5lciwgcXVpelBhcnRXcmFwcGVyKTtcclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbU51bSgpIHtcclxuICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxYVBhaXJzLmxlbmd0aCk7XHJcbiAgY29uc29sZS5sb2cobnVtKTtcclxuICByZXR1cm4gbnVtO1xyXG59XHJcblxyXG5sZXQgY3VycmVudFF1ZXN0aW9uSW5kZXggPSBnZXRSYW5kb21OdW0oKTtcclxubGV0IHBhc3RRdWVzdGlvbnMgPSBbY3VycmVudFF1ZXN0aW9uSW5kZXhdO1xyXG5sZXQgYW5zd2VyID0gcWFQYWlyc1tjdXJyZW50UXVlc3Rpb25JbmRleF0uYW5zd2VyLnNwbGl0KCcnKTtcclxubGV0IGRpc2FibGVkS2V5cyA9IFtdO1xyXG5jb25zdCBxdWl6ID0gbmV3IFF1aXooY3VycmVudFF1ZXN0aW9uSW5kZXgpO1xyXG5sZXQgaW5jb3JyZWN0R3Vlc3Nlc0NvdW50ZXIgPSAwO1xyXG5cclxuY29uc3QgZ3Vlc3Nlc0xhYmVsID0gY3JlYXRlRWwoJ3AnLCAncXVlc3Nlcy1jb3VudCcpO1xyXG5ndWVzc2VzTGFiZWwudGV4dENvbnRlbnQgPSBgSW5jb3JyZWN0IGd1ZXNzZXM6ICR7aW5jb3JyZWN0R3Vlc3Nlc0NvdW50ZXJ9IC8gNmA7XHJcblxyXG5xdWl6UGFydFdyYXBwZXIuYXBwZW5kKHF1aXouY29udGFpbmVyLCBndWVzc2VzTGFiZWwsIGtleWJvYXJkLmNvbnRhaW5lcik7XHJcblxyXG5jb25zdCBhbHBoYWJldCA9IFsuLi4nYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonXTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5BbGxMZXR0ZXJzKGxldHRlcikge1xyXG4gIGxldCBpbmRleCA9IGFuc3dlci5pbmRleE9mKGxldHRlcik7XHJcbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgcXVpei5vcGVuTGV0dGVyKGluZGV4KTtcclxuICAgIGFuc3dlcltpbmRleF0gPSBudWxsO1xyXG4gICAgaW5kZXggPSBhbnN3ZXIuaW5kZXhPZihsZXR0ZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbihrZXkpIHtcclxuICBkaXNhYmxlZEtleXMucHVzaChrZXkpO1xyXG4gIGtleWJvYXJkLmRpc2FibGVCdXR0b24oa2V5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRNb2RhbCgpIHtcclxuICBtb2RhbC5jbG9zZSgpO1xyXG4gIG1vZGFsLmNvbnRhaW5lci5yZW1vdmUoKTtcclxuICBtb2RhbC5iYWNrZ3JvdW5kLnJlbW92ZSgpO1xyXG4gIG1vZGFsLmJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNldE5leHRRdWVzdGlvbik7XHJcbiAgaXNNb2RhbE9wZW4gPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRLZXlib2FyZCgpIHtcclxuICBkaXNhYmxlZEtleXMgPSBbXTtcclxuICBrZXlib2FyZC5yZXNldEJ1dHRvbnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TmV4dFF1ZXN0aW9uKCkge1xyXG4gIGlmIChwYXN0UXVlc3Rpb25zLmxlbmd0aCA9PT0gcWFQYWlycy5sZW5ndGgpIHtcclxuICAgIHBhc3RRdWVzdGlvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIGxldCBudW07XHJcblxyXG4gIGRvIHtcclxuICAgIG51bSA9IGdldFJhbmRvbU51bSgpO1xyXG4gIH0gd2hpbGUgKHBhc3RRdWVzdGlvbnMuaW5jbHVkZXMobnVtKSk7XHJcblxyXG4gIHBhc3RRdWVzdGlvbnMucHVzaChudW0pO1xyXG4gIGN1cnJlbnRRdWVzdGlvbkluZGV4ID0gbnVtO1xyXG4gIGluY29ycmVjdEd1ZXNzZXNDb3VudGVyID0gMDtcclxuICBndWVzc2VzTGFiZWwudGV4dENvbnRlbnQgPSBgSW5jb3JyZWN0IGd1ZXNzZXM6ICR7aW5jb3JyZWN0R3Vlc3Nlc0NvdW50ZXJ9IC8gNmA7XHJcbiAgYW5zd2VyID0gWy4uLnFhUGFpcnNbbnVtXS5hbnN3ZXJdO1xyXG4gIGdhbGxvd3MucmVzZXRQYXJ0cygpO1xyXG4gIHF1aXoucmVzZXQoKTtcclxuICByZXNldEtleWJvYXJkKCk7XHJcbiAgcmVzZXRNb2RhbCgpO1xyXG4gIHF1aXouc2V0KG51bSk7XHJcbn1cclxuXHJcbmxldCBtb2RhbDtcclxubGV0IGlzTW9kYWxPcGVuID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzaG93TW9kYWwoKSB7XHJcbiAgbGV0IGlzR2FtZUZpbmlzaGVkID0gZmFsc2U7XHJcbiAgaWYgKGluY29ycmVjdEd1ZXNzZXNDb3VudGVyID09PSA2KSB7XHJcbiAgICBtb2RhbCA9IG5ldyBNb2RhbChxYVBhaXJzW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5hbnN3ZXIpO1xyXG4gICAgaXNHYW1lRmluaXNoZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAoYW5zd2VyLmV2ZXJ5KChsZXR0ZXIpID0+IGxldHRlciA9PT0gbnVsbCkpIHtcclxuICAgIG1vZGFsID0gbmV3IE1vZGFsKHFhUGFpcnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmFuc3dlciwgdHJ1ZSk7XHJcbiAgICBpc0dhbWVGaW5pc2hlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGlmIChpc0dhbWVGaW5pc2hlZCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobW9kYWwuYmFja2dyb3VuZCwgbW9kYWwuY29udGFpbmVyKTtcclxuICAgIG1vZGFsLm9wZW4oKTtcclxuICAgIGlzTW9kYWxPcGVuID0gdHJ1ZTtcclxuICAgIG1vZGFsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldE5leHRRdWVzdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVLZXkoa2V5KSB7XHJcbiAgaWYgKGFscGhhYmV0LmluY2x1ZGVzKGtleSkgJiYgIWRpc2FibGVkS2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICBpZiAoYW5zd2VyLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgb3BlbkFsbExldHRlcnMoa2V5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluY29ycmVjdEd1ZXNzZXNDb3VudGVyICs9IDE7XHJcbiAgICAgIGd1ZXNzZXNMYWJlbC50ZXh0Q29udGVudCA9IGBJbmNvcnJlY3QgZ3Vlc3NlczogJHtpbmNvcnJlY3RHdWVzc2VzQ291bnRlcn0gLyA2YDtcclxuICAgICAgZ2FsbG93cy5hZGRQYXJ0KCk7XHJcbiAgICB9XHJcbiAgICBkaXNhYmxlQnV0dG9uKGtleSk7XHJcbiAgICBzaG93TW9kYWwoKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKCFpc01vZGFsT3Blbikge1xyXG4gICAgY29uc3QgY3VycmVudEtleSA9IGV2ZW50LmNvZGUuc3Vic3RyaW5nKDMpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YWxpZGF0ZUtleShjdXJyZW50S2V5KTtcclxuICB9XHJcbn0pO1xyXG5cclxua2V5Ym9hcmQua2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICBrZXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50S2V5ID0ga2V5LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YWxpZGF0ZUtleShjdXJyZW50S2V5KTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==