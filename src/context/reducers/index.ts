import React from "react"
import { ACTIONS } from "../actions"
import { TPost } from "../types/posts"
import { PostsReducer } from "./posts"
import { ENUM_POST } from "../actions/posts"

export type State = {
  posts: TPost[]
}
export const initialState = {
  posts: []
}

export const Reducer = (): [ State, React.Dispatch<ACTIONS> ] => {

  return React.useReducer( (state: State, actions: ACTIONS) => {

    if (actions.type in ENUM_POST) {
      return {
        ...state,
        posts: PostsReducer(state.posts, actions)
      }
    }


    return state
  }, initialState )

}