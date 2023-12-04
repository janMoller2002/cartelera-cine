import React from 'react';

function ContactForm() {
  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías la lógica de envío del formulario, por ejemplo, usando fetch o axios
    console.log('Formulario enviado');
  };

  return (
    <div className="container mt-5 mb-5" style={{  fontFamily: 'Verdana, sans-serif' }} >
      <div className="text-center">
        <h1 className="my-4" style={{ fontFamily: 'Verdana', marginBottom: '60px' }}>Formulario de Contacto</h1>
        <hr />
      </div>
      <div className="p-4 rounded" style={{ backgroundColor: '#929fba' }}>
        <h2 className="text-center" style={{ fontFamily: 'Verdana'}}>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre:</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje:</label>
            <textarea className="form-control" id="mensaje" rows="3" placeholder="Escribe tu mensaje aquí" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;