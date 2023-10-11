// import React from "react"
import { ACTIONS } from "../actions"
import { TPost } from "../types/posts"
import { PostsReducer } from "./posts"
import { ENUM_POST } from "../actions/posts"
import { ENUM_AUTH } from "../actions/auth"
import { AuthReducer } from "./auth"
import { TAuth } from "../types/auth"

export type State = {
  posts: TPost[],
  auth: TAuth | undefined
}
export const initialState = {
  posts: [],
  auth: undefined
}

export const Reducer = (state: State, actions: ACTIONS): State => {

  if (actions.type in ENUM_POST) {
    return {
      ...state,
      posts: PostsReducer(state.posts, actions)
    }
  } else 
  if (actions.type in ENUM_AUTH) {
    return {
      ...state,
      auth: AuthReducer(state.auth, actions)
    }

  }
  return state
}