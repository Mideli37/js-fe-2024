import { Field } from "./widgets/field/Field";
import schemes from './shared/nonorgams.json'

console.log(schemes)
console.log(schemes.nonograms[0])
const currentScheme = schemes.nonograms[0]
const field = new Field(currentScheme.scheme)

document.body.append(field.container)