import React, {useEffect, useState} from 'react';
import { useLocation,useNavigate, useParams } from 'react-router-dom';
import api from "../services/movieApi";
import MovieDetails from '../components/MovieDetails';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button } from "./MovieDetailsPage.styled";

const MoviesDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const backTo = location.state?.from ?? '/';

  useEffect(() => {
    api.fetchMovieById(movieId, setMovie);
  }, [movieId]);

  return (
    <>
      <Button
        onClick={() => {
          navigate(backTo, { replace: true });
        }}
      >
        <IoIosArrowRoundBack /> Go back
      </Button>
      <MovieDetails movie={movie} />
    </>
  );
};

export default MoviesDetailsPage;
