import { createElement } from '@/helpers/create-element';
import { LoginInputComponent } from './Login-input-component';

export class LoginForm {
  // constructor() {}

  private container = createElement('div', { className: 'bg-[#e9cec7] p-5 rounded-md border-red-900 border' });

  private build(): void {
    const form = createElement('form', { className: 'flex flex-col gap-2 w-[350px]' });
    const loginButton = createElement('input', {
      disabled: true,
      type: 'submit',
      value: 'Login',
      className: 'button',
    });

    const validInputs = { inputLogin: false, inputPassword: false };
    function setButtonState(): void {
      loginButton.disabled = !Object.values(validInputs).every((value) => value);
    }
    const login = new LoginInputComponent({ text: 'Login:' }, { id: 'login', type: 'text' }, (value) => {
      validInputs.inputLogin = value;
      setButtonState();
    });
    const password = new LoginInputComponent({ text: 'Password:' }, { id: 'surname', type: 'password' }, (value) => {
      validInputs.inputPassword = value;
      setButtonState();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // const formData = new FormData(form);
      // this.onSuccessfulLogin(loginInfoSchema.parse(Object.fromEntries(formData.entries())));
    });
    this.container.append(form);
    form.append(...login.getElements(), ...password.getElements(), loginButton);
  }

  public getContainer(): HTMLDivElement {
    this.build();
    return this.container;
  }
}
