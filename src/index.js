import { getClues } from './shared/get-clues';
import schemes from './shared/nonorgams.json';
import { Clue } from './widgets/clues/Clues';
import { Field } from './widgets/field/Field';

console.log(schemes.nonograms[0]);
const currentScheme = schemes.nonograms[0];
const field = new Field(currentScheme.scheme);

document.body.append(field.container);

const clues = getClues(currentScheme.scheme);
console.log(clues);

const topClue = new Clue(clues.top, 'top');
const leftClue = new Clue(clues.left, 'left');

document.body.append(topClue.container, leftClue.container);
