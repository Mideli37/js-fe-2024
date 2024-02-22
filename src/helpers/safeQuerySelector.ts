export const safeQuerySelector = <E extends HTMLElement>(selector: string, baseElement: Node = document): E => {
  if (!(baseElement instanceof Element || baseElement instanceof Document)) {
    throw new Error(`Error: element is not instance of Element or Document`);
  }
  const elem = baseElement.querySelector<E>(selector);

  if (!elem) {
    throw new Error(`Error: element with selector ${selector} was not found`);
  }

  return elem;
};
