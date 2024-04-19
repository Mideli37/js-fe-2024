function shouldNotIntercept(navigationEvent: NavigateEvent): boolean {
  return (
    !navigationEvent.canIntercept ||
    navigationEvent.hashChange ||
    !!navigationEvent.downloadRequest ||
    !!navigationEvent.formData
  );
}

export class Router {
  constructor(private modules: { route: string; callback: () => Promise<HTMLDivElement> }[]) {}

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
            root.replaceChildren(await component.callback());
          },
        });
      }
    });
  }

  public static navigate(route: string): NavigationResult | null {
    return navigation?.navigate(route) ?? null;
  }
}
