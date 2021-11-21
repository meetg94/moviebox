import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3 className="card-title"card-title>{title}</h3>
            <div className="card-ratings">
                <span className="card-rating">Rating:</span><span className="card-rating"> {vote_average}</span>
            </div>
        </div>

        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>


    </div>
)

export default Movie;