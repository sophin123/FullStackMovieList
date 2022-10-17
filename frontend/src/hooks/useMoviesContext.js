import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext/MoviesContext";

export const useMovieContext = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw Error(
      "value is not accessible. Please make sure to use MoviesContextProvider is place at top of component"
    );
  }
  return context;
};
