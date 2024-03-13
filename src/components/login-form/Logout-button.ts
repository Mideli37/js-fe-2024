import { createElement } from '@/helpers/create-element';
import { removeLSKey } from '@/services/Local-storage.service';

export class LogoutButton {
  private button = createElement('button', {
    textContent: 'Log Out',
    className: 'button',
  });

  private buttonWrapper = createElement('div', { className: 'w-full bg-[#d8bfb9] flex justify-end p-3' });

  constructor(private onLogout: () => void) {
    this.button.addEventListener('click', () => {
      this.onLogout();
      removeLSKey('loginInfo');
    });
    this.buttonWrapper.append(this.button);
  }

  public getButtonWrapper(): HTMLDivElement {
    return this.buttonWrapper;
  }
}
