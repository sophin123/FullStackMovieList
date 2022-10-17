import React, { useState } from "react";
import { createMovies } from "../context/MoviesContext/actions";
import { useMovieContext } from "../hooks/useMoviesContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function MoviesForm() {
  const { dispatch } = useMovieContext();

  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [rate, setRate] = useState("");
  const [error, setError] = useState(null);
  const [emptyField, setEmptyField] = useState([]);

  const addMoviesHandler = async (e) => {
    e.preventDefault();

    //if user doesnot exit, return

    const data = { title, release, rate };

    if (!user) {
      return;
    }

    const response = await fetch("/movies", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    // console.log("json", json);

    if (response.ok) {
      createMovies(dispatch, json);
      setEmptyField([]);
      setTitle("");
      setRelease("");
      setRate("");
      setError("");
    }

    if (!response.ok) {
      setError(json.error);
      setEmptyField(json.emptyField);
    }
  };

  return (
    <form className="create" onSubmit={addMoviesHandler}>
      <h3>Movies Form</h3>
      <label>Title</label>
      <input
        type={"text"}
        placeholder="Enter Movies Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyField?.includes("title") ? "error" : ""}
      />
      <label>Release Date</label>
      <input
        type={"text"}
        placeholder="Release Date"
        onChange={(e) => setRelease(e.target.value)}
        value={release}
        className={emptyField?.includes("release") ? "error" : ""}
      />

      <label>Rating</label>
      <input
        type={"number"}
        placeholder="Rating"
        onChange={(e) => setRate(e.target.value)}
        value={rate}
        max={10}
        className={emptyField?.includes("rate") ? "error" : ""}
      />
      <button>Add Movie</button>
      {error && <div className="error">{error} error</div>}
    </form>
  );
}
