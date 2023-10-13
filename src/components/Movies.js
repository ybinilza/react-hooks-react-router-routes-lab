import React from "react";
import { movies } from "../data";
import uuid from "react-uuid";

function Movies() {
  const movieList = movies.map((movie) => {
    return (
      <div key={uuid()}>
        <h1 key={uuid()}>{movie.title}</h1>
        <p key={uuid()}>{movie.time}</p>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={uuid()}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
}

export default Movies;
