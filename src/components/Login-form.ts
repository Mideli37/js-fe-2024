import { createElement } from '@/helpers/create-element';

function setButtonState(inputs: HTMLInputElement[], submitButton: HTMLInputElement): void {
  const button = submitButton;
  if (inputs.every((input) => input.value)) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

export class LoginForm {
  private container = createElement('div', { className: 'bg-[#e9cec7] p-5 rounded-md border-red-900 border' });

  private build(): void {
    const form = createElement('form', { className: 'flex flex-col gap-2' });
    const labelFirstName = createElement('label', { htmlFor: 'firstName', textContent: 'First name:' });
    const inputStyle =
      'outline-none rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-red-900 focus:ring-2 focus:ring-inset focus:ring-red-900';
    const inputFirstName = createElement('input', {
      id: 'firstName',
      type: 'text',
      required: true,
      className: inputStyle,
    });
    const labelLastName = createElement('label', { htmlFor: 'Surname', textContent: 'Surname:' });
    const inputLastName = createElement('input', {
      id: 'Surname',
      type: 'text',
      required: true,
      className: inputStyle,
    });
    const loginButton = createElement('input', {
      disabled: true,
      type: 'submit',
      value: 'Login',
      className:
        'bg-[#ffe3d5] border border-red-900 disabled:bg-[#ece5e1] disabled:border-[#ece5e1] disabled:cursor-none rounded-md  py-1.5 pl-4 pr-4 duration-100 cursor-pointer',
    });
    const inputs = [inputFirstName, inputLastName];

    function handleKeyUp(): void {
      setButtonState(inputs, loginButton);
    }

    inputs.forEach((input) => {
      input.addEventListener('keyup', handleKeyUp);
    });
    this.container.append(form);
    form.append(labelFirstName, inputFirstName, labelLastName, inputLastName, loginButton);
  }

  public getContainer(): HTMLDivElement {
    this.build();
    return this.container;
  }
}
