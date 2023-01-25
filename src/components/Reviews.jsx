import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/movieApi';
import PropTypes from 'prop-types';
import { StyledList, StyledItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieReviewsById(movieId, setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length < 1 ? (
        <p>Sorry, no one has reviewed this title yet!</p>
      ) : (
        <StyledList>
          {reviews.map(({ author, content, id }) => (
            <StyledItem key={id}>
              <p>{content}</p>
              <h4>Review author: {author}</h4>
            </StyledItem>
          ))}
        </StyledList>
      )}
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Reviews;
