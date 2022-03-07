import { GET_MOVIES, GET_MOVIE_BY_ID, GET_CAST } from './moviesContext';

export default function moviesReducer(state: any, action: any) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_MOVIE_BY_ID:
      return { ...state, movie: action.payload };
    case GET_CAST:
      return { ...state, cast: action.payload };
    default:
      return state;
  }
}
