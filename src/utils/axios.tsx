import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
  },
});

export default instance;
// https://developer.themoviedb.org/reference/account-lists
