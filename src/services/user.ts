import { axios } from "./config"

type Auth = {
  email: string,
  password: string
  
}
export const loginUser = (user: Auth) => 
axios.post('/login', user)
.then(res => res.data)


type User = {
  email: string,
  password: string,
  name: string
}
export const registerUser = (user: User) => 
  axios.post('/register', user)
    .then(res => res.data)