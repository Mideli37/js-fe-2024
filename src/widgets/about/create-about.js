import { createEl } from '../../shared/createEl';
import './about.css';
import ab1 from './assets/about-1.jpg';
import ab2 from './assets/about-2.jpg';
import ab3 from './assets/about-3.jpg';
import ab4 from './assets/about-4.jpg';

export function createAbout() {
  const section = createEl('section', 'about-section section');
  const heading = createEl('h2', 'about-heading heading');
  heading.append(
    'Resource is ',
    createEl('span', 'cursive', 'the perfect and cozy place'),
    ' where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.',
  );
  const imageContainer = createEl('div', 'image-container');
  let imgs = [ab1, ab2, ab3, ab4];
  imgs = imgs.map((src) => {
    const wrapper = createEl('div', 'img-wrapper');
    imageContainer.append(wrapper);
    const img = createEl('img', 'image');
    img.alt = 'photo in cozy cafe';
    img.src = src;
    wrapper.append(img);
    return wrapper;
  });

  section.append(heading, imageContainer);

  return section;
}
