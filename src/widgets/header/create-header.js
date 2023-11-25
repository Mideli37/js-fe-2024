import { createEl } from "../../shared/createEl";
import logoImage from './assets/logo.svg'
import cupImage from './assets/coffee-cup.svg'
import './header.css'

export function createHeader() {
  const header = createEl('header', 'header')
  const container = createEl('div', 'header-container')
  const logo = createEl('img', 'header-logo')
  logo.alt = 'coffee house logo'
  logo.src = logoImage
  const nav = createEl('nav', 'nav')
  const navUl = createEl('ul', 'nav-ul')
  const navItems = ['Favorite coffee', 'About', 'Mobile app', 'Contact us']
  navItems.map((item) => {
    const newItem = createEl('li', 'nav-item')
    navUl.append(newItem)
    const newItemLink = createEl('a', 'nav-item-link', item)
    newItem.append(newItemLink)
    newItemLink.href = `#${item.replaceAll(' ', '-').toLowerCase()}`
  })
  const menuLink = createEl('a', 'menu-link')
  const menuLinkText = createEl('span', 'menu-link-text', 'Menu')
  const menuLinkImage = createEl('img', 'menu-link-image')
  menuLinkImage.alt = 'cup icon'
  menuLinkImage.src = cupImage

  header.append(container)
  container.append(logo, nav, menuLink)
  nav.append(navUl)
  menuLink.append(menuLinkText, menuLinkImage)
  return header
}