import React from "react"
import { State, initialState } from "./reducers"
import { ACTIONS } from "./actions"

export const context = React.createContext<{ state: State, dispatch: React.Dispatch<ACTIONS> }>({
  state: initialState,
  dispatch: () => initialState
})