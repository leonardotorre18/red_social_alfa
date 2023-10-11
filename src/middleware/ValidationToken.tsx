import React from 'react'
import { context } from '../context/Context'
import { Navigate } from 'react-router-dom'

export default function ValidationToken({
  children
}: {
  children: React.ReactElement
}) {
  const { state } = React.useContext(context)
  
  return (
    <>
      {
        state.auth ?
          children :
          <Navigate to={'/login'} />
      }
    </>
  )
}
