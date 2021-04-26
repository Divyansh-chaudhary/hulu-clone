import React from "react";
import { FaFire } from "react-icons/fa";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="movie-card">
      <div
        className="movie-img"
        style={{
          background: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="content">
        <p>{movie.overview}</p>
        <h2>
          {movie.original_name ? movie.original_name : movie.original_title}
        </h2>
        <p className="timestamp">
          {movie.release_date} <FaFire /> {movie.vote_count}{" "}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
