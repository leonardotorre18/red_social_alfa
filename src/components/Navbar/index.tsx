import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { BiSolidUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [showMenu, setShowMenu] = React.useState<boolean>(false)

  const toggleShowMenu = () => setShowMenu(!showMenu)

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <header className='bg-firstBlue text-whiteColor font-roboto sticky w-full top-0 left-0 z-30'>
      <nav 
        className='flex justify-between items-center py-2 px-8 mx-auto max-w-7xl'
      >

        <span className='text-2xl'>Alfabook</span>
        
        <form
          className='bg-whiteColor flex items-center py-1 px-3 rounded-md'
          onSubmit={handlerSubmit}
        >
          <input type="text" className='bg-transparent text-blackColor' />
          <button type="submit">
            <BsSearch className='text-firstBlue text-xl' />
          </button>
        </form>

        <div className='relative'>
          <BiSolidUserCircle className='text-4xl min-w-fit' onClick={toggleShowMenu} />

          <div 
            className={
              `bg-blackColor text-whiteColor flex flex-col py-2 gap-2 rounded-md absolute right-0 ${
                showMenu ? '' : 'pointer-events-none hidden'
              }`
            }
            onClick={toggleShowMenu}
          >
            <Link 
              to={'/profile'}
              className='px-4 min-w-max'
            >
              Perfil
            </Link>
            <Link 
              to={'/'}
              className='px-4 min-w-max'
            >
              Dashboard
            </Link>
            <hr />
            <Link 
              to={'/login'}
              className='px-4 min-w-max'
            >
              Iniciar Sesión
            </Link>
            <Link 
              to={'/register'}
              className='px-4 min-w-max'
            >
              Registrarse
            </Link>
            <Link 
              to={'/logout'}
              className='px-4 min-w-max'
            >
              Cerrar Sesión
            </Link>
          </div>

        </div>
      </nav>
    </header>
  )
}
