import React from 'react'
// import { 
  // BiLike, 
  // BiSolidLike } from 'react-icons/bi'
import { AiOutlineMore } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { context } from '../../context/Context'
import { getPostServices } from '../../services/post'
import { deletePostService } from "../../services/post"
import { setPosts } from '../../context/actions/posts'

export default function Post({
  id,
  name,
  email,
  // edited,
  body,
  // likes,
  user_id
}: {
  id: string,
  name: string,
  email: string,
  // edited: string,
  body: string,
  // likes: number,
  user_id: string
}) {

  const { state, dispatch } = React.useContext(context)

  const navigate = useNavigate();

  const goToPerfilUser = () => navigate('profile/' + user_id)

  const [showMenu, setShowMenu] = React.useState<boolean>(false)

  const toggleShowMenu = () => setShowMenu(!showMenu)

  const deletePost = () => {
    state.auth.token &&
      deletePostService(id, state.auth.token)
        .then(() => {
          state.auth.token && 
            getPostServices(state.auth.token)
              .then(res => dispatch(setPosts(res)))
        })
        .catch(err => console.log(err))
  }


  return (
    <div className='rounded-md shadow-lg' key={id}>
      <div className='px-8 pb-4 pt-8'>
        <div className='flex justify-between items-center pb-4'>
          <div
            onClick={goToPerfilUser}
          >
            <p className='font-bold'>{name}</p>
            <p className='opacity-50'>{email}</p>
          </div>

          { user_id === state.auth.id ? 
            <div className='relative'>
              <AiOutlineMore className='text-2xl min-w-fit' onClick={toggleShowMenu} />

              <div 
              className={
                `bg-blackColor text-whiteColor flex flex-col gap-2 rounded-md absolute right-0 ${
                  showMenu ? '' : 'pointer-events-none hidden'
                }`
              }
              onClick={toggleShowMenu}
              >
                <button
                  className='flex items-center gap-2 bg-red-700 text-whiteColor py-1 px-4 rounded-md font-bold'
                  onClick={deletePost}
                >
                  Eliminar
                </button>
              </div>
            </div>
            : <></>
          }

        </div>
        <p>{body}</p>
      </div>
      <hr />
      <div className='flex justify-end items-center px-8 py-4'>
        {/* <span className='flex items-center gap-2'>
          <BiSolidLike className='text-lg' />
          {likes} 
          likes
        </span> */}
        {/* <button 
          className='flex items-center gap-2 bg-firstBlue text-whiteColor py-1 px-4 rounded-md font-bold'
        >
          <BiLike className='text-lg' />Like
        </button> */}
      </div>
    </div>
  )
}
