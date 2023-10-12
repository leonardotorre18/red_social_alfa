import React from 'react'
import { context } from '../context/Context'
import { Navigate } from 'react-router-dom'

type PropTypes = {
  children: React.ReactElement
}

export default function ValidationTokenRoute({
  children
}: PropTypes) {
  
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
