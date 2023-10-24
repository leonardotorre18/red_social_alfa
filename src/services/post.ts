import { axios } from "./config"

export const getPostServices = (token: string) => 
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
