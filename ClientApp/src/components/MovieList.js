import React from "react";
import MovieCard from './MovieCard';
import './MovieList.css'

const MovieList = (props) => {
    // Sort movies by name
    const sortedMovies = props.movies.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
      });

    return (
        <div className="movies">{
            sortedMovies.filter(v => v.poster !== null).map((movie, index) => 
                <MovieCard key={index} movie={movie}/>
            )}
        </div>
    );
};

export default MovieList;