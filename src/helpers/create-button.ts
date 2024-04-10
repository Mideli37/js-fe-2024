import { createElement } from './create-element';

export function createButton(text: string): HTMLButtonElement {
  return createElement('button', { className: 'small-button', textContent: text });
}
