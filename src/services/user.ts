import { axios } from "./config"

type TLogin = {
  email: string,
  password: string
  
}
export const loginUser = (user: TLogin) => 
axios.post('/login', user)
.then(res => res.data)


type TRegister = {
  email: string,
  password: string,
  name: string
}
export const registerUser = (user: TRegister) => 
  axios.post('/register', user)
    .then(res => res.data)


export const refreshSession = (token: string) => 
  axios.post('/me', {
    headers: {
      Authorization: token
    }
  }).then(res => res.data)