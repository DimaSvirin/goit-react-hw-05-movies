import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import('./Pages/HomePage'));
const Movie = lazy(() => import('./Pages/Movie'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(()=>import('./Reviews/Reviews'))

export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='/movies' element={<Movie />} />
      <Route path="/movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
  </Routes>
  );
};
