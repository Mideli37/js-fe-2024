import { LoginForm } from '@/components/login-form/Login-form';
import { createElement } from '@/helpers/create-element';

type Props = {
  onSuccessfulLogin: () => void;
};

export class EntryPage {
  private onSuccessfulLogin: () => void;

  constructor({ onSuccessfulLogin }: Props) {
    this.onSuccessfulLogin = onSuccessfulLogin;
  }

  private container = createElement('div', { className: 'flex justify-center items-center' });

  private build(): void {
    const form = new LoginForm(this.onSuccessfulLogin);
    this.container.append(form.getContainer());
  }

  public init(): void {
    this.build();
    document.body.replaceChildren(this.container);
  }
}
