import React from "react"
import { context } from "./Context"
import { Reducer, initialState } from "./reducers"

export default function ContextProvider ({
  children
}: {
  children: React.ReactElement
}) {

  const [state, dispatch] = React.useReducer(Reducer, initialState)

  return (
    <>
    <context.Provider value={{ state, dispatch }}>
      { children }
    </context.Provider>
    </>
  )

}