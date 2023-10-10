import React from 'react'
import { BiLike, BiSolidLike } from 'react-icons/bi'

export default function Post() {
  return (
    <div className='rounded-md shadow-lg'>
      <div className='px-8 pb-4 pt-8'>
        <div className='flex justify-between items-end pb-4'>
          <div>
            <p className='font-bold'>Leonardo Torrealba</p>
            <p className='opacity-50'>Leonardotorre14@gmail.com</p>
          </div>
          <span className='opacity-50'>edited, 27 Oct 2023</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas repudiandae voluptatum sapiente accusantium laboriosam laudantium amet laborum, doloribus aliquam rem neque id qui facilis placeat quod ratione nisi doloremque dolores.</p>
      </div>
      <hr />
      <div className='flex justify-between items-center px-8 py-4'>
        <span className='flex items-center gap-2'>
          <BiSolidLike className='text-lg' />
          4 likes
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
