import React from 'react';
import { Link } from 'react-router-dom';
import './AvisoLegal.css';
import { Footer } from '../../Components/Footer/Footer';


export function AvisoLegal()  {
  return (
    <>
    <div className="aviso-legal-container">
    <Link to="/" className="back-to-home">
          <button className="back-to-home-button">Volver al Home</button>
        </Link>

      <h1 className="aviso-legal-title">Política de Privacidad</h1>
      <div className="aviso-legal-content">
        <p>
          En Scouters New Era, nos tomamos muy en serio la protección de tus datos personales. En esta Política de Privacidad, te informamos sobre cómo recopilamos, utilizamos y protegemos la información que nos proporcionas cuando utilizas nuestra plataforma.
        </p>
        <p>
          Recuerda que nuestra herramienta está diseñada exclusivamente para scouters de fútbol y todas nuestras actividades se rigen por las leyes de privacidad y protección de datos vigentes. A continuación, te explicamos los detalles importantes que debes conocer sobre cómo manejamos tus datos personales.
        </p>
        <h2>Recopilación de Datos</h2>
        <p>
          Al registrarte en Scouters New Era, recopilamos información personal como tu nombre, dirección de correo electrónico y otros detalles relevantes para el uso de la plataforma. Además, también podemos recopilar información sobre tu actividad y uso de la herramienta, como registros de seguimiento de jugadores, comparaciones y métricas.
        </p>
        <h2>Uso de Datos</h2>
        <p>
          Utilizamos tus datos personales para proporcionarte nuestros servicios y mejorar tu experiencia en la plataforma. Esto incluye generar informes personalizados, ofrecerte estadísticas y análisis detallados, así como facilitar la gestión de equipos y la programación de eventos relacionados con el fútbol.
        </p>
        <h2>Protección de Datos</h2>
        <p>
          En Scouters New Era, implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Trabajamos constantemente para garantizar que tus datos estén seguros y cumplir con los estándares de seguridad más rigurosos.
        </p>
        <h2>Confidencialidad y No Divulgación</h2>
        <p>
          Respetamos tu privacidad y nos comprometemos a no divulgar tus datos personales a terceros sin tu consentimiento expreso, a menos que estemos legalmente obligados a hacerlo o sea necesario para cumplir con los fines del servicio que proporcionamos.
        </p>
        <p>
          Te recomendamos revisar regularmente nuestra Política de Privacidad para mantenerte informado sobre cualquier actualización o cambio en nuestras prácticas de privacidad. Si tienes alguna pregunta o inquietud sobre nuestra política, no dudes en ponerte en contacto con nuestro equipo de soporte.
        </p>
      </div>
     
    </div>
 <Footer/>
 </>
  );
};



