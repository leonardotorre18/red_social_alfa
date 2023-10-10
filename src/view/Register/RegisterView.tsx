import React from 'react'
import { Formik } from 'formik';

export default function RegisterView() {

  return (
    <div
      className='max-w-2xl mx-auto shadow-md px-8 py-8 mt-8'
    >
      <h2 className='text-2xl'>Crea una cuenta</h2>
      <p>Conéctate con amigos alrededor del mundo con Alfabook.</p>

      <Formik 
        initialValues={{
          email: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={(values, {resetForm}) => {
          console.log(values)

          resetForm()
        }}  
      >
        { ({ values, handleChange, handleSubmit, handleBlur }) => 
        
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center gap-4 mt-4'
        >
          <input 
            type="email" 
            placeholder='Correo' 
            className='w-full border-b-2 border-thirdBlue py-2'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <input 
            type="password" 
            placeholder='Contraseña' 
            className='w-full border-b-2 border-thirdBlue py-2'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <input 
            type="password" 
            placeholder='Confirme su Contraseña' 
            className='w-full border-b-2 border-thirdBlue py-2'
            name='confirmPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          
          <button 
            type="submit"
            className='flex items-center gap-2 bg-firstBlue text-whiteColor py-2 px-5 rounded-md font-bold'
          >
            Registrarse
          </button>
        </form>
        
        }

      </Formik>

    </div>
  )

}
