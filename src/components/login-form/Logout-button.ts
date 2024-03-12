import { createElement } from '@/helpers/create-element';
import { removeLSKey } from '@/services/Local-storage.service';

export class LogoutButton {
  private button = createElement('button', {
    textContent: 'Log Out',
    className: 'button',
  });

  constructor(private onLogout: () => void) {
    this.button.addEventListener('click', () => {
      this.onLogout();
      removeLSKey('loginInfo');
    });
  }

  public getElement(): HTMLButtonElement {
    return this.button;
  }
}
