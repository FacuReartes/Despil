import { createContext } from "react";

interface gastoContextInterface {
    gasto: any | null;
    setGasto: (value: any | null) => void; 
}

const GastoContext = createContext<gastoContextInterface | null>(null);

export default GastoContext;