import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './CinemaSearch/componentsCinema/SharedLayout/SharedLayout';

const Home = lazy(() => import('./CinemaSearch/pages/Home/Home'));
const Movies = lazy(() => import('./CinemaSearch/pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./CinemaSearch/pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./CinemaSearch/componentsCinema/Cast/Cast'));
const Reviews = lazy(() =>
  import('./CinemaSearch/componentsCinema/Reviews/Reviews')
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
