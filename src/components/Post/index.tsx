import React from 'react'
import { BiLike, BiSolidLike } from 'react-icons/bi'

export default function Post({
  name,
  email,
  edited,
  body,
  likes,
}: {
  name: string,
  email: string,
  edited: string,
  body: string,
  likes: number,
}) {
  return (
    <div className='rounded-md shadow-lg'>
      <div className='px-8 pb-4 pt-8'>
        <div className='flex justify-between items-end pb-4'>
          <div>
            <p className='font-bold'>{name}</p>
            <p className='opacity-50'>{email}</p>
          </div>
          <span className='opacity-50'>{edited}</span>
        </div>
        <p>{body}</p>
      </div>
      <hr />
      <div className='flex justify-between items-center px-8 py-4'>
        <span className='flex items-center gap-2'>
          <BiSolidLike className='text-lg' />
          {likes} likes
        </span>
        <button 
          className='flex items-center gap-2 bg-firstBlue text-whiteColor py-1 px-4 rounded-md font-bold'
        >
          <BiLike className='text-lg' />Like
        </button>
      </div>
    </div>
  )
}
