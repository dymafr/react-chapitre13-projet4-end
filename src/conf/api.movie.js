import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODFkZmU0MDZiMDhjY2FlYjUwMjRmY2QzM2UzYzFlOCIsInN1YiI6IjVjMGU4NTlmYzNhMzY4MjUyYTBjOTM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QG7-vvAvmEXOVUD2ZaONg5e_AHqXaTlPVLeDz7mzhDs'
  return req;
})

export default apiMovie;