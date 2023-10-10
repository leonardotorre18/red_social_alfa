import { Formik } from 'formik';
import React from 'react'
import { loginUser } from '../../services/user';

export default function LoginView() {

  return (
    <div
      className='max-w-2xl mx-auto shadow-md px-8 py-8 mt-8'
    >
      <h2 className='text-2xl'>Inicia Sesión</h2>
      <p>Conéctate con amigos alrededor del mundo con Alfabook.</p>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={ async (values, { resetForm }) => {
          
          const response = await loginUser(values)
          console.log(response)
          
          resetForm()
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur}) => 

          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center gap-4 mt-4'
          >
            <input 
              type="email" 
              placeholder='Correo' 
              className='w-full border-b-2 border-thirdBlue py-2' 
              value={values.email}
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input 
              type="password" 
              placeholder='Contraseña' 
              className='w-full border-b-2 border-thirdBlue py-2' 
              value={values.password}
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button 
              type="submit"
              className='flex items-center gap-2 bg-firstBlue text-whiteColor py-2 px-5 rounded-md font-bold'
            >
              Iniciar Sesión
            </button>
          </form>
        }
      </Formik>
    </div>
  )

}
