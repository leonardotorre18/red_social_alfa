import { ACTIONS } from "../actions"
import { ENUM_POST } from "../actions/posts"
import { TPost } from "../types/posts"


export const PostsReducer = ( state: TPost[], actions: ACTIONS ): TPost[]  => {
  switch (actions.type) {
    case ENUM_POST.SET_POSTS:
      return actions.payload
      
  
    default:
      return state
  }
}