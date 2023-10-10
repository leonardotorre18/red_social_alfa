import React from 'react'

export default function RegisterView() {

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <div
      className='max-w-2xl mx-auto shadow-md px-8 py-8 mt-8'
    >
      <h2 className='text-2xl'>Crea una cuenta</h2>
      <p>Conéctate con amigos alrededor del mundo con Alfabook.</p>

      <form
        onSubmit={handlerSubmit}
        className='flex flex-col items-center gap-4 mt-4'
      >
        <input 
          type="email" 
          placeholder='Correo' 
          className='w-full border-b-2 border-thirdBlue py-2' 
        />
        <input 
          type="password" 
          placeholder='Contraseña' 
          className='w-full border-b-2 border-thirdBlue py-2' 
        />
        <input 
          type="password" 
          placeholder='Confirme su Contraseña' 
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
