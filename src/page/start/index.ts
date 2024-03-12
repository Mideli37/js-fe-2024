import { LogoutButton } from '@/components/login-form/Logout-button';
import { createElement } from '@/helpers/create-element';

type Props = {
  onLogout: () => void;
};

export class StartPage {
  private onLogout: () => void;

  constructor({ onLogout }: Props) {
    this.onLogout = onLogout;
  }

  private container = createElement('div', { className: 'flex justify-center items-center' });

  private build(): void {
    const logoutButton = new LogoutButton(this.onLogout);
    this.container.append(logoutButton.getElement());
  }

  public init(): void {
    this.build();
    document.body.replaceChildren(this.container);
  }
}
