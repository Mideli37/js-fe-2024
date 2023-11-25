import { createEl } from '../shared/createEl'
import { createHeader } from '../widgets/header/create-header'
import './style.css'

const container = createEl('div', 'page-container')
document.body.append(container)
container.append(createHeader())