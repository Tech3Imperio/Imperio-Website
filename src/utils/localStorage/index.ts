// Get item from localStorage with specified type
export const getLocalStorageItem = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};

// Set item in localStorage with specified type
export const setLocalStorageItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Remove item from localStorage
export const removeLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const removeLocalStorageItems = (keys: string[]): void => {
  for (let i = 0; i < keys.length; i++) {
    localStorage.removeItem(keys[i]);
  }
};
