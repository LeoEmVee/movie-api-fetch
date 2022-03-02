import { createContext } from 'react';

export const movieContext = createContext();

export default function MovieWrapper({ children }: any) {
  const initialState = {
    movies: [],
    movie: {}
  };

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
