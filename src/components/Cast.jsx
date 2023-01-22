import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/movieApi";
import { nanoid } from "nanoid";
import { StyledList, StyledItem, Img } from "./Cast.styled";


const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieCastById(movieId, setCast);
  }, [movieId]);

  return (
    <>
      <StyledList>
        {cast.length < 1 ? (
          <p>Sorry, the cast is not available!</p>
        ) : (
          cast.map(({ character, name, profile_path }) => (
            <StyledItem key={nanoid()}>
              {!profile_path && (
                <Img
                  src={'https://placehold.jp/200x300.png'}
                  alt={`just placeholder`}
                />
              )}
              {profile_path && (
                <Img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name}`}
                />
              )}
              <h4>Name: {name}</h4>
              <p>Character: {character}</p>
            </StyledItem>
          ))
        )}
      </StyledList>
    </>
  );
};

export default Cast;