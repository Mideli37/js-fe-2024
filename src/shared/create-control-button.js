import { createEl } from './create-el';

export function createControlButton(textContent, callback) {
  const button = createEl('button', 'control-button', textContent);
  button.onclick = callback;
  return button;
}
