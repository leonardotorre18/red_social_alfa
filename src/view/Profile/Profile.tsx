import React from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../../context/Context';
import { getSession, getUserById } from '../../services/user';
import { TUser } from '../../context/types/user';
import { BiSolidUserCircle } from 'react-icons/bi'
import Post from '../../components/Post';
import { TPost } from '../../context/types/post';

export default function Profile() {
  const { user_id } = useParams();

  const [ user, setUser ] = React.useState<TUser | undefined>(undefined);
  const [ userPosts, setUserPosts ] = React.useState<TPost[]>([])

  const { state } = React.useContext(context)


  React.useEffect(() => {

    if (user_id && state.auth.token) {
      getUserById(user_id, state.auth.token)
        .then((res) => {
          console.log(res)
          setUser(res.user)
        })
    } 
    else if (state.auth.token) {
      getSession(state.auth.token)
        .then(res => {
          console.log(res)
          setUser({
            _id: res._id,
            name: res.name,
            email: res.email
          })
        })
    }
  }, [user_id, state.auth.token])

  React.useEffect(() => {
    setUserPosts(state.posts.filter(post => post.user._id == user?._id))
  }, [state.posts, user?._id])


  return (
    <div className='mx-auto max-w-7xl py-8 px-4'>
      <div className='flex items-center justify-start gap-4'>
        <BiSolidUserCircle className='text-8xl' />
        <div>
          <p className='text-2xl'>{user?.name}</p>
          <span className='text-xl opacity-50 font-medium'>{user?.email}</span>
        </div>
      </div>
      {
        userPosts.map( post => <Post id={post._id} user_id={post.user._id} name={post.user.name} email={post.user.email} body={post.body} />)
      }
    </div>
  )
}
