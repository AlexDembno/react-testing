import axios from 'axios';

const API_KEY = '6c57fb02719926393bb8c06aa147886f';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const searchFilmApi = search =>
  instance.get(`/search/movie`, {
    params: {
      query: search, // Используйте параметр "query" для передачи поискового запроса
    },
  });

export const searchFilmByID = id => instance.get(`/movie/${id}&language=en-US`);

export const searchFilmTrending = () => instance.get(`/trending/movie/day`);

export const searchFilmByCast = id => instance.get(`/movie/${id}/credits`);

export const searchFilmByReviews = id => instance.get(`/movie/${id}/reviews`);
