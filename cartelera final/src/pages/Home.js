import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Asegúrate de que el nombre del archivo coincida con tu archivo CSS

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (endpoint, setState) => {
      try {
        const response = await axios.get(endpoint);
        setState(response.data.results);
      } catch (error) {
        console.error(`Error fetching movies from ${endpoint}:`, error);
      }
    };

    fetchMovies('https://api.themoviedb.org/3/movie/popular?api_key=652bb95c3eeddd689fa4a238e3619b1e', setPopularMovies);
    fetchMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=652bb95c3eeddd689fa4a238e3619b1e', setTopRatedMovies);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const settingsTopRated = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid">
  <div className="home-carousel">
    <Slider {...settings}>
      {popularMovies.map((movie) => (
        <div key={movie.id} className="carousel-item">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
            className="carousel-image"
          />
          {/* Contenedor para el título y el botón */}
          <div className="carousel-caption">
            <h3>{movie.title}</h3> {/* Título de la película */}
            {/* Botón que dirige a la página de compra */}
            <a href="/compra" className="btn btn-primary">
              Comprar Boletos
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>

      <div className="now-playing-carousel">
        <h2 style={{ fontFamily: 'Verdana' }}>Top Peliculas De La Historia</h2>
        <div className='linea-top-r'><hr /></div>
        <Slider {...settingsTopRated}>
        {topRatedMovies.map((movie) => (
    <div key={movie.id} className="slide-container" style={{ padding: '10px' }}>
      <div className="image-container">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="carousel-image-small"
        />
      </div>
    </div>
  ))}
   </Slider>
      </div>
      </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      Next
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
    >
      Prev
    </div>
  );
};

export default Home;
