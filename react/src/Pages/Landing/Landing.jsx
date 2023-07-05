import React from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import './Landing.css';
import VideoFutbol from "./Video/VideoFutbol1.mp4";

import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupIcon from '@material-ui/icons/Group';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

export function Landing() {
  const scrollToSection = () => {
    const section = document.querySelector('.third-section');
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="landing">

{/* SECCIÓN UNO */}
      <section className="first-section">
        <div className="video-overlay"></div> {/* Velo negro casi transparente */}
        <video src={VideoFutbol} autoPlay loop muted></video>
        <div className="column">
        <h1 className="scouters">
              Scouters <span className='NewEra'>NEW ERA</span>
            </h1>
        <div className="green-rectangle"></div>
        <div className='parrafo'>     
          <p>Bienvenidos a <span className='green-text'>Scouters New Era</span>, la herramienta revolucionaria para scouts de fútbol. <br /> <br />
            Genera informes en tiempo real de los jugadores mientras los observas en acción y obtén una media precisa para comparar nuevos talentos ojeados.<br /> <br />
            Potencia tu capacidad de evaluación con datos objetivos y análisis detallados. ¡Únete ahora y lleva tu scouting al siguiente nivel!</p>
        </div> 

        <div className='botones'>
        <button>REGÍSTRATE</button>
        <button>INICIA SESIÓN</button>
        </div>
        
        </div>
        <div className="column">
          <img className='balon' src="/assets/fotos/balon.png" alt="Imagen de la primera sección" />      
        </div>
      </section>



    {/* SECCIÓN DOS */}
      <section className="second-section">
        <div className="column1-section2">
          <h2>Crea, Gestiona y Compara Informes de Jugadores</h2>
          <br />
          <p>Potencia tu scouting con informes de jugadores personalizados. <br /> 
          Toma decisiones acertadas y descubre nuevos talentos en el mundo del fútbol.</p>
          <button onClick={scrollToSection}>Leer Más</button>
        </div>
        <div className="column2-section2">       
          <img src="/assets/fotos/futbol3.jpg" alt="Imagen de la segunda sección" />
        </div>
      </section>



      {/* SECCIÓN TRES */}
      <section className="third-section">
        <div className='service-header'>
          <h3>UNA HERRAMIENTA, <span class="highlight">MUCHAS SOLUCIONES</span></h3>
          <p>Descubre cómo nuestra herramienta revoluciona el mundo del scouting de fútbol</p>
        </div>
  <div className='service-container'>
    <div className="service-row">
      <div className="service">
        <SportsSoccerIcon />
      <p>Sistema de seguimiento de jugadores</p>
    </div>
    <div className="service">
      <CompareArrowsIcon />
      <p>Comparación de estadísticas y rendimiento</p>
    </div>
    <div className="service">
      <AssessmentIcon />
      <p>Métricas avanzadas de jugadores</p>
    </div>
    <div className="service">
      <GroupIcon />
      <p>Gestión de equipos y plantillas</p>
    </div>
  </div>
  <div className="service-row">
    <div className="service">
      <EventNoteIcon />
      <p>Calendario de partidos y eventos</p>
    </div>
    <div className="service">
      <PlaylistAddCheckIcon />
      <p>Seguimiento de progresión de jugadores</p>
    </div>
    <div className="service">
      <PeopleIcon />
      <p>Análisis de rendimiento colectivo</p>
    </div>
    <div className="service">
      <SettingsIcon />
      <p>Personalización y configuración avanzada</p>
    </div>
  </div>
  </div>
</section>

    </div>
  );
}








// export function Landing() {
//   return (
//     <div className="globalContainer">
//       <div className="react-player">
//         <video className='video' src={VideoFutbol} autoPlay loop muted height={"50%"} />
//       </div>

//       <div className="container">
//         <section>
//           <article className="child-left">
//             <h1 className='scouters'>
//               Scouters
//               <p className="subtitle">New era</p>
//             </h1>
//             <span className="texto">
//               <div className="topText"></div>
//               Bienvenido a <span>Scouters NEW ERA</span>, la herramienta revolucionaria
//               para <span className="scouts">scouts</span> de fútbol. <br /> <br />  Genera informes en tiempo real de los jugadores mientras
//               los observas en acción y obten una media precisa para comparar nuevos talentos ojeados. <br /> <br /> Potencia tu capacidad de evaluación con datos objetivos y
//               análisis detallados. Únete ahora y lleva tu scouting al
//               siguiente nivel.
//             </span>
//             <button className="button-register">Regístrate</button>
//           </article>

//           <article className="child-right">
//             <img className="imagen" src="/assets/fotos/balon.png" alt="balon" />
//           </article>
//         </section>

//         <footer>
//           <div className="socialContainer">
//             <span className="followUs">FollowUs:</span>
//             <ul className="socialNetworks">
//               <li className="socialNetworks"><i className="fab fa-facebook-f"><FacebookIcon /></i></li>
//               <li className="socialNetworks"><i className="fab fa-twitter"><TwitterIcon /></i></li>
//               <li className="socialNetworks"><i className="fab fa-youtube"><YouTubeIcon /></i></li>
//             </ul>
//           </div>
//         </footer>
//       </div>

//       <section className="container-2">
//         <div className="column-left">
//           <h1>La aplicación de los Scouts definitiva.</h1>
//           <p>Texto explicativo más pequeño.</p>
//           <button className='button-2'>Leer Más</button>
//         </div>
//         <div className="column-right">
//           <img src="/ruta-de-la-imagen.jpg" alt="Imagen" />
//         </div>
//       </section>

      
//     </div>
//   );
// }
