import React from 'react';
import './MovieCard.css'

const MovieCard = (props) => (
    <div className="movie-card">
        <img src={props.movie.poster} alt="poster" />
        <div className="card-body">
            <h4 className="card-title">{props.movie.title}</h4>
            <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.year}</p>
        </div>
    </div>
);

export default MovieCard;