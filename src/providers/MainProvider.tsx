import React from 'react'
import ContextProvider from '../context/Provider'
 
export default function MainProvider({
  children
}: {
  children: React.ReactElement
}) {
  return (
    <>
    <ContextProvider>
      { children }
    </ContextProvider>
    </>
  )
}
 