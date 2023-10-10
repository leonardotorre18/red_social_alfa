import React from 'react'
 
export default function MainProvider({
  children
}: {
  children: React.ReactElement
}) {
  return (
    <>
      { children }
    </>
  )
}
 