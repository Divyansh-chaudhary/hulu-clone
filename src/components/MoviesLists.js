import React from "react";
import MovieCard from "./MovieCard";
import FlipMove from "react-flip-move";

function MoviesLists({ movies }) {
  return (
    <FlipMove className="movies-list flip-wrapper" typeName="div">
      {movies &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </FlipMove>
  );
}

export default MoviesLists;
