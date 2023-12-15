import React from 'react'
import BodyItem from './BodyItem'
import Context from '../Context/Context'
import { useContext, useEffect } from 'react';

function Body() {

  const { gasto, setGasto } = useContext(Context) || { user: null, setUser: () => {} };

  return (
    <div className='pt-6 flex justify-center items-center'>
      <ul className='w-[70%] h-60 border-2 border-black rounded-lg bg-[#FFC93C] overflow-auto'>
        {gasto.map((x: any) => (
          <li key={x.id}>
            <BodyItem key={x.id}  id={x.id} perfil={x.perfil} descripcion={x.descripcion} cantidad={x.cantidad}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Body