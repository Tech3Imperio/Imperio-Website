import { DebounceProps } from "../../types";

// Adjust the type definition here to match your environment
let timeout: ReturnType<typeof setTimeout> | null = null;

export const debounce: DebounceProps = (callback, wait) => {
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
