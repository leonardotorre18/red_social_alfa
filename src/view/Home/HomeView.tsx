import React from 'react'
import Post from '../../components/Post'
import { context } from '../../context/Context'

export default function HomeView() {

  const state = React.useContext(context)

  console.log(state)

  return (
    <div className='max-w-5xl mx-auto flex flex-col my-10 gap-4'>


      <Post 
        name={'Leonardo Torrealba'}
        email={'leonardotorre14@gmail.com'}
        edited={'edited, 27 Oct 2023'} 
        body={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} 
        likes={4} />
    </div>
  )
}
