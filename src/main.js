import './main.css';
import { createEl } from './shared/create-el';
import { qaPairs } from './shared/qa-pairs';
import { Gallows } from './widgets/gallows/Gallows';
import { Keyboard } from './widgets/keyboard/Keyboard';
import { Quiz } from './widgets/quiz/Quiz';

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

let num = getRandomNum();
pastQuestions.push(num);
let answer = [...qaPairs[num].answer];
let disabledKeys = [];

const quiz = new Quiz(num);
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

export function validateKey(key) {
  if (alphabet.includes(key) && !disabledKeys.includes(key)) {
    if (answer.indexOf(key) !== -1) {
      openAllLetters(key);
    } else {
      curIncorrectGuesses += 1;
      guessesLabel.textContent = `Incorrect guesses: ${curIncorrectGuesses} / 6`;
      gallow.addPart();
    }
    disableButton(key);
  }
}

window.addEventListener('keydown', (event) => {
  let curKey = event.code.substring(3).toLowerCase();
  validateKey(curKey)
});

keyboard.keys.forEach((key)=> {
  key.addEventListener('click', ()=>{
    let curKey = key.textContent.toLowerCase()
    validateKey(curKey)
  })
})

function setNextQuestion() {
  if (pastQuestions.length === qaPairs.length) {
    pastQuestions = [];
  }
  let num;
  do {
    num = getRandomNum();
  } while (pastQuestions.includes(num));
  pastQuestions.push(num);
  quiz.reset();
  answer = [...qaPairs[num].answer];
  quiz.set(num);
}
