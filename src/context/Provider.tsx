import React from "react"
import { context } from "./Context"
import { Reducer } from "./reducers"

export default function ContextProvider ({
  children
}: {
  children: React.ReactElement
}) {

  const [state, dispatch] = Reducer()



  return (
    <>
    <context.Provider value={{ state, dispatch }}>
      { children }
    </context.Provider>
    </>
  )

}