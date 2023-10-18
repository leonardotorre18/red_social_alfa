import { ACTIONS } from "../actions";
import { ENUM_TOKEN } from "../actions/token";

export const TokenReducer = (state: string | undefined, actions: ACTIONS): string | undefined  => {
  switch (actions.type) {
    case ENUM_TOKEN.SET_TOKEN:
      return actions.payload
    
    case ENUM_TOKEN.CLEAR_TOKEN:
        return undefined
  
    default:
      return state;
  }
}