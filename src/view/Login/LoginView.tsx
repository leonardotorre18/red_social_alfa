import React from 'react'
import * as Yup from 'yup'
import { Formik, FormikHelpers } from 'formik';
import { loginUser } from '../../services/user';
import { context } from '../../context/Context'; 
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../context/actions/token';

type FormikValues = {
  email: string,
  password: string,
  server: string
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('El email no es válido').required('Debes ingresar un email'),
  password: Yup.string().min(3, 'Contraseña demasiado corta').required('La contraseña es requerida')
})

export default function LoginView() {
  const { dispatch } = React.useContext(context)
  const navigate = useNavigate();

  const handleSubmit = async (
    values: FormikValues,
    { setErrors, resetForm }: FormikHelpers<FormikValues>
  ) => {

    loginUser({
      email: values.email,
      password: values.password
    })
      .then( res => {
        dispatch(setToken(res.token))
        navigate("/")
      })
      .catch(error => {
        setErrors({
          server: error.response.data.message
        })
      })
    resetForm()
  }

  return (
    <div
      className='max-w-2xl mx-auto shadow-md px-8 py-8 mt-8'
    >
      <h2 className='text-2xl'>Inicia Sesión</h2>
      <p>Conéctate con amigos alrededor del mundo con Alfabook.</p>

      <Formik
        initialValues={{
          email: '',
          password: '',
          server: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur}) => 

          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center gap-4 mt-4'
          >
            { errors.server && <p className='bg-red-700 text-whiteColor rounded-md py-1 px-4'>{ errors.server }</p> }
            <input 
              type="email" 
              placeholder='Correo' 
              className='w-full border-b-2 border-thirdBlue py-2' 
              value={values.email}
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.email && <p className='bg-red-700 text-whiteColor rounded-md py-1 px-4'>{ errors.email }</p> }
            <input 
              type="password" 
              placeholder='Contraseña' 
              className='w-full border-b-2 border-thirdBlue py-2' 
              value={values.password}
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.password && <p className='bg-red-700 text-whiteColor rounded-md py-1 px-4'>{ errors.password }</p> }
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
