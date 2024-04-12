type TagName = keyof HTMLElementTagNameMap;
type TagElement<T extends TagName> = HTMLElementTagNameMap[T];

type Props<T extends TagName> = Partial<Omit<TagElement<T>, 'style' | 'classList' | 'children' | 'tagName'>>;

export function createElement<T extends TagName>(tag: T, props?: Props<T>): TagElement<T> {
  const element = document.createElement(tag);
  Object.assign(element, props);
  return element;
}
