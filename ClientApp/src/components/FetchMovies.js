import React, { Component } from 'react';

export class FetchMovies extends Component {
  static displayName = FetchMovies.name;

  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
    this.onSubmit = this.onSubmit.bind(this);
    this.populateMovieData("Spiderman 2");
  }

  onSubmit(event) {
    event.preventDefault();
    this.state = { movies: [], loading: true };
    var title = this.title.value;
    console.log(title);
    this.populateMovieData(title);
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
        <form>
          <label>
            Movie Title:
            <input type="text" name="title" ref={(c) => this.title = c}/>
          </label>
            <input type="submit" value="Submit" onClick={this.onSubmit}/>
        </form>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateMovieData(title) {
    console.log("2nd: " + title);
    const response = await fetch('movies/?title={' + title + '}');
    
    const data = await response.json();
    this.setState({ movies: data, loading: false });
  }
}
