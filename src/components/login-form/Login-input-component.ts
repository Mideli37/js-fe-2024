import { z } from 'zod';
import { createElement } from '@/helpers/create-element';

const inputSchema = z
  .string()
  .min(4, 'The minimal length is 4')
  .regex(/^\w+$/, 'Please, use only latin letters and numbers');

type LabelProps = {
  text: string;
};

type InputProps = {
  id: string;
  type: string;
};

export class LoginInputComponent {
  private errorMsgs: string[] = [];

  private label: HTMLLabelElement;

  private input: HTMLInputElement;

  private error: HTMLSpanElement;

  constructor(labelProps: LabelProps, inputProps: InputProps, onKeyUp: (value: boolean) => void) {
    this.label = createElement('label', { htmlFor: inputProps.id, textContent: labelProps.text });
    this.input = createElement('input', {
      id: inputProps.id,
      type: inputProps.type,
      name: inputProps.id,
      required: true,
      className:
        'outline-none rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-red-900 focus:ring-2 focus:ring-inset focus:ring-red-900',
    });
    this.error = createElement('span', { className: 'text-red-500 h-5' });

    this.input.addEventListener('keyup', () => {
      this.validate();

      if (this.errorMsgs[0]) {
        [this.error.textContent] = this.errorMsgs;
        onKeyUp(false);
      } else {
        this.error.textContent = '';
        onKeyUp(true);
      }
    });
  }

  private validate(): void {
    try {
      inputSchema.parse(this.input.value);
      this.errorMsgs = [];
    } catch (e) {
      if (e instanceof z.ZodError) {
        this.errorMsgs = e.issues.map((issue) => issue.message);
      }
    }
  }

  public getElements(): HTMLElement[] {
    return [this.label, this.input, this.error];
  }
}
