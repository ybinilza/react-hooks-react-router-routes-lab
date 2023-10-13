import React from "react";
import { actors } from "../data";
import uuid from "react-uuid";

function Actors() {
  const actorList = actors.map((actor) => {
    return (
      <div key={uuid()}>
        <div key={uuid()}>{actor.name}</div>
        <ul>
          {actor.movies.map((movie) => {
            return <li key={uuid()}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <>
      <h1>Actors Page</h1>
      {actorList}
    </>
  );
}

export default Actors;