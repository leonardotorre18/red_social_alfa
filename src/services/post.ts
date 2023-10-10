import { axios } from "./config"

export const getPost = (token: string) => {
  console.log(token)
  return axios.get('/post')
}

