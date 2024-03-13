import { createElement } from '@/helpers/create-element';
import { InputComponent } from './Input-component';
import { loginInfoSchema, type LoginInfo } from '@/services/login-info.schema';

export class LoginForm {
  constructor(private onSuccessfulLogin: (userName: LoginInfo) => void) {}

  private container = createElement('div', { className: 'bg-[#e9cec7] p-5 rounded-md border-red-900 border' });

  private build(): void {
    const form = createElement('form', { className: 'flex flex-col gap-2 w-[350px]' });
    const loginButton = createElement('input', {
      disabled: true,
      type: 'submit',
      value: 'Login',
      className: 'button',
    });

    const validInputs = { inputFirstName: false, inputLastName: false };
    function setButtonState(): void {
      loginButton.disabled = !Object.values(validInputs).every((value) => value);
    }
    const firstName = new InputComponent({ text: 'First name:' }, { id: 'firstName', minLength: 3 }, (value) => {
      validInputs.inputFirstName = value;
      setButtonState();
    });
    const lastName = new InputComponent({ text: 'Surname:' }, { id: 'surname', minLength: 4 }, (value) => {
      validInputs.inputLastName = value;
      setButtonState();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      this.onSuccessfulLogin(loginInfoSchema.parse(Object.fromEntries(formData.entries())));
    });
    this.container.append(form);
    form.append(...firstName.getElements(), ...lastName.getElements(), loginButton);
  }

  public getContainer(): HTMLDivElement {
    this.build();
    return this.container;
  }
}
