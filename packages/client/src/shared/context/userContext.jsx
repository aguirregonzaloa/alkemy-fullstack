import * as React from 'react';

export const userContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({ email: null });

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
