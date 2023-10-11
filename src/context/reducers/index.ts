import React from "react"
import { ACTIONS } from "../actions"

export type State = {
  message: string
}
export const initialState = {
  message: 'Funcionando correctamente'
}

export const Reducer = (): [ State, React.Dispatch<ACTIONS> ] => {

  return React.useReducer( (state: State, actions: ACTIONS) => {
    console.log(actions)
    return state
  }, initialState )

}