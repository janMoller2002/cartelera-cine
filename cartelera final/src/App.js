import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactForm from './pages/ContactForm';
import QandA from './pages/QandA';
import MovieDetails from './pages/MovieDetails';
import TicketPurchase from './components/TicketPurchase';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/now-playing" element={<MovieList category="now_playing" />} />
        <Route path="/cartelera" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/preguntas" element={<QandA />} />
        <Route path="/compra" element={<TicketPurchase />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
