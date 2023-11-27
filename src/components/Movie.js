import React from 'react';

const Movie = ({ title, posterPath }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  return (
    <div className="movie">
      <img src={imageURL} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Movie;