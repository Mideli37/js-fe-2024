import type { Json } from '@/helpers/JSON.schema';

type RequestType =
  | 'USER_LOGIN'
  | 'USER_LOGOUT'
  | 'USER_ACTIVE'
  | 'USER_INACTIVE'
  | 'USER_EXTERNAL_LOGOUT'
  | 'USER_EXTERNAL_LOGIN';
export class WebsocketService {
  private websocket = new WebSocket('ws://localhost:4000');

  private currentId = 1;

  public init(): Promise<string> {
    return new Promise((resolve) => {
      this.websocket.addEventListener('open', () => {
        resolve('open');
        this.websocket.addEventListener('message', (/* event */) => {
          // console.log('Message from server ', event.data);
        });
      });
    });
  }

  public sendMsg(type: RequestType, payload: Json): void {
    const request = {
      id: this.currentId.toString(),
      type,
      payload,
    };
    this.currentId += 1;
    this.websocket.send(JSON.stringify(request));
  }

  public setOnMsg(fn: (event: MessageEvent) => void): void {
    this.websocket.addEventListener('message', fn);
  }

  public removeOnMsg(fn: (event: MessageEvent) => void): void {
    this.websocket.removeEventListener('message', fn);
  }
}
