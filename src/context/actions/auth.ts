import { TAuth } from "../types/auth"

export type ACTIONS_AUTH = 
  TLogin

export enum ENUM_AUTH {
  SET_AUTH = 'SET_AUTH'
}

export type TLogin = {
  type: ENUM_AUTH.SET_AUTH,
  payload: TAuth
}
export const login = (auth: TAuth): TLogin => ({
  type: ENUM_AUTH.SET_AUTH,
  payload: auth
})