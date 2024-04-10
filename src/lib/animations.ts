function animate(element: Element, ...animateProps: Parameters<Element['animate']>): Animation {
  const animateObj = element.animate(...animateProps);
  return animateObj;
}

export function moveToRightAnimation(element: HTMLElement, duration: number): Animation {
  return animate(element, [{ left: '0%' }, { left: '100%' }], {
    duration,
    iterations: 1,
  });
}
