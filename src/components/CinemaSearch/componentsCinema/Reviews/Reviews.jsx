import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { searchFilmByReviews } from 'shared/services/film-API';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await searchFilmByReviews(movieId);
      console.log(data);
      setReviews(data.results);
    };

    response();
  }, [movieId]);

  const reviewsList = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <p>{author}</p>
      <p>{content}</p>
    </li>
  ));

  return <>{reviewsList}</>;
};

export default Reviews;
