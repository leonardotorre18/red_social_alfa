export type TPost = {
  _id: string,
  body: string,
  user: {
    _id: string,
    name: string,
    email: string
  }
}