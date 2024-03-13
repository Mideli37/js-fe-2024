import { LoginForm } from '@/components/login-form/Login-form';
import { createElement } from '@/helpers/create-element';
import type { LoginInfo } from '@/services/login-info.schema';

type Props = {
  onSuccessfulLogin: (userName: LoginInfo) => void;
};

export class EntryPage {
  private onSuccessfulLogin: Props['onSuccessfulLogin'];

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
