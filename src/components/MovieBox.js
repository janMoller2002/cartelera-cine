import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {

  const [show, setShow]=useState(false);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  return (
    <div className="movie-box">
      <img src={API_IMG + poster_path} alt={title} className="img-fluid" />
      <div className="movie-info">
        <h5>{title}</h5>
        <p>{`Rating: ${vote_average}`}</p>
        <button type="button" className="btn btn-dark" onClick={handleShow}>Ver info</button>
          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} />
              <h3>{title}</h3>
              <h5>Fecha de estreno: {release_date}</h5>
              <br></br>
              <h6>Vista general</h6>
              <p>{overview}</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
              </Modal.Footer>
          </Modal>
      </div>
    </div>
  );
};

export default MovieBox;
