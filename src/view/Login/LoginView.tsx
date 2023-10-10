import React, { FormEvent } from 'react'

export default function LoginView() {

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <div
      className='max-w-2xl mx-auto shadow-md px-8 py-8 mt-8'
    >
      <h2 className='text-2xl'>Inicia Sesión</h2>
      <p>Conéctate con amigos alrededor del mundo con Alfabook.</p>

      <form
        onSubmit={handlerSubmit}
        className='flex flex-col items-center gap-4 mt-4'
      >
        <input 
          type="text" 
          placeholder='Nombre' 
          className='w-full border-b-2 border-thirdBlue py-2' 
        />
        <input 
          type="email" 
          placeholder='Email' 
          className='w-full border-b-2 border-thirdBlue py-2' 
        />
        
        <button 
          type="submit"
          className='flex items-center gap-2 bg-firstBlue text-whiteColor py-1 px-4 rounded-md font-bold'  
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )

}
