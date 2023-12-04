import React from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import GastoContext from '../gastoContext/gastoContext';

function Perfiles() {

  const { perfil, setPerfil } = useContext(GastoContext) || { user: null, setPerfil: () => {} };

  const { register, handleSubmit, formState: { errors } }  = useForm();

  const onSubmit = (data:any) => {
    const newPerfil = {
      id: perfil.length + 1,
      nombre: data.nombre,
      contribucion: 0
    }

    if(setPerfil) setPerfil([...perfil, newPerfil])
  }

  //Ver porque no se centra el texto dentro del input
  //handleErrores

  return (
    <div className='flex justify-center items-center gap-10'>
      <div>
        <h1 className='text-white text-3xl py-4'>Agregar Perfil</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-1 text-white text-xl bg-[#FF9A3C] border-2 border-black'>
          <input {...register("nombre", {
            required: "Se requiere nombre",
            maxLength: {
              value: 20,
              message: "Longitud maxima es de 20 caracteres"
          }})}
            type='text'
            id="nombre"
            placeholder='Nombre...'
            className='outline-none bg-[#FF9A3C]'/>
          <button type='submit' className='text-2xl relative px-1 text-white hover:text-green-500 transition-all delay-75'><FontAwesomeIcon icon={faPlusCircle}/></button>
        </div>
      </form>
    </div>
  )
}

export default Perfiles