import React from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
  return (
    <div className="movie-box">
      <img src={API_IMG + poster_path} alt={title} className="img-fluid" />
      <div className="movie-info">
        <h5>{title}</h5>
        <p>{`Rating: ${vote_average}`}</p>
      </div>
    </div>
  );
};

export default MovieBox;
