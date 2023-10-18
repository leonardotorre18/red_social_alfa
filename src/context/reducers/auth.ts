import { ACTIONS } from "../actions";
import { ENUM_AUTH } from "../actions/auth";
import { TAuth } from "../types/auth";

export const AuthReducer = (state: TAuth, actions: ACTIONS): TAuth  => {
  switch (actions.type) {
    case ENUM_AUTH.SET_AUTH:
      return actions.payload
    
    case ENUM_AUTH.CLEAR_AUTH:
        return { user: undefined, token: undefined }
  
    default:
      return state;
  }
}