import { useState, useEffect } from 'react';

import { Link, useSearchParams, useLocation } from 'react-router-dom';

import SearchBox from 'components/CinemaSearch/componentsCinema/SearchBox/SearchBox';
import { searchFilmApi } from 'shared/services/film-API';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const getSearch = search => {
    setSearchParams({ search });
  };

  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      const response = async () => {
        const { data } = await searchFilmApi(search);
        setMovies(data.results);
      };
      response();
    }
  }, [search]);

  const render = movies.map(({ id, original_title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <p>{original_title}</p>
      </Link>
    </li>
  ));

  return (
    <>
      <SearchBox getSearch={getSearch} />
      <div>
        <ul>{render}</ul>
      </div>
    </>
  );
};

export default Movies;
