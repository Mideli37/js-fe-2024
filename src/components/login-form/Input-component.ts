import { createElement } from '@/helpers/create-element';

const ValidationErrors = {
  getLengthError: (length: number) => `The minimal length is ${length}`,
  getLatinError: () => 'Please, use only latin letters',
  getCapitalizeError: () => 'The first symbol should be in uppercase',
} as const;

type LabelProps = {
  text: string;
};

type InputProps = {
  id: string;
  minLength: number;
};

function isLongEnough(value: string, minLength: number): boolean {
  return value.length >= minLength;
}

function hasOnlyLatin(value: string): boolean {
  return /^[a-zA-Z-]*$/.test(value);
}

function isCapitalize(value: string): boolean {
  return /^[A-Z]/.test(value);
}

export class InputComponent {
  private minLength: number;

  private errorMsgs: string[] = [];

  private label: HTMLLabelElement;

  private input: HTMLInputElement;

  private error: HTMLSpanElement;

  constructor(labelProps: LabelProps, inputProps: InputProps, onKeyUp: (value: boolean) => void) {
    this.label = createElement('label', { htmlFor: inputProps.id, textContent: labelProps.text });
    this.input = createElement('input', {
      id: inputProps.id,
      type: 'text',
      required: true,
      className:
        'outline-none rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-red-900 focus:ring-2 focus:ring-inset focus:ring-red-900',
    });
    this.error = createElement('span', { className: 'text-red-500 h-5' });
    this.minLength = inputProps.minLength;

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
    this.errorMsgs = [];
    if (!isLongEnough(this.input.value, this.minLength)) {
      this.errorMsgs.push(ValidationErrors.getLengthError(this.minLength));
    }
    if (!hasOnlyLatin(this.input.value)) {
      this.errorMsgs.push(ValidationErrors.getLatinError());
    }
    if (!isCapitalize(this.input.value)) {
      this.errorMsgs.push(ValidationErrors.getCapitalizeError());
    }
  }

  public getElements(): HTMLElement[] {
    return [this.label, this.input, this.error];
  }
}
