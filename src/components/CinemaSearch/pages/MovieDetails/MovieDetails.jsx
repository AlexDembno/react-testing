import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

import { searchFilmByID } from 'shared/services/film-API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  const location = useLocation();

  useEffect(() => {
    const responce = async () => {
      const { data } = await searchFilmByID(movieId);
      setMovie(data);
    };

    responce();
  }, [movieId]);

  const backLink = location.state?.from ?? '/home';
  return (
    <>
      {movie && (
        <>
          <Link to={backLink}>Came back</Link>
          <p>{movie.title}</p>
          <img
            style={{ width: 200, height: 300 }}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
