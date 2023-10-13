import React from "react";
import { directors } from "../data";
import uuid from "react-uuid";

function Directors() {
  const directorList = directors.map((director) => {
    return (
      <div key={uuid()}>
        <div key={uuid()}>{director.name}</div>
        <ul>
          {director.movies.map((movie) => {
            return <li key={uuid()}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors;