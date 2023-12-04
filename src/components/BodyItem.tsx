import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import GastoContext from '../gastoContext/gastoContext';

function BodyItem(props: { perfil: string; cantidad: number; descripcion: string; id: number}) {
  
  const { gasto, setGasto, perfil, setPerfil } = useContext(GastoContext) || { user: null, setUser: () => {} };

  const handleDelete = () => {
    const newGasto = gasto.filter((x: any) => x.id !== props.id)
    if(setGasto) setGasto(newGasto)

    const newPerfil = [...perfil]

    newPerfil.forEach((x:any) => {
      if (x.nombre === props.perfil) {
        x.contribucion -= props.cantidad
      }
    })
    
    if(setPerfil) setPerfil(newPerfil)
  }

  return (
    <div className='relative flex items-center justify-center bg-[#FF9A3C] mx-10 mt-4 rounded-lg border-black border-2 text-white text-lg'>
        <p className='py-1 px-2'>{props.perfil} gasto ${props.cantidad} en {props.descripcion}</p>
        <a onClick={handleDelete} 
        className='absolute right-2 hover:cursor-pointer hover:text-red-600 delay-75 transition-all p-1'>
          <FontAwesomeIcon icon={faTrashCan}/>
        </a>
    </div>
  )
}

export default BodyItem