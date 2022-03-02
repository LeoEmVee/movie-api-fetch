import { createContext, useEffect } from 'react';
import axiosFetch from '../../config/axios';

export const movieContext = createContext();

export default function MovieWrapper({ children }: any) {
  const initialState = {
    movies: [],
    movie: {}
  };

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axiosFetch('/movie/popular');
      console.log('result: ', data);
    };
    getMovies();
  }, []);

  return (
    <movieContext.Provider
      value={{
        movies: initialState.movies,
        movie: initialState.movie
      }}
    >
      {children}
    </movieContext.Provider>
  );
}
