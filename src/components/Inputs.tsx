import React from 'react'

function Inputs() {

// probablemente agregarle un react forms para la data

  return (
    <div className='flex justify-center items-center'>
      <div className='text-xl my-8 border-2 border-black flex flex-row'>
        <input className='min-w-0 basis-2/12 outline-none bg-[#FF9A3C] p-1' placeholder='Facu'/>
        <input className='outline-none basis-8/12 bg-[#FF9A3C] p-1 border-x-2 border-black' placeholder='Descripcion...'/>
        <input className='min-w-0 basis-2/12 outline-none bg-[#FF9A3C] p-1' placeholder='$__'/>
      </div>
    </div>
  )
}

export default Inputs