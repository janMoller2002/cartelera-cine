import React from 'react';
import { Accordion } from 'react-bootstrap';
import './QandA.css';
const Question = ({ question, answer }) => (
  <Accordion.Item eventKey={question.replace(/\s+/g, '')}>
    <Accordion.Header>
      <strong>Pregunta:</strong> {question}
    </Accordion.Header>
    <Accordion.Body>
      <strong>Respuesta:</strong> {answer}
    </Accordion.Body>
  </Accordion.Item>
);

const Category = ({ title, questions }) => (
  <div>
    <h4>{title}</h4>
    <Accordion>
      {questions.map((q, index) => (
        <Question key={index} question={q.question} answer={q.answer} />
      ))}
    </Accordion>
  </div>
);

const FaqPage = () => {
  const faqData = [
    {
        title: 'Nuestra Página',
        questions: [
          {
            question: '¿Cómo puedo crear una cuenta en CineGala Estelar?',
            answer: 'Puedes crear una cuenta haciendo clic en el enlace "Registrarse" que aparece en la esquina superior derecha de nuestra página CineGala Estelar.',
          },
          {
            question: '¿Cómo recuperar mi contraseña olvidada?',
            answer: 'Puedes restablecer tu contraseña utilizando la opción "¿Olvidaste tu contraseña?", que aparece en la página de inicio de sesión.',
          },
          {
            question: '¿Puedo pagar tarifa niño o tercera edad de manera online?',
            answer: 'Sí, si haces la compra a través de nuestra página web, puedes optar por la tarifa diferenciada para niños y/o tercera edad.',
          },
        ],
      },
      {
        title: 'Sala y Formatos',
        questions: [
          {
            question: 'Si uso lentes ópticos, ¿puedo usar lentes 3D?',
            answer: 'Sí, los lentes 3D están diseñados para poder usarse sin inconvenientes sobre lentes ópticos.',
          },
          {
            question: '¿Todas las películas se pueden ver en butacas D-BOX?',
            answer: 'Para conocer las películas que están disponibles en butacas D-BOX, puedes ver la cartelera; las películas disponibles en D-BOX tendrán el logo de dicho formato junto a la película.',
          },
          {
            question: '¿Qué significa que una sala sea XD o Premier?',
            answer: 'XD es un tipo de sala que entrega una experiencia que duplica la de una sala tradicional. Sala Premier cuenta con una boletería preferencial, lounge exclusivo, así como butacas especiales.',
          },
        ],
      },
      {
        title: 'Cartelera',
        questions: [
          {
            question: '¿Qué significa que una película llegue doblada?',
            answer: 'La versión doblada de una película tiene sus diálogos en español, a diferencia de una subtitulada, que mantiene el idioma original y con su traducción en formato texto.',
          },
          {
            question: '¿De qué depende que una película llegue en versión subtitulada o doblada?',
            answer: 'Que una película llegue en versión subtitulada y/o doblada depende de la disponibilidad de cada formato en el país.',
          },
          {
            question: '¿Qué día se renueva la cartelera?',
            answer: 'La cartelera se renueva cada jueves, día en que se presentan los nuevos estrenos, y se presenta la nueva programación de horarios y funciones.',
          },
        ],
      },
  ];

  return (
    <div>
        <div className="text-center">
        <h1 className="my-4" style={{ fontFamily: 'Cairo', marginBottom: '60px' }}>Preguntas Frecuentes</h1>
        <hr />
        <p>Aquí encontrarás respuestas a las preguntas más habituales sobre el funcionamiento del nuestro cine y sus servicios.</p>
      </div>
      {faqData.map((category, index) => (
        <Category key={index} title={category.title} questions={category.questions} />
      ))}
    </div>
  );
};

export default FaqPage;
