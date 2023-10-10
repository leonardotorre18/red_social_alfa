import { axios } from "./config"

type User = {
  email: string,
  password: string
}
export const loginUser = (user: User) => {
  console.log(user)
  return axios.post('/login', user)
}