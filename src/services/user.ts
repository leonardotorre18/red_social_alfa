import { axios } from "./config"

type User = {
  email: string,
  password: string
}
export const loginUser = (user: User) => axios.post('/login', user)

export const registerUser = (user: User) => axios.post('/register', user)