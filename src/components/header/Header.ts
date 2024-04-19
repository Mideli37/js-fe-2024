import { createElement } from '@/helpers/create-element';

export class Header {
  constructor(
    private userLogin: string,
    private onLogout: () => void
  ) {
    this.build();
  }

  private container = createElement('div', { className: 'w-full flex flex-row justify-between items-center' });

  private build(): void {
    const userName = createElement('span', { textContent: `User: ${this.userLogin}` });
    const appName = createElement('span', { textContent: 'Fun Chat' });
    const buttonWrapper = createElement('div', { className: 'flex gap-2' });
    const aboutButton = createElement('button', { textContent: 'About', className: 'button' });
    const logoutButton = createElement('button', { textContent: 'LogOut', className: 'button' });
    logoutButton.onclick = this.onLogout;
    buttonWrapper.append(aboutButton, logoutButton);
    this.container.append(userName, appName, buttonWrapper);
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }
}
