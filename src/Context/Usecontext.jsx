import React from 'react'
import { createContext, useState } from 'react';

export const AuthStatus = createContext();

const AuthStatusProvider = ({children}) => {
    const [authStatusValue, setAuthStatusValue] = useState(null);
    const [user, setUser] = useState({});
  return (
      <AuthStatus.Provider value={{ authStatusValue, setAuthStatusValue, user, setUser}}>
        {children}
      </AuthStatus.Provider>
  )
}

export default AuthStatusProvider