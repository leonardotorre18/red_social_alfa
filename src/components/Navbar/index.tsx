import React, { FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import { BiSolidUserCircle } from 'react-icons/bi'

export default function Navbar() {

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <header className='bg-firstBlue text-whiteColor font-roboto sticky w-full top-0 left-0 z-30'>
      <nav 
        className='flex justify-between items-center py-2 px-8 mx-auto max-w-7xl'
      >

        <span className='text-2xl'>Alfabook</span>
        
        <form 
          action="" 
          className='bg-whiteColor flex items-center py-1 px-3 rounded-md'
          onSubmit={handlerSubmit}
        >
          <input type="text" className='bg-transparent text-blackColor' />
          <button type="submit">
            <BsSearch className='text-firstBlue text-xl' />
          </button>
        </form>

        <BiSolidUserCircle className='text-4xl min-w-fit' />
        
      </nav>
    </header>
  )
}
