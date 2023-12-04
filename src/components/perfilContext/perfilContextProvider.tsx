import React from 'react'
import { useState, ReactNode } from 'react';
import PerfilContext from './perfilContext';

interface GastoContextProviderProps {
  children: ReactNode;
}

const GastoContextProvider: React.FC<GastoContextProviderProps> = ({ children }) => {
  
  const [gasto, setGasto] = useState<any | null>([]);

  return (
    <PerfilContext.Provider value={{ gasto, setGasto }}>
      {children}
    </PerfilContext.Provider>
  )
}



export default GastoContextProvider