import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'adda9a4c76497ae7ac6c1263f748732e';
axios.defaults.params = { api_key: API_KEY };

export const fetchTrendingMovies = async () => {
    try {
        const responce = await axios.get(`trending/movie/day`);
        return responce.data;
    } catch (error) { console.log(error); }
};

export const fetchSearchMovies = async (query) => {
    try {
        const responce = await axios.get(`/search/movie?query=${query}`);
        return responce.data;
    } catch (error) { console.log(error); }
};

export const fetchMovieDetails = async (movieId) => {
    try {
        const responce = await axios.get(`/movie/${movieId}`);
        return responce.data;
    } catch (error) { console.log(error); }
};
export const fetchCast = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReview = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};


