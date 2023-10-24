// import React from "react"
import { ACTIONS } from "../actions"
import { TPost } from "../types/post"
import { PostsReducer } from "./posts"
import { ENUM_POST } from "../actions/posts"
import { ENUM_AUTH } from "../actions/auth"
import { AuthReducer } from "./auth"

export type State = {
  posts: TPost[],
  auth: {
    token: string | undefined,
    id: string | undefined
  }
}
export const initialState: State = {
  posts: [],
  auth: {
    token: undefined,
    id: undefined
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