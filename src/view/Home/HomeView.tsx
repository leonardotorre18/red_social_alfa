import React from 'react'
import Post from '../../components/Post'
import { context } from '../../context/Context'
import { TPost } from '../../context/types/post'
import { getPostServices } from '../../services/post'
import { setPosts } from '../../context/actions/posts'

export default function HomeView() {

  const { state, dispatch } = React.useContext(context)


  React.useEffect(() => {
    if(state.token) {
      getPostServices(state.token).then((data: TPost[]) => {
        dispatch(
          setPosts(data)
        )
      })
    }
  }, [state.token])

  console.log(state)
  return (
    <div className='max-w-5xl mx-auto flex flex-col my-10 gap-4'>
      
      {
        state.posts.map( post => (
          <Post 
            key={post._id}
            name={post.user.name}
            email={post.user.email}
            edited={'edited, 27 Oct 2023'} 
            body={post.body} 
            likes={4} 
          />
        ))
      }

    </div>
  )
}
