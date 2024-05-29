export type CallbackFunction = (str?: string, num?: number) => void;
export type DebounceProps = (
  callback: CallbackFunction,
  wait: number
) => Function;
