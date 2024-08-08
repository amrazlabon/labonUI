// This is new like hook
import { useState, useEffect } from 'react';

const useSessionStorage = (key: string) => {
  const [value, setValue] = useState<string | null>(sessionStorage.getItem(key));

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === sessionStorage && event.key === key) {
        setValue(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return value;
};

export default useSessionStorage;
