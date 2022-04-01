import { createContext, useEffect, useReducer } from 'react';
import moviesReducer from './moviesReducer';
import { getMovies } from '../../helpers/crud';
import { cleanData } from '../../helpers/cleanData';

export const movieContext = createContext({});

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID';
export const GET_CAST = 'GET_CAST';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export default function MovieWrapper({ children }: any) {
  const initialState = {
    movies: [],
    movie: {},
    cast: [],
    searchMovie: []
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

  const getMovieById = (payload: any) => {
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload
    });
  };

  const getCast = (payload: any) => {
    dispatch({
      type: GET_CAST,
      payload
    });
  };

  const searchMovies = (payload: any) => {
    const cleanPayload = cleanData(payload, 'backdrop_path');
    dispatch({
      type: SEARCH_MOVIES,
      payload: cleanPayload
    });
  };

  return (
    <movieContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        cast: state.cast,
        searchMovie: state.searchMovie,
        getMovieById: getMovieById,
        getCast: getCast,
        searchMovies: searchMovies
      }}
    >
      {children}
    </movieContext.Provider>
  );
}
