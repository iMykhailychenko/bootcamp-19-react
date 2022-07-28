import { createContext, useState } from 'react';

import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = password => {
    if (password === '123') {
      setIsAuth(true);
    } else {
      toast.error('Not valid password');
    }
  };

  const logout = () => {
    setIsAuth(false);
  };

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};
