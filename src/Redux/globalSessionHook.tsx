// This is new like hook
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({ isLoggedIn: false, setIsLoggedIn: (state: boolean) => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!sessionStorage.getItem('user_id'));

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === sessionStorage && event.key === 'user_id') {
        setIsLoggedIn(!!sessionStorage.getItem('user_id'));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);