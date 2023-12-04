import { createContext } from "react";

interface perfilContextInterface {
    gasto: any | null;
    setGasto: (value: any | null) => void; 
}

const PerfilContext = createContext<perfilContextInterface | null>(null);

export default PerfilContext;