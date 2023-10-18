import { TPost } from "../types/post";

export type ACTIONS_POST =
  TSetPost

export enum ENUM_POST {
  SET_POSTS = 'SET_POSTS'
}

export type TSetPost = {
  type: ENUM_POST,
  payload: TPost[]
}
export const setPosts = (posts: TPost[]): TSetPost => ({
  type: ENUM_POST.SET_POSTS,
  payload: posts
})