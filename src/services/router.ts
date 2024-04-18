import type { LoginInfo } from '@/components/login-form/login-info.schema';
import type { EntryPage } from '../pages/entry';
import type { MainPage } from '../pages/main';
import { stringToJsonSchema } from './string-to-json.schema';

function shouldNotIntercept(navigationEvent: NavigateEvent): boolean {
  return (
    !navigationEvent.canIntercept ||
    navigationEvent.hashChange ||
    !!navigationEvent.downloadRequest ||
    !!navigationEvent.formData
  );
}

export class Router {
  constructor(private onLogin: (loginInfo: LoginInfo) => void) {}

  private modules = [
    {
      route: '/main',
      callback: (): Promise<MainPage> =>
        import('../pages/main').then(({ MainPage }) => {
          const login = stringToJsonSchema.parse(sessionStorage.getItem('userLogin'));
          if (typeof login !== 'string') {
            throw new Error('json wasnt parsed to string');
          }
          return new MainPage(login);
        }),
    },
    {
      route: '/login',
      callback: (): Promise<EntryPage> => import('../pages/entry').then(({ EntryPage }) => new EntryPage(this.onLogin)),
    },
  ] as const;

  public initRouter(root: HTMLElement): void {
    navigation?.addEventListener('navigate', (event) => {
      if (shouldNotIntercept(event)) {
        return;
      }
      const { pathname } = new URL(event.destination.url);
      const component = this.modules.find(({ route }) => pathname.startsWith(route));

      if (component) {
        event.intercept({
          async handler() {
            root.replaceChildren((await component.callback()).getContainer());
          },
        });
      }
    });
  }

  public navigate(route: (typeof this.modules)[number]['route']): NavigationResult | null {
    return navigation?.navigate(route) ?? null;
  }
}
