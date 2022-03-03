import { createContext, useEffect, useReducer } from 'react';
import moviesReducer from './moviesReducer';
import { getMovies } from '../../helpers/crud';

export const movieContext = createContext();

export const GET_MOVIES = 'GET_MOVIES';

export default function MovieWrapper({ children }: any) {
  const initialState = {
    movies: [],
    movie: {}
  };

  const [state, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies('/movie/popular');
      if (Object.keys(movies).length) {
        dispatch({
          type: GET_MOVIES,
          payload: movies.results
        });
      }
    };
    fetchMovies();
  }, []);

  return (
    <movieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie
      }}
    >
      {children}
    </movieContext.Provider>
  );
}
