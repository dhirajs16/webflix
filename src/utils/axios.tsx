import axios from "axios"

const authorization_key: string = import.meta.env.AUTHORIZATION_KEY  

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    // Authorization: authorization_key
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZjNTYwZDUxNjkzZDU2N2YwNTk4ZmJmOTNjYmQzYSIsIm5iZiI6MTczNDQxODQ3MC41NDgsInN1YiI6IjY3NjEyMDI2YjgwYTk3NDI0NWNiZGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xP0gciqXhK8RN_yslj6PFMvoiJFXnYB7tygO-txuSpI'

  }
})

export default instance
