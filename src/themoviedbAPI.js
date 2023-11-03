import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b7037ea4e858804a2d30090948f59431';

export const getTrendingMovies = async () => {
    const request = await axios.get(`${BASE_URL}trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const { data } = request;
    return data.results
}

export const getMoviesById = async (movieId) => {
    const request = await axios.get(`${BASE_URL}movie/${movieId}?language=en-US&api_key=${API_KEY}`);
    const { data } = request;
    return data
}

export const getActorsByMovieId = async (movieId) => {
    const request = await axios.get(`${BASE_URL}movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`);
    const { data } = request;
    return data.cast
}
export const getReviewsByMovieId = async (movieId) => {
    const request = await axios.get(`${BASE_URL}movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`);
    const { data } = request;
    return data.results
}

export const getSearchMovie = async (searchQuery) => {
    const request = await axios.get(`${BASE_URL}search/movie?query=${searchQuery}&language=en-US&api_key=${API_KEY}`);
    const { data } = request;
    return data.results
}
