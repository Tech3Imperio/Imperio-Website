import { DebounceProps } from "./../../interface";

export const debounce: DebounceProps = (callback, wait) => {
  let timeout: number | null = null;

  return function (str: string, num: number): void {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback(str, num);
      timeout = null;
    }, wait);
  };
};
