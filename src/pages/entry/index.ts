import { LoginForm } from '@/components/login-form/Login-form';
import type { LoginInfo } from '@/components/login-form/login-info.schema';
import { createElement } from '@/helpers/create-element';

export class EntryPage {
  constructor(private onLogin: (loginInfo: LoginInfo) => void) {
    this.init();
  }

  private container = createElement('div', { className: 'w-full h-full flex justify-center items-center' });

  public init(): void {
    const form = new LoginForm(this.onLogin.bind(this));
    this.container.append(form.getContainer());
  }

  public getContainer(): HTMLDivElement {
    return this.container;
  }
}
