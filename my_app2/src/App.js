import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/now-playing" exact render={() => <MovieList category="now_playing" />} />
        <Route path="/cartelera" component={MovieList} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/preguntas" component={QandA} />
        <Route path="/compra" component={TicketPurchase} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;