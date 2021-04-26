import React from "react";
import requests from "../api";

function MoviesCategory({ setMoviesType }) {
  return (
    <div className="movies-category">
      <ul>
        <li onClick={() => setMoviesType(requests.fetchTrending)}>Trending</li>
        <li onClick={() => setMoviesType(requests.fetchTopRated)}>Top Rated</li>
        <li onClick={() => setMoviesType(requests.fetchActionMovies)}>
          Action
        </li>
        <li onClick={() => setMoviesType(requests.fetchComedyMovies)}>
          Comedy
        </li>
        <li onClick={() => setMoviesType(requests.fetchHorrorMovies)}>
          Horror
        </li>
        <li onClick={() => setMoviesType(requests.fetchRomanceMovies)}>
          Romance
        </li>
        <li onClick={() => setMoviesType(requests.fetchDocumentaries)}>
          Documentaries
        </li>
        <li onClick={() => setMoviesType(requests.fetchTrending)}>
          My Channels
        </li>
        <li onClick={() => setMoviesType(requests.fetchActionMovies)}>News</li>
        <li onClick={() => setMoviesType(requests.fetchComedyMovies)}>
          Sports
        </li>
        <li onClick={() => setMoviesType(requests.fetchHorrorMovies)}>TV</li>
        <li onClick={() => setMoviesType(requests.fetchDocumentaries)}>Kids</li>
        <li onClick={() => setMoviesType(requests.fetchRomanceMovies)}>
          Keep Watching
        </li>
      </ul>
    </div>
  );
}

export default MoviesCategory;
