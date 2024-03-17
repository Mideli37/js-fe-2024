function animate(element: Element, ...animateProps: Parameters<Element['animate']>): Promise<Animation> {
  const animateObj = element.animate(...animateProps);
  return animateObj.finished;
}

export async function fadeInAnimation(list: Element[]): Promise<void> {
  const elAnimationPromises = list.map((element) =>
    animate(element, [{ opacity: '1' }, { opacity: '0' }], {
      duration: 300,
      iterations: 1,
    })
  );

  await Promise.all(elAnimationPromises);
}

export async function fadeOutAnimation(list: Element[]): Promise<void> {
  const elAnimationPromises = list.map((element) =>
    animate(element, [{ opacity: '0' }, { opacity: '1' }], {
      duration: 300,
      iterations: 1,
    })
  );

  await Promise.all(elAnimationPromises);
}
