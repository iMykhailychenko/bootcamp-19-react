import { createContext, useState } from 'react';

import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

const AUTH_KEY = 'AUTH_KEY';
const ERROR_TEXT = 'Not valid password';

const getAuthDataFromStorage = () => JSON.parse(localStorage.getItem(AUTH_KEY) ?? false);

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(getAuthDataFromStorage);

  const login = password => {
    if (password === '123') {
      setIsAuth(true);
      localStorage.setItem(AUTH_KEY, 'true');
    } else {
      toast.error(ERROR_TEXT);
    }
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.setItem(AUTH_KEY, 'false');
  };

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};
