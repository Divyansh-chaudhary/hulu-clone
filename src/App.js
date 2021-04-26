import "./css/app.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MoviesCategory from "./components/MoviesCategory";
import MoviesLists from "./components/MoviesLists";
import requests from "./api";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [moviesType, setMoviesType] = useState(requests.fetchTrending);

  useEffect(() => {
    fetch(moviesType)
      .then((data) => data.json())
      .then((data) => setMovies(data.results))
      .catch((err) => alert(err));
  }, [moviesType]);

  return (
    <div className="app">
      <Navbar />
      <MoviesCategory setMoviesType={setMoviesType} />
      <MoviesLists movies={movies} />
    </div>
  );
};

export default App;
