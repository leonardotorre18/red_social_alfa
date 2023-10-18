// import React from "react"
import { ACTIONS } from "../actions"
import { TPost } from "../types/post"
import { PostsReducer } from "./posts"
import { ENUM_POST } from "../actions/posts"
import { ENUM_TOKEN } from "../actions/token"
import { TokenReducer } from "./token"

export type State = {
  posts: TPost[],
  token: string | undefined
}
export const initialState: State = {
  posts: [],
  token: undefined
}

export const Reducer = (state: State, actions: ACTIONS): State => {

  if (actions.type in ENUM_POST) {
    return {
      ...state,
      posts: PostsReducer(state.posts, actions)
    }
  } else 
  if (actions.type in ENUM_TOKEN) {
    return {
      ...state,
      token: TokenReducer(state.token, actions)
    }

  }
  console.log(state)
  return state
}