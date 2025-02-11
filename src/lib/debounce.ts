export function debounce(cb: (data: any) => void, delay = 1000) {
  let timeout: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(args);
      console.log('debounce');
    }, delay);
  };
}

export function throttle(func: (data: any[]) => void, delay = 1000) {
  let lastCall = 0;

  return function (...args: any[]) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(args);
    }
  };
}
