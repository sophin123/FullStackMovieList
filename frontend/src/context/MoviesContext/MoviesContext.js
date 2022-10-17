import { createContext, useReducer } from "react";
import {
  CREATE_MOVIES,
  DELETE_MOVIES,
  GET_MOVIES,
  UPDATE_MOVIES,
} from "./actions";

export const MoviesContext = createContext();

const initialState = {
  movies: null,
  updateMovies: null,
};

export const moviesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        movies: payload,
      };
    case CREATE_MOVIES:
      return {
        movies: [payload, ...state.movies],
      };
    case DELETE_MOVIES:
      return {
        movies: state.movies.filter((m) => m._id !== payload._id),
      };
    case UPDATE_MOVIES:
      return {
        updateMovies: [payload],
      };
    default:
      return state;
  }
};

export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  console.log("Update Movies", state.updateMovies);
  return (
    <MoviesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
};
