import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FetchFilm } from 'components/API/API';
import { MovieList } from 'components/MovieList/MovieList';
import { MovieForm } from './Pages.styled';
const Movie = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const searchQuery = query.get('query');
    if (searchQuery) FetchFilm(searchQuery).then(setMovies);
    if (!searchQuery) {
      setMovies(null);
      setQuery({});
    }
  }, [query, setQuery]);

  function handleSubmit(e) {
    e.preventDefault();
    setQuery({
      query: e.currentTarget.elements.search.value,
    });
    e.currentTarget.reset();
  }

  return (
    <MovieForm>
      <form onSubmit={handleSubmit}>
        <h2>Movies</h2>
        <label htmlFor="movieSearch">Movie to search</label>
        <input
          autoComplete="off"
          type="text"
          id="movieSearch"
          placeholder="Write the movie to search"
          name="search"
        />
        <button type="submit">Search</button>
        {movies?.length > 0 && (
          <>
            <h2>List movies</h2>
            <MovieList data={movies} />
          </>
        )}
      </form>
    </MovieForm>
  );
};

export default Movie;
