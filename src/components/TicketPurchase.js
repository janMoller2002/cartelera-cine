import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import cinemaImage from './cine.jpg';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=652bb95c3eeddd689fa4a238e3619b1e";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseConfirmation, setPurchaseConfirmation] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  const handleMovieChange = (event) => {
    setSelectedMovieId(event.target.value);
    setSelectedSeats([]);
    setTotalPrice(0);
    setPurchaseConfirmation(false);
  };

  const handleSeatSelection = (seat) => {
    const seatIndex = selectedSeats.indexOf(seat);
    if (seatIndex === -1) {
      setSelectedSeats([...selectedSeats, seat]);
      setTotalPrice(totalPrice + 10);
    } else {
      const newSelectedSeats = selectedSeats.filter(s => s !== seat);
      setSelectedSeats(newSelectedSeats);
      setTotalPrice(totalPrice - 10);
    }
  };

  const handlePurchase = () => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    localStorage.setItem('totalPrice', totalPrice.toString());
    setPurchaseConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setPurchaseConfirmation(false);
  };

  const selectedMovie = movies.find(movie => movie.id.toString() === selectedMovieId);

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="my-4">Compra de Boletos</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-4">
          <h2>Selecciona una película</h2>
          <select className="form-control" onChange={handleMovieChange} value={selectedMovieId}>
            <option value="">-- Elige una película --</option>
            {movies.map(movie => (
              <option key={movie.id} value={movie.id}>{movie.title}</option>
            ))}
          </select>

          {selectedMovie && (
            <div className="movie-details mt-4">
              <h3>{selectedMovie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="img-fluid mb-4"
                style={{ borderRadius: '6px'}}
              />
            </div>
          )}
        </div>
        <div className="col-md-8 custom-seat-margin">
          {selectedMovie && (
            <div>
            {/* Imagen referencial del cine */}
            <img src={cinemaImage} alt="Cinema Layout" className="img-fluid mb-4" style={{ borderRadius: '8px', width:'85%' }}/>
              {/* Aquí iría la lógica para mostrar y seleccionar los asientos */}
              <div className="seat-container">
              {[...Array(6)].map((_, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {[...Array(10)].map((_, seatIndex) => (
                    <button
                      key={seatIndex}
                      onClick={() => handleSeatSelection(`${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`)}
                      className={`btn ${selectedSeats.includes(`${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`) ? 'btn-danger' : 'btn-success'} mr-2 mb-2 seat-btn`}
                    >
                      {`${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`}
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <p>Total a Pagar: ${totalPrice}</p>
            <button onClick={handlePurchase} className="btn btn-primary">Comprar Tickets</button>
            {purchaseConfirmation && (
              <div className="alert alert-success mt-3" role="alert">
                Compra realizada con éxito. Total pagado: ${totalPrice}
                <button type="button" className="close" onClick={handleConfirmationClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default App;



