import MoviesList from '../components/MoviesList';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import api from '../services/movieApi';
import { Button, Input } from './Movies.styled';

const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query');
  const searchMovie = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formQuery = form.elements.query.value;
    if (formQuery === '') {
      return;
    }
    setSearchQuery({ query: formQuery });
    form.reset();
  };

  useEffect(() => {
    if (query === null) {
      setSearchedMovie([]);
      return;
    }
    api.fetchMovieByQuery(query, setSearchedMovie);
  }, [query]);

  const params = useParams();

  return (
    <>
      {!params.movieId && (
        <>
          <form onSubmit={searchMovie}>
            <Input type="text" name="query" />
            <Button type="submit">Search Movies</Button>
          </form>
          <MoviesList movies={searchedMovie} />
        </>
      )}
      {params.movieId && (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default Movies;
