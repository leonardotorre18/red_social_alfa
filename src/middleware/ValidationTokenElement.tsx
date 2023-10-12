import React from 'react'
import { context } from '../context/Context'

type PropTypes = {
  trueElement: React.ReactElement,
  falseElement: React.ReactElement
}

export default function ValidationTokenElement({
  trueElement,
  falseElement
}: PropTypes) {
  
  const { state } = React.useContext(context)
  
  return (
    <>
    {
      state.auth?.token ? 
        trueElement :
        falseElement
    }
    </>
  )
}
