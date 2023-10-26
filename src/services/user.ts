import { TUser } from "../context/types/user"
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


export const getSession = (token: string): Promise<TUser> => 
  axios.post('/session', {}, {
    headers: {
      Authorization: token
    }
  }).then(res => res.data.user)

export const getUserById = (id: string, token: string): Promise<{
  token: string,
  user: TUser
}> => 
  axios.get(`/users/id/${id}`, {
    headers: {
      Authorization: token
    }
  }).then(res => res.data)
