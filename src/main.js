import './main.css';
import { createEl } from './shared/create-el';
import { qaPairs } from './shared/qa-pairs';
import { Gallows } from './widgets/gallows/Gallows';
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

const quiz = new Quiz(num);
let curIncorrectGuesses = 0;
main.append(gallow.container, quizPartWrapper);

const guessesLabel = createEl('p', 'quesses-count');
guessesLabel.textContent = `Incorrect guesses: ${curIncorrectGuesses} / 6`;

quizPartWrapper.append(quiz.container, guessesLabel);

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
  quiz.set(num);
}
