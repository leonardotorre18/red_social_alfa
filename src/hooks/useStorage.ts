import React from "react";

function useStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  
  const [value, setValue] = React.useState(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue !== null ? JSON.parse(storageValue) : initialValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const setStorageValue = (value: T) => setValue(value);

  return [value, setStorageValue];
}

export default useStorage;