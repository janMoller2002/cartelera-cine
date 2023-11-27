import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=652bb95c3eeddd689fa4a238e3619b1e`);
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
          params: {
            api_key: '652bb95c3eeddd689fa4a238e3619b1e',
          },
        });
        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };

    fetchPopularMovies();
    fetchTopRatedMovies();

    const handleResize = () => {
      setSlidesToShow(window.innerWidth <= 1500 ? 2 : 3);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
    prevArrow: <PrevArrow />,
  };

  const settingsTopRated = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
              <div className="movie-details">
                <div className="movie-name">{movie.title}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="now-playing-carousel">
        <h2 style={{ fontFamily: 'cairo' }}>Top Rated Movies</h2>
        <div className='linea-top-r'><hr /></div>
        <Slider {...settingsTopRated}>
          {topRatedMovies.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="carousel-image-small"
              />
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
      style={{ right: '10px', zIndex: 1, top: '40%', transform: 'translateY(-40%)' }}
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
      style={{ left: '10px', zIndex: 1, top: '40%', transform: 'translateY(-40%)' }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

export default Home;
