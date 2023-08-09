import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from './MovieList.js';

const FetchMovies = ({title}) => {
  const [movies, setMovies] = useState([]);
  
  const getMovieRequest = async (movieTitle) => {
    let data;

    try {
      const response = await fetch(`/movies/?title=${movieTitle}`);
      data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log('Error parsing JSON:', error);
      console.log(data);
    }
  }

  useEffect(() => {
    if (title) {
      getMovieRequest(title);
    }
  }, [title])

  return (
    <MovieList movies={movies} />
  );
}

export default FetchMovies;