import './main.css';
import { Gallows } from './widgets/gallows/Gallows';
import { Quiz } from './widgets/quiz/Quiz';

const gallow = new Gallows();
document.body.append(gallow.container);

const quiz = new Quiz(0);
document.body.append(quiz.container);

quiz.reset();

quiz.set(2);

quiz.openLetter(0);
quiz.openLetter(1);
quiz.openLetter(2);
quiz.openLetter(3);
quiz.openLetter(4);
quiz.openLetter(6);