import { createContext, useEffect, useReducer } from 'react';
import axiosFetch from '../../config/axios';
import moviesReducer from './moviesReducer';

export const movieContext = createContext();

export const GET_MOVIES = 'GET_MOVIES';

export default function MovieWrapper({ children }: any) {
  const initialState = {
    movies: [],
    movie: {}
  };

  const [state, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axiosFetch('/movie/popular');
      if (Object.keys(data).length) {
        dispatch({
          type: GET_MOVIES,
          payload: data.results
        });
      }
    };
    getMovies();
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
