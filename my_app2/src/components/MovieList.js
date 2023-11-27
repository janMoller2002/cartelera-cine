import React,{useState,useEffect} from 'react';
import './style.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=652bb95c3eeddd689fa4a238e3619b1e";
function App() {

  const [movies, setMovies]=useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <>
    <div className="container mt-5">
    <div className="text-center">
        <h1 className="my-4" style={{ fontFamily: 'Cairo', marginBottom: '60px'}}>Cartelera</h1>
        <hr />
    </div>
    </div>
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>No se encontraron películas</h2>
      )}
    </div>   
    </>
   
  );
}

export default App;