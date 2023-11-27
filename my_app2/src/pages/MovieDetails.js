import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../config';

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${match.params.id}?api_key=${API_KEY}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [match.params.id]);

  if (!movieDetails) {
    // Devolver el mensaje de carga sin un contenedor adicional
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Loading movie details...</p>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Vote Average: {movieDetails.vote_average}</p>
    </div>
  );
};

export default MovieDetails;