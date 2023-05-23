import React, { Component } from 'react';

export class FetchMovies extends Component {
  static displayName = FetchMovies.name;

  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    this.populateMovieData();
  }

  static renderMoviesTable(movie) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>Director</th>
            <th>Runtime</th>
            <th>Box Office</th>
          </tr>
        </thead>
        <tbody>
          <tr key={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.released}</td>
            <td>{movie.director}</td>
            <td>{movie.runtime}</td>
            <td>{movie.boxOffice}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchMovies.renderMoviesTable(this.state.movies);

    return (
      <div>
        <h1 id="tabelLabel" >Movies</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateMovieData() {
    const response = await fetch('movies');
    const data = await response.json();
    this.setState({ movies: data, loading: false });
  }
}
