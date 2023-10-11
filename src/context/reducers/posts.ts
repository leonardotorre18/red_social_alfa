import { ACTIONS_POST, ENUM_POST } from "../actions/posts"
import { TPost } from "../types/posts"


export const PostsReducer = ( state: TPost[], actions: ACTIONS_POST ): TPost[]  => {
  switch (actions.type) {
    case ENUM_POST.SET_POSTS:
      return actions.payload
      
  
    default:
      return state
  }
}