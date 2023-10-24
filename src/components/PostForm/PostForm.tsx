import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addPost, getPostServices } from '../../services/post'
import { context } from '../../context/Context'
import { setPosts } from '../../context/actions/posts'

const validationSchema = Yup.object().shape({
  message: Yup.string().required('El mensaje está vacío...')
})

export default function PostForm() {

  const { state, dispatch } = React.useContext(context)
  
  const Formik = useFormik({
    initialValues: {
      message: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (state.auth.token && state.auth.id) {
        await addPost(state.auth.token, {
          user: state.auth.id,
          body: values.message
        })
        getPostServices(state.auth.token).then(
          res => {
            dispatch(setPosts(res))
          }
          
        )
      

      }
      resetForm()
    } 
  })

  return (
    <form className='rounded-md shadow-lg' onSubmit={Formik.handleSubmit}>
      <textarea
        name='message'
        value={Formik.values.message}
        onChange={Formik.handleChange}
        className='px-8 my-3 pb-4 pt-8 resize-none bg-transparent outline-none w-full'
        placeholder={
          Formik.errors.message ? 
            Formik.errors.message 
            : 'Escribe tu mensaje...'
        }
      />
      <hr />
      <div className='flex justify-end items-center px-8 py-4'>
        <button
          type='submit'
          className='flex items-center gap-2 bg-firstBlue text-whiteColor py-1 px-4 rounded-md font-bold'
        >
          Publicar
        </button>
      </div>
    </form>
  )
}
