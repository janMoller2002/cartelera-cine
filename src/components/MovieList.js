import React, { useState, useEffect } from 'react';
import './style.css'; // Asegúrate de que el nombre del archivo coincida con tu archivo CSS
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=652bb95c3eeddd689fa4a238e3619b1e";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4"  style={{fontFamily: 'Verdana, sans-serif' }}>Cartelera</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" style={{ fontFamily: 'Verdana, sans-serif' }}>
            <MovieBox {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
