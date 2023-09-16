import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { searchFilmByCast } from 'shared/services/film-API';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const response = async () => {
      const { data } = await searchFilmByCast(movieId);
      setCast(data.cast);
    };

    response();
  }, [movieId]);

  const castList = cast.map(({ id, name }) => (
    <li key={id}>
      <p>{name}</p>
    </li>
  ));

  return <>{castList}</>;
};

export default Cast;
