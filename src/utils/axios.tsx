import axios from "axios"

const authorization_key: string = import.meta.env.AUTHORIZATION_KEY  

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: authorization_key
  }
})

export default instance
