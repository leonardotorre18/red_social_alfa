import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik';
import { registerUser } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { context } from '../../context/Context';
import { login } from '../../context/actions/auth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string().email('El email no es válido').required('El email es requerido'),
  password: Yup.string().required('Debes ingresar una contraseña'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
})

export default function RegisterView() {

  const { dispatch } = React.useContext(context)
  const navigate = useNavigate();

  return (
    <div
      className='max-w-2xl mx-auto shadow-md px-8 py-8 mt-8'
    >
      <h2 className='text-2xl'>Crea una cuenta</h2>
      <p>Conéctate con amigos alrededor del mundo con Alfabook.</p>

      <Formik 
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          server: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setErrors }) => {
          
          registerUser({
            email: values.email,
            password: values.password,
            name: values.name
          })
            .then(data => {
              dispatch(login({
                token: data.token,
                name: data.user.name,
                email: data.user.email
              }))
              navigate('/')
            })
            .catch(error => {
              console.log('hoña')
              setErrors({
                server: error.response.data.message
              })
            })

          resetForm()
        }}  
      >
        { ({ values, errors, handleChange, handleSubmit, handleBlur }) => 
        
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center gap-4 mt-4'
        >
          { errors.server && <p className='bg-red-700 text-whiteColor rounded-md py-1 px-4'>{ errors.server }</p> }
          <input 
            type="text" 
            placeholder='Nombre' 
            className='w-full border-b-2 border-thirdBlue py-2'
            name='name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          { errors.name && <p className='bg-red-700 text-whiteColor rounded-md py-1 px-4'>{ errors.name }</p> }
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
