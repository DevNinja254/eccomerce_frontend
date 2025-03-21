import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [sharedData, setSharedData] = useState(false);

  const updateSharedData = (newData) => {
    setSharedData(newData);
  };

  return (
    <MyContext.Provider value={{ sharedData, updateSharedData }}>
      {children}
    </MyContext.Provider>
  );
}
