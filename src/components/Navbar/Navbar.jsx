import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-14 absolute bottom-0 bg-white z-10 flex justify-center items-center uppercase font-bold'>
        <div className='absolute left-0 ml-2'>📸</div>
        <div className='mx-2'>Trabajos</div>
        <div className='mx-2'>Sobre mi</div>
        <div className='mx-2'>Contacto</div>
        {/* <div></div> */}
    </div>
  )
}

export default Navbar