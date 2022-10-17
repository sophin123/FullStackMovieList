import React, { useState } from "react";
import { useMovieContext } from "../hooks/useMoviesContext";
import { formatDistanceToNow } from "date-fns";
import { deleteMovies, updateMovies } from "../context/MoviesContext/actions";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Movies({ movies }) {
  const { dispatch } = useMovieContext();
  const { user } = useAuthContext();

  // const [updateMovies, setUpdateMovies] = useState(null);

  const deleteHandler = async (e) => {
    if (!user) {
      return;
    }
    const response = await fetch(`/movies/${movies._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    });
    const json = await response.json();

    if (response.ok) {
      deleteMovies(dispatch, json);
    }

    if (!response.ok) {
      alert("ID is not valid");
    }
  };

  const updateHandler = async (e) => {
    console.log("Movies", movies);

    updateMovies(dispatch, movies);

    // const response = await fetch("/movies/" + movies._id, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    // });
  };
  return (
    <div className="movies-details">
      <p>{movies.title}</p>
      <p>{movies.rate}</p>
      <p>
        {formatDistanceToNow(new Date(movies?.createdAt), { addSuffix: true })}
      </p>
      {/* <button onClick={(e) => updateHandler(e)}>Update</button> */}
      <button onClick={(e) => deleteHandler(e)}>Delete</button>
    </div>
  );
}
