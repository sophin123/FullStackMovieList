import { logOut } from "../context/AuthContext/action";
import { getMovies } from "../context/MoviesContext/actions";
import { useAuthContext } from "./useAuthContext";
import { useMovieContext } from "./useMoviesContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: moviesDispatch } = useMovieContext();
  const logoutHandler = () => {
    localStorage.removeItem("user");

    logOut(dispatch);
    getMovies(moviesDispatch, null);
  };

  return { logoutHandler };
};
