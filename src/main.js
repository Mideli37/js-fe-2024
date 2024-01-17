import './main.css';
import { createEl } from './shared/create-el';
import { qaPairs } from './shared/qa-pairs';
import { Gallows } from './widgets/gallows/Gallows';
import { Keyboard } from './widgets/keyboard/Keyboard';
import { Modal } from './widgets/modal/Modal';
import { Quiz } from './widgets/quiz/Quiz';

const main = createEl('main', 'main');
const quizPartWrapper = createEl('div', 'quiz-part-wrapper');
const gallows = new Gallows();
const keyboard = new Keyboard();
document.body.append(main);
main.append(gallows.container, quizPartWrapper);

function getRandomNum() {
  const num = Math.floor(Math.random() * qaPairs.length);
  return num;
}

let currentQuestionIndex = getRandomNum();
let pastQuestions = [currentQuestionIndex];
let answer = qaPairs[currentQuestionIndex].answer.split('');
console.log(qaPairs[currentQuestionIndex].answer);
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

let modal;
let isModalOpen = false;

function resetModal() {
  modal.close();
  modal.container.remove();
  modal.background.remove();
  isModalOpen = false;
}

function resetKeyboard() {
  disabledKeys = [];
  keyboard.resetButtons();
}

function setNextQuestion() {
  if (pastQuestions.length === qaPairs.length) {
    pastQuestions = [currentQuestionIndex];
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
  console.log(qaPairs[num].answer);
  gallows.resetParts();
  quiz.reset();
  resetKeyboard();
  resetModal();
  modal.button.removeEventListener('click', setNextQuestion);
  quiz.set(num);
}

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

export function validateKey(key) {
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
