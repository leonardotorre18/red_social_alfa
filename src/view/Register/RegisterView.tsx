import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik';

const validationSchema = Yup.object().shape({
  email: Yup.string().min(1, 'Debes ingresar un email').email('El email no es válido').required('El email es requerido'),
  password: Yup.string().required('Debes ingresar una contraseña'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
})

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
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          console.log(values)

          resetForm()
        }}  
      >
        { ({ values, errors, handleChange, handleSubmit, handleBlur }) => 
        
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
          { errors.email && <p className='bg-red-700 text-whiteColor rounded-md py-1 px-4'>{ errors.email }</p> }
          <input 
            type="password" 
            placeholder='Contraseña' 
            className='w-full border-b-2 border-thirdBlue py-2'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          { errors.password && <p className='bg-red-700 text-whiteColor rounded-md py-1 px-4'>{ errors.password }</p> }
          <input 
            type="password" 
            placeholder='Confirme su Contraseña' 
            className='w-full border-b-2 border-thirdBlue py-2'
            name='confirmPassword'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
          />
          { errors.confirmPassword && <p className='bg-red-700 text-whiteColor rounded-md py-1 px-4'>{ errors.confirmPassword }</p> }
          
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
