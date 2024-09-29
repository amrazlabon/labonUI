// This is new like hook
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({ isLoggedIn: false, setIsLoggedIn: (state: boolean) => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!JSON.parse(sessionStorage.getItem('user_id') || 'null'));

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === sessionStorage && event.key === 'user_id') {
        // setIsLoggedIn(!!JSON.parse(sessionStorage.getItem('user_id') || 'null'));
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
