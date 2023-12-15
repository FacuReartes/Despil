import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import GastoContext from '../Context/Context';

function Paso(props: { desde: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; importe: number; hacia: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {

  return (
    <div className='relative flex items-center justify-center bg-[#FF9A3C] mx-10 mt-4 rounded-lg border-black border-2 text-white text-lg'>
        <p className='py-1 px-2'>{props.desde} le debe ${props.importe} a {props.hacia}</p>
    </div>
  )
}

export default Paso