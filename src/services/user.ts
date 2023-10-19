import { TUser } from "../context/types/user"
import { axios } from "./config"
import Axios from 'axios'

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


export const getSession = (token: string): Promise<TUser> => {
  return Axios.post('http://localhost:3001/social/session', {
    email: ''
  }, {
    headers: {
      Authorization: token
    }
  }).then(res => res.data.user)
// return  axios.post('/session', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     }
//   }).then(res => res.data)

}
export const getUserById = (id: string, token: string): Promise<{
  token: string,
  user: TUser
}> => 
  axios.get(`/users/id/${id}`, {
    headers: {
      Authorization: token
    }
  })
