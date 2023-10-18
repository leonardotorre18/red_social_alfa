export type ACTIONS_TOKEN = 
  TClearToken |
  TSetToken
//   TLogin |
//   TLogout

export enum ENUM_TOKEN {
  SET_TOKEN = 'SET_TOKEN',
  CLEAR_TOKEN = 'CLEAR_TOKEN'
  // SET_AUTH = 'SET_AUTH',
  // CLEAR_AUTH = 'CLEAR_AUTH'
}

// export type TLogin = {
//   type: ENUM_AUTH.SET_AUTH,
//   payload: TAuth
// }
// export const login = (auth: TAuth): TLogin => ({
//   type: ENUM_AUTH.SET_AUTH,
//   payload: auth
// })

// export type TLogout = {
//   type: ENUM_AUTH.CLEAR_AUTH
// }
// export const logout = (): TLogout => ({
//   type: ENUM_AUTH.CLEAR_AUTH
// })

type TClearToken = {
  type: ENUM_TOKEN.CLEAR_TOKEN
}
export const clearToken = (): TClearToken => ({
  type: ENUM_TOKEN.CLEAR_TOKEN
})

type TSetToken = {
  type: ENUM_TOKEN.SET_TOKEN,
  payload: string
}
export const setToken = (token: string): TSetToken => ({
  type: ENUM_TOKEN.SET_TOKEN,
  payload: token
})