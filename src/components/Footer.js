import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba' }}>
      <div className="container p-4">
        <section className="">
          <div className="row">
            {/* Columna 1 */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                CineGala Estelar
              </h6>
              <p>
                CineGala Estelar ofrece una experiencia cinematográfica única desde hace 10 años. Nos destacamos por proyectar una cuidada selección de películas en un ambiente de vanguardia, asegurando que cada visita sea memorable. Ven y vive el cine como nunca antes.
              </p>
            </div>

            {/* Columna 2 */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Cartelera</h6>
              <p>
                <a href="#" className="text-white">Compra de Boletos</a>
              </p>
              <p>
                <a href="/cartelera" className="text-white">Cartelera</a>
              </p>
            </div>

            {/* Columna 3 */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
              <p><i className="fas fa-home mr-3"></i> Diagonal Las Perdices, Vitacumbia</p>
              <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> +65 73 469289</p>
            </div>

            {/* Columna 4 - Redes Sociales */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Síguenos</h6>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Derechos Reservados:
        <a className="text-white" href="#">Grupo 2</a>
      </div>
    </footer>
  );
};

export default Footer;