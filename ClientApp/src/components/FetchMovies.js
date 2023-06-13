import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from './MovieList.js';
import './FetchMovies.css'

const FetchMovies = () => {
  const [movies, setMovies] = useState([]);

  const getMoiveRequest = async (title) =>
  {
    title = "Toy"
    const response = await fetch('movies/?title={' + title + '}');
    const data = await response.json();

    setMovies(data)
  }

  useEffect(() => {
    getMoiveRequest();
  }, [])

  return (
    <MovieList movies={movies} />
  );
}

export default FetchMovies;