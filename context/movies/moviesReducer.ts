import { GET_MOVIES } from './moviesContext';

export default function moviesReducer(state: any, action: any) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
