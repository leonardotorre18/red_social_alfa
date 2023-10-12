import { ACTIONS } from "../actions";
import { ENUM_AUTH } from "../actions/auth";
import { TAuth } from "../types/auth";

export const AuthReducer = (state: TAuth | undefined, actions: ACTIONS): TAuth | undefined => {
  switch (actions.type) {
    case ENUM_AUTH.SET_AUTH:
      return actions.payload
    
    case ENUM_AUTH.CLEAR_AUTH:
        return undefined
  
    default:
      return state;
  }
}