import React from 'react'
import { useContext } from 'react'
import GastoContext from '../gastoContext/gastoContext';
import { useForm } from 'react-hook-form'
import Body from './Body';

function Inputs() {
  
  const { gasto, setGasto } = useContext(GastoContext) || { user: null, setUser: () => {} };

  const { register, handleSubmit, formState: { errors } }  = useForm();

  const onSubmit = (data: any) => {
    const newGasto = {
      id: gasto.length + 1,
      perfil: data.perfil,
      descripcion: data.descripcion,
      cantidad: data.cantidad
    }

    if(setGasto) setGasto([...gasto, newGasto]);
  }

  //Falta el manejo de errores del forms


  return (
    <div className='text-white flex justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-xl my-8 border-2 border-black flex flex-row'>
          <select {...register("perfil")}
            className='min-w-0 basis-2/12 outline-none bg-[#FF9A3C] p-1' placeholder='Facu'>
            <option>Facu</option>
            <option>Gio</option>
          </select>
          <input {...register("descripcion", {
            required: "Se requiere descripcion",
            maxLength: {
              value: 35,
              message: "Longitud maxima es de 35 caracteres"
          }})}
            type="text"
            id="Descripcion"
            className='outline-none basis-8/12 bg-[#FF9A3C] p-1 border-x-2 border-black' placeholder='Descripcion...'/>
          <input {...register("cantidad", {
            required: "Se requiere cantidad",
            maxLength: {
              value: 15,
              message: "Longitud maxima es de 15 numeros"
          }})}
            type="number"
            id="Cantidad"
            className='min-w-0 basis-2/12 outline-none bg-[#FF9A3C] p-1' placeholder='$__'/>
        </div>
        <div className='flex justify-end'>
          <button type="submit" className='bg-[#FF9A3C] border-2 border-black hover:border-white px-8 py-2 rounded-lg'>Agregar</button>
        </div>
      </form>
    </div>
  )
}

export default Inputs