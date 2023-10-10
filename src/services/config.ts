import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://localhost:3001",
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

