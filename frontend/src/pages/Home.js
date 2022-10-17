import React, { useEffect } from "react";
import Movies from "../component/Movies";
import MoviesForm from "../component/MoviesForm";
import { getMovies } from "../context/MoviesContext/actions";

import { useMovieContext } from "../hooks/useMoviesContext";
import { useAuthContext } from "../hooks/useAuthContext";

function Home() {
  const { movies, dispatch } = useMovieContext();
  const { user } = useAuthContext();

  console.log(useMovieContext(), "context");

  console.log(movies);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/movies", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const data = await response.json();

      if (response.ok) {
        getMovies(dispatch, data);
      }
    }

    if (user) {
      fetchData();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="movies">
        {movies &&
          movies.map((data) => <Movies movies={data} key={data._id} />)}
      </div>
      <MoviesForm />
    </div>
  );
}

export default Home;
