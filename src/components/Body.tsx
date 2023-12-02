import React from 'react'
import BodyItem from './BodyItem'
import GastoContext from '../gastoContext/gastoContext'
import { useContext } from 'react';

function Body() {

  const { gasto, setGasto } = useContext(GastoContext) || { user: null, setUser: () => {} };

  //Considero que esto deberia ser con una lista, no multiples div. cuando mapeo deberia devolver un li y el div exterior ser un ul

  return (
    <div className='pt-6 flex justify-center items-center'>
      <div className='w-[70%] h-60 border-2 border-black rounded-lg bg-[#FFC93C] overflow-auto'>
        {gasto.map((x: any) => (
          <BodyItem key={x.id} perfil={x.perfil} descripcion={x.descripcion} cantidad={x.cantidad}/>
        ))}
      </div>
    </div>
  )
}

export default Body