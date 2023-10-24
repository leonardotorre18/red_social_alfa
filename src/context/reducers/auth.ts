import { ACTIONS } from "../actions";
import { ENUM_AUTH } from "../actions/auth";

export const AuthReducer = (
    state: { token: string | undefined, id: string | undefined},
    actions: ACTIONS
): { token: string | undefined, id: string | undefined} => {
  switch (actions.type) {
    case ENUM_AUTH.SET_AUTH:
      return {
        ...state,
        token: actions.payload.token,
        id: actions.payload.id
      }
    
    case ENUM_AUTH.CLEAR_AUTH:
        return {
          ...state,
          token: undefined,
          id: undefined
        }
  
    default:
      return state;
  }
}