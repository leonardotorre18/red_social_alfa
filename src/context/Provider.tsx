import React from "react"
import { context } from "./Context"

export default function ContextProvider ({
  children
}: {
  children: React.ReactElement
}) {

  const value = React.useContext(context)


  return (
    <>
    <context.Provider value={value}>
      { children }
    </context.Provider>
    </>
  )

}