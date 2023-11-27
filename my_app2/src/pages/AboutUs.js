import React from 'react';
import DiegoImage from './img/Diego.jpg'; 
import IgnaciaImage from './img/nacha.jpg';
import JanImage from './img/jan.jpg'; 

const AboutUs = () => {
  return (
    <main className="container my-5" style={{ fontFamily: 'Cairo', marginBottom: '60px' }}>
      <div className="text-center">
        <h1 className="my-4">Sobre Nosotros</h1>
        <hr />
      </div>

      <div className="row">
        {/* Diego Troncoso */}
        <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
          <section className="subject text-center rounded" style={{ backgroundColor: '#929fba', width: '350px', height: '450px', padding: '15px', transition: 'transform 0.3s' }}>
            <h3>Diego Troncoso</h3>
            <img
              src={DiegoImage}
              alt="Foto de Diego Troncoso"
              className="img-fluid"
              style={{ height: '350px', objectFit: 'cover', marginBottom: '10px', borderRadius: '10px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <h5>Ingeniería Civil Industrial</h5>
          </section>
        </div>

        {/* Ignacia Frega */}
        <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
          <section className="subject text-center rounded" style={{ backgroundColor: '#929fba', width: '350px', height: '450px', padding: '15px', transition: 'transform 0.3s' }}>
            <h3>Ignacia Frega</h3>
            <img
              src={IgnaciaImage}
              alt="Foto de Ignacia Frega"
              className="img-fluid"
              style={{ height: '350px', objectFit: 'cover', marginBottom: '10px', borderRadius: '10px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <h5>Ingeniería Civil Industrial</h5>
          </section>
        </div>

        {/* Jan Moller */}
        <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
          <section className="subject text-center rounded" style={{ backgroundColor: '#929fba', width: '350px', height: '450px', padding: '15px', transition: 'transform 0.3s' }}>
            <h3>Jan Moller</h3>
            <img
              src={JanImage}
              alt="Foto de Jan Moller"
              className="img-fluid"
              style={{ height: '350px', objectFit: 'cover', marginBottom: '10px', borderRadius: '10px', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <h5>Ingeniería Civil Informática</h5>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;

