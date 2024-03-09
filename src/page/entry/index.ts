import { LoginForm } from '@/components/Login-form';
import { createElement } from '@/helpers/create-element';

export class EntryPage {
  private container = createElement('div', { className: 'flex justify-center items-center' });

  private build(): void {
    const form = new LoginForm();
    this.container.append(form.getContainer());
  }

  public init(): void {
    this.build();
    document.body.append(this.container);
  }
}
