import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Agrega tu archivo de estilos si es necesario

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=652bb95c3eeddd689fa4a238e3619b1e";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseConfirmation, setPurchaseConfirmation] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => setMovies(data.results));
  }, []);

  useEffect(() => {
    // Cargar datos de compra desde localStorage
    const storedSeats = localStorage.getItem('selectedSeats');
    const storedTotalPrice = localStorage.getItem('totalPrice');

    if (storedSeats && storedTotalPrice) {
      setSelectedSeats(JSON.parse(storedSeats));
      setTotalPrice(Number(storedTotalPrice));
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeats([]);
    setTotalPrice(0);
    setPurchaseConfirmation(false); // Reiniciar el estado de confirmación de compra
  };

  const handleSeatSelection = (seat) => {
    const seatIndex = selectedSeats.indexOf(seat);

    if (seatIndex === -1) {
      setSelectedSeats([...selectedSeats, seat]);
      setTotalPrice(totalPrice + 10);
    } else {
      const newSelectedSeats = [...selectedSeats];
      newSelectedSeats.splice(seatIndex, 1);
      setSelectedSeats(newSelectedSeats);
      setTotalPrice(totalPrice - 10);
    }
  };

  const handlePurchase = () => {
    // Almacenar datos de compra en localStorage
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    localStorage.setItem('totalPrice', totalPrice);

    setPurchaseConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setPurchaseConfirmation(false);
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="my-4" style={{ fontFamily: 'Cairo', marginBottom: '60px' }}>Compra de Boletos</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Selecciona una película</h2>
          <div className="list-group">
            {movies.map((movie) => (
              <button
                key={movie.id}
                onClick={() => handleMovieSelection(movie)}
                className={`list-group-item ${selectedMovie === movie ? 'active' : ''}`}
              >
                {movie.title}
              </button>
            ))}
          </div>
        </div>
        {selectedMovie && (
          <div className="col-md-6">
            <h2>Compra de Tickets - {selectedMovie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="img-fluid mb-4"
            />
            <div className="seat-container">
              {[...Array(6)].map((_, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                  {[...Array(8)].map((_, seatIndex) => (
                    <button
                      key={seatIndex}
                      onClick={() => handleSeatSelection(`${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`)}
                      className={`btn ${selectedSeats.includes(`${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`) ? 'btn-danger' : 'btn-success'} mr-2 mb-2 seat-btn`}
                      disabled={selectedSeats.includes(`${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`)}
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
  );
};

export default App;

