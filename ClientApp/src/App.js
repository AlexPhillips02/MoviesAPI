import React from 'react';
import FetchMovies from './components/FetchMovies';
import MovieSearch from './components/MovieSearch';

const App = () => {
  return (
    <div>
      <MovieSearch/>
      <FetchMovies/>
    </div>
  )
}

export default App;