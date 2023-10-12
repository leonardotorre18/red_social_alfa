import { axios } from "./config"

export const getPostServices = (token: string) => 
  axios.get('/post', {
    headers: {
      Authorization: token
    }
  }).then(data => data.data.posts)


