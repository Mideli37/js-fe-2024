import schemes from './shared/nonorgams.json';
import { Nonogram } from './widgets/nonogram/nonogram';

console.log(schemes.nonograms[0]);
const currentScheme = schemes.nonograms[0];
const nonogram = new Nonogram(currentScheme.scheme);

document.body.append(nonogram.container);
