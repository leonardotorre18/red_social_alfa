// import React from "react"
import { ACTIONS } from "../actions"
import { TPost } from "../types/post"
import { PostsReducer } from "./posts"
import { ENUM_POST } from "../actions/posts"
import { ENUM_AUTH } from "../actions/auth"
import { AuthReducer } from "./auth"
import { TAuth } from "../types/auth"

export type State = {
  posts: TPost[],
  auth: TAuth
}
export const initialState: State = {
  posts: [],
  auth: {
    user: undefined,
    token: undefined,
  }
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
  console.log(state)
  return state
}