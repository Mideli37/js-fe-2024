import './main.css';
import { createEl } from './shared/create-el';
import { Gallows } from './widgets/gallows/Gallows';
import { Quiz } from './widgets/quiz/Quiz';

const main = createEl('main', 'main');
const gallow = new Gallows();
document.body.append(main);

const quizPartWrapper = createEl('div', 'quiz-part-wrapper');

const quiz = new Quiz(0);
main.append(gallow.container, quizPartWrapper);
quizPartWrapper.append(quiz.container);

quiz.reset();

quiz.set(2);

quiz.openLetter(0);
quiz.openLetter(1);
quiz.openLetter(2);
quiz.openLetter(3);
quiz.openLetter(4);
quiz.openLetter(6);

gallow.addPart();
