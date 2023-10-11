import { axios } from "./config"

export const getPost = (token: string) => {
  return axios.get('/post', {
    headers: {
      Authorization: token
    }
  }).then(data => data.data)
}

