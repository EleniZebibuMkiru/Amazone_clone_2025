import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children, Reducer, initialState }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
