import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, InfoWrapper, StyledLink, Undertitle} from './MovieDetails.styled';
import Loader from './Loader';

const MovieDetails = ({ movie }) => {
  const location = useLocation();

  const { title, overview, vote_average, genres, poster_path } = movie;
  return (
    <>
      <Wrapper>
        <div>
          {!poster_path && (
            <img
              src={'https://placehold.co/500x750'}
              alt={`just placeholder`}
            />
          )}
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`${title} movie poster`}
            />
          )}
        </div>
        <InfoWrapper>
          <h1>{title}</h1>
          <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres?.map(({ name }) => name + ', ')}</p>
        </InfoWrapper>
      </Wrapper>
      <div>
        <Undertitle>Additional information</Undertitle>
        <ul>
          <li>
            <StyledLink to={`cast`} state={location.state}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to={`reviews`} state={location.state}>
              Reviews
            </StyledLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      vote_average: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieDetails;
