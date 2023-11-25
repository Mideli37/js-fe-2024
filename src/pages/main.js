import { createEl } from '../shared/createEl'
import { createHeader } from '../widgets/header/create-header'
import { createHero } from '../widgets/hero/create-hero'
import './style.css'

const container = createEl('div', 'page-container')
document.body.append(container)
container.append(createHeader(), createHero())