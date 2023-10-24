export type ACTIONS_AUTH = 
  TClearAuth |
  TSetAuth

export enum ENUM_AUTH {
  SET_AUTH = 'SET_AUTH',
  CLEAR_AUTH = 'CLEAR_AUTH'
}

type TClearAuth = {
  type: ENUM_AUTH.CLEAR_AUTH
}
export const clearAuth = (): TClearAuth => ({
  type: ENUM_AUTH.CLEAR_AUTH
})

type TSetAuth = {
  type: ENUM_AUTH.SET_AUTH,
  payload: {
    token: string,
    id: string
  }
}
export const setAuth = (token: string, id: string): TSetAuth => ({
  type: ENUM_AUTH.SET_AUTH,
  payload: {
    token: token,
    id: id
  }
})