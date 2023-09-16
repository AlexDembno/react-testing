import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { searchFilmTrending } from 'shared/services/film-API';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const responce = async () => {
      const { data } = await searchFilmTrending();
      setMovies(data.results);
    };

    responce();
  }, []);

  const render = movies.map(({ id, original_title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <p>{original_title}</p>
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{render}</ul>
    </div>
  );
};

export default Home;
