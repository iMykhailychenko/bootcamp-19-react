import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const state = useState(false);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
