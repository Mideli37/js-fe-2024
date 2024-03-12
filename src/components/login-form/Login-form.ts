import { createElement } from '@/helpers/create-element';
import { InputComponent } from './Input-component';
import { saveData } from '@/services/Local-storage.service';

export class LoginForm {
  private container = createElement('div', { className: 'bg-[#e9cec7] p-5 rounded-md border-red-900 border' });

  private build(): void {
    const form = createElement('form', { className: 'flex flex-col gap-2 w-80' });
    const loginButton = createElement('input', {
      disabled: true,
      type: 'submit',
      value: 'Login',
      className:
        'bg-[#ffe3d5] border border-red-900 disabled:bg-[#ece5e1] disabled:border-[#ece5e1] disabled:cursor-default rounded-md  py-1.5 pl-4 pr-4 duration-100 cursor-pointer',
    });

    const validInputs = { inputFirstName: false, inputLastName: false };
    function setButtonState(): void {
      loginButton.disabled = !Object.values(validInputs).every((value) => value);
    }
    const firstName = new InputComponent({ text: 'First name:' }, { id: 'FirstName', minLength: 3 }, (value) => {
      validInputs.inputFirstName = value;
      setButtonState();
    });
    const lastName = new InputComponent({ text: 'Surname:' }, { id: 'Surname', minLength: 4 }, (value) => {
      validInputs.inputLastName = value;
      setButtonState();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      saveData('loginInfo', Object.fromEntries(formData.entries()));
    });
    this.container.append(form);
    form.append(...firstName.getElements(), ...lastName.getElements(), loginButton);
  }

  public getContainer(): HTMLDivElement {
    this.build();
    return this.container;
  }
}
