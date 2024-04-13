import { Dialog } from '@/components/dialog/Diaolog';
import { LoginForm } from '@/components/login-form/Login-form';
import type { LoginInfo } from '@/components/login-form/login-info.schema';
import { createElement } from '@/helpers/create-element';
import { parseServerResponse } from '@/services/server-response.schema';
import { WebsocketService } from '@/services/websocket-service';

export class App {
  private websocket = new WebsocketService();

  private dialog = new Dialog();

  public async init(): Promise<void> {
    await this.websocket.init();
    this.build();
    this.dialog.init();
  }

  private build(): void {
    const form = new LoginForm(this.onLogin.bind(this));
    document.body.append(form.getContainer());
    this.websocket.setOnMsg(this.showErrorModal.bind(this));
  }

  private onLogin(loginInfo: LoginInfo): void {
    this.websocket.sendMsg('USER_LOGIN', { user: loginInfo });
  }

  private showErrorModal(event: MessageEvent): void {
    this.dialog.clean();
    // console.log('Event data  ', event.data);
    const data = parseServerResponse(event.data);
    if (data.type === 'ERROR') {
      this.dialog.appendElements([createElement('p', { textContent: `АШЫПКА! ${data.payload.error}` })]);
      this.dialog.open();
    }
  }
}
