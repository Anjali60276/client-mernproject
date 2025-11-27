import React from 'react'
import { createContext } from 'react';

export const UserContext = createContext();

export default function ContextProvider({children}) {
    const host = 'http://localhost:3000'
  return (
    <div>
        <UserContext.Provider value={{host}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}
