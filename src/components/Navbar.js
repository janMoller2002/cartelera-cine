import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container"> {/* Agregamos un contenedor para centrar y ajustar el espacio */}
        <Link className="navbar-brand" to="/">
          <i className='bx bx-movie-play bx-tada main-color'></i>
          <span className="ml-2">Cartelera Cine</span> {/* Agregamos un margen a la izquierda */}
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cartelera">Cartelera</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/compra">Compra de Boletos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">Acerca de Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/preguntas">Preguntas Frecuentes</Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;