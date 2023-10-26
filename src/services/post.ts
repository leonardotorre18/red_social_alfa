import { TPost } from "../context/types/post"
import { axios } from "./config"

export const getPostServices = (token: string): Promise<TPost[]> => 
  axios.get('/post', {
    headers: {
      Authorization: token
    }
  }).then(data => data.data.posts)


export const addPost = (
  token: string,
  post: { 
    user: string,
    body:string
  }
) => 
  axios.post('/post/add', {
    id: post.user,
    body: post.body
  }, {
    headers: {
      Authorization: token
    }
  })  


export const deletePostService = ( id: string, token: string) => 
  axios.delete('/post/delete', {
    data: {
      id, 
      token
    },
    headers: {
      Authorization: token
    },
  }, )