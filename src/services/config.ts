import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:3001/social",
  // auth: {
  //   username: "my_username",
  //   password: "my_password",
  // },
  // headers: {
  //   Authorization: "Bearer <YOUR_ACCESS_TOKEN>",
  //   "My-Custom-Header": "My-Custom-Value",
  // },
  // timeout: 10000,
});

