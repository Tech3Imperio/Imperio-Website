import { DebounceProps } from "./../../interface/utils";

export const debounce: DebounceProps = (callback, wait) => {
  let timeout: NodeJS.Timeout | null = null;

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
