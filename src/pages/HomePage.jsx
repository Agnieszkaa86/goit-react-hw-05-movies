import { useEffect, useState } from 'react';
import api from '../services/movieApi';
import MoviesList from '../components/MoviesList';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    api.fetchTrending(setTrendingMovies);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </>
  );
}

export default HomePage;
