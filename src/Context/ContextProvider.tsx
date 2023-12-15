import React from 'react'
import { useState, ReactNode } from 'react';
import Context from './Context';

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  
  const [gasto, setGasto] = useState<any | null>([]);

  const [perfil, setPerfil] = useState<any | null>([]);

  return (
    <Context.Provider value={{ gasto, setGasto, perfil, setPerfil }}>
      {children}
    </Context.Provider>
  )
}



export default ContextProvider