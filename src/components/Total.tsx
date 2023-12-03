import React from 'react'
import { useState, useContext, useEffect } from 'react'
import GastoContext from '../gastoContext/gastoContext';

function Total() {

  const { gasto, setGasto } = useContext(GastoContext) || { user: null, setUser: () => {} };
  const [total, setTotal] = useState(0)

  // Calcula el total de los gastos
  useEffect(() => {
    let newTotal = 0;
    gasto.forEach((x:any) => {
      newTotal += x.cantidad
    })
    setTotal(newTotal)
  }, [gasto])

  return (
    <div className='pt-4 flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-white pb-4 relative right-36'>
        El gasto total es de ${total}
      </h1>
      <ul className='w-[70%] h-60 border-2 border-black rounded-lg bg-[#FFC93C] overflow-auto'>

      </ul>
    </div>
  )
}

export default Total