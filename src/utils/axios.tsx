import axios from "axios"

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
<<<<<<< HEAD
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZjNTYwZDUxNjkzZDU2N2YwNTk4ZmJmOTNjYmQzYSIsIm5iZiI6MTczNDQxODQ3MC41NDgsInN1YiI6IjY3NjEyMDI2YjgwYTk3NDI0NWNiZGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xP0gciqXhK8RN_yslj6PFMvoiJFXnYB7tygO-txuSpI'
  }
})

export default instance
=======
    accept: "application/json",
    Authorization:
  },
});

export default instance;
// https://developer.themoviedb.org/reference/account-lists
>>>>>>> 18a1979448b73936511d442eb6002ddea36a72a0
