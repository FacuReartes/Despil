import { createContext } from "react";

interface ContextInterface {
    gasto: any | null;
    setGasto: (value: any | null) => void; 
    perfil: any | null;
    setPerfil: (value: any | null) => void;
}

const GastoContext = createContext<ContextInterface | null>(null);

export default GastoContext;