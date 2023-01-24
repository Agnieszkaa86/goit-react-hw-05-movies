import axios from 'axios';

const API_KEY = 'e31c232cf532b70b960b6c4d5d67c018';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchTrending = async setTrendingMovies => {
  try {
    const response = await axios.get(
      `trending/movie/day?api_key=${API_KEY}`
    );
    return setTrendingMovies(response.data.results);
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieById = async (movieId, setMovie) => {
  try {
    const response = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return setMovie(response.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieCastById = async (movieId, setCast) => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return setCast(response.data.cast);
  } catch (error) {
    console.error(error);
  }
};

const fetchMovieReviewsById = async (movieId, setReviews) => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return setReviews(response.data.results);
  } catch (error) {
    console.error(error);
  }
};

const fetchMovieByQuery = async (query, setSearchedMovie) => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
    );
    return setSearchedMovie(response.data.results);
  } catch (error) {
    console.error(error);
  }
};

const api = {
  fetchTrending,
  fetchMovieById,
  fetchMovieCastById,
  fetchMovieReviewsById,
  fetchMovieByQuery,
};

export default api;
