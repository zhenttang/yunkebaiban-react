export const rafThrottle = (fn: (...args: any[]) => void) => {
  let queued = false;
  const wrapper = (...args: any[]) => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      fn(...args);
      queued = false;
    });
  };
  return wrapper;
};
