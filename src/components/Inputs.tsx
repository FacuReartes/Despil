import React from 'react'
import { useContext } from 'react'
import Context from '../Context/Context';
import { useForm } from 'react-hook-form'
import Body from './Body';

function Inputs() {
  
  const { gasto, setGasto, perfil, setPerfil } = useContext(Context) || { user: null, setUser: () => {} };

  const { register, handleSubmit, formState: { errors } }  = useForm();

  const onSubmit = (data: any) => {

    const newGasto = {
      id: gasto.length + 1,
      perfil: data.perfil,
      descripcion: data.descripcion.charAt(0).toUpperCase() + data.descripcion.slice(1),
      cantidad: parseInt(data.cantidad, 10)
    }

    if(setGasto) setGasto([...gasto, newGasto]);

    const newPerfil = [...perfil]

    newPerfil.forEach((x:any) => {
      if(x.nombre === data.perfil) {
        x.contribucion += parseInt(data.cantidad, 10);
      }
    })

    if(setPerfil) setPerfil(newPerfil)
  }

  //Falta el manejo de errores del forms

  return (
    <div className='text-white flex justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-[20rem] sm:w-[35rem] text-xl sm:my-8 my-4 sm:border-2 border-black flex flex-row sm:flex-nowrap flex-wrap'>
          <select {...register("perfil", {
            required: "Se requiere perfil"
          })}
            className='border-2 border-b-0 border-black sm:border-0 min-w-0 basis-4/12 sm:basis-3/12 outline-none bg-[#FF9A3C] p-1' placeholder='Facu'>
            {perfil.map((x:any) => (
              <option>{x.nombre}</option>
            ))}
          </select>
          <input {...register("descripcion", {
            required: "Se requiere descripcion",
            maxLength: {
              value: 35,
              message: "Longitud maxima es de 35 caracteres"
          }})}
            type="text"
            id="Descripcion"
            className='outline-none basis-7/12 sm:basis-8/12 bg-[#FF9A3C] p-1 sm:border-x-2 border-2 sm:border-0 border-black' placeholder='Descripcion...'/>
          <input {...register("cantidad", {
            required: "Se requiere cantidad",
            maxLength: {
              value: 15,
              message: "Longitud maxima es de 15 numeros"
          }})}
            type="number"
            id="Cantidad"
            className='border-2 border-t-0 sm:border-l-0 border-black sm:border-0 min-w-0 basis-3/12 sm:basis-2/12 outline-none bg-[#FF9A3C] p-1' placeholder='$__'/>
        </div>
        <div className='flex justify-end'>
          <button type="submit" className='bg-[#FF9A3C] border-2 border-black hover:border-white px-8 py-2 rounded-lg'>Agregar</button>
        </div>
      </form>
    </div>
  )
}

export default Inputs