import { TAuth } from "../types/auth"

export type ACTIONS_AUTH = 
  TLogin |
  TLogout

export enum ENUM_AUTH {
  SET_AUTH = 'SET_AUTH',
  CLEAR_AUTH = 'CLEAR_AUTH'
}

export type TLogin = {
  type: ENUM_AUTH.SET_AUTH,
  payload: TAuth
}
export const login = (auth: TAuth): TLogin => ({
  type: ENUM_AUTH.SET_AUTH,
  payload: auth
})

export type TLogout = {
  type: ENUM_AUTH.CLEAR_AUTH
}
export const logout = (): TLogout => ({
  type: ENUM_AUTH.CLEAR_AUTH
})