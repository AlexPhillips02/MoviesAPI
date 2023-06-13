import React from "react";

const MovieList = (props) => {
    // Sort movies by name
    const sortedMovies = props.movies.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
      });

    return (
        <div class="row">
            {sortedMovies.map((movie, index) => 
                <div class="column">
                    <img src={movie.poster} alt="poster" />
                </div>
            )}
        </div>
    );
};

export default MovieList;