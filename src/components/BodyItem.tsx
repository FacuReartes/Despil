import React from 'react'

function BodyItem(props: { perfil: string; cantidad: number; descripcion: string}) {
  return (
    <div className='flex justify-center bg-[#FF9A3C] mx-10 mt-4 rounded-lg border-black border-2 text-white text-lg'>
        <p className='py-1 px-2'>{props.perfil} gasto {props.cantidad} en {props.descripcion}</p>
    </div>
  )
}

export default BodyItem