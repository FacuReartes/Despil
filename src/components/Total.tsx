import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Context from '../Context/Context';
import Paso from './Paso';

function Total() {

  const { gasto, setGasto, perfil, setPerfil } = useContext(Context) || { user: null, setUser: () => {} };
  
  const [total, setTotal] = useState(0)
  const [porPersona, setPorPersona] = useState(0)
  const [pasos, setPasos] = useState<any | null>([])

  // Calcula el total de los gastos
  useEffect(() => {
    let newTotal = 0;
    gasto.forEach((x:any) => {
      newTotal += x.cantidad
    })
    setTotal(newTotal)

    if(perfil.length > 0) {
      let cantPersonas = perfil.length
      setPorPersona(Math.round(newTotal / cantPersonas))
    }

  }, [gasto, perfil])

  useEffect(() => {
    handlePasos()
  }, [total, porPersona])

  const handlePasos = () => {
    let list = [...perfil]
    let listaDeudas = list.map((x:any) => (
      porPersona - x.contribucion
    ))

    let newPasos = [];
    
    while(listaDeudas.filter(e => (e !== 0)).length > 1) {
      const max = listaDeudas.indexOf(Math.max(...listaDeudas))
      const min = listaDeudas.indexOf(Math.min(...listaDeudas))

      console.log(listaDeudas[min])
      console.log(listaDeudas[max])

      const minDeuda = listaDeudas[min]
      const maxDeuda = listaDeudas[max]

      const resultado = minDeuda + maxDeuda

      listaDeudas[min] = resultado > 0 ? 0 : resultado;
      listaDeudas[max] = resultado > 0 ? resultado : 0;

      const importe = maxDeuda - listaDeudas[max]

      console.log(listaDeudas)

      newPasos.push({ index: newPasos.length + 1, desde: perfil[max], hacia: perfil[min], importe})
    }

    setPasos(newPasos)
  }

  return (
    <div className='pt-4 flex justify-center items-center flex-col sm:mx-0 mx-5 sm:pb-5'>
      <div className='pb-4 flex flex-col items-start sm:w-[70%] px-4'>
        <h1 className='text-3xl text-white pb-2'>
          El gasto total es de ${total}
        </h1>
        <h2 className='text-xl text-white pb-2'>
          ${porPersona} por persona
        </h2>
      </div>
      <ul className='sm:w-[70%] w-[100%] h-60 border-2 border-black rounded-lg bg-[#FFC93C] overflow-auto'>
        {pasos.map((x:any) => (
          <li key={x.index - 1}>
            <Paso desde={x.desde.nombre} hacia={x.hacia.nombre} importe={x.importe}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Total