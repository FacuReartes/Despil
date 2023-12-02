import React from 'react'
import { useState, ReactNode } from 'react';
import GastoContext from './gastoContext';

interface GastoContextProviderProps {
  children: ReactNode;
}

const GastoContextProvider: React.FC<GastoContextProviderProps> = ({ children }) => {
  
  const [gasto, setGasto] = useState<any | null>([]);

  return (
    <GastoContext.Provider value={{ gasto, setGasto }}>
      {children}
    </GastoContext.Provider>
  )
}



export default GastoContextProvider