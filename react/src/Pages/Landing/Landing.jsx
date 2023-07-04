import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Landing.css';
import videoBarca from "./Video/videoBarca.mp4";
import { Link } from 'react-router-dom';
import { height } from '@mui/system';

export function Landing() {
  return (
    <div className="globalContainer">
      <div className="react-player">
        <video className='video' src={videoBarca} autoPlay loop muted height={"50%"} />
      </div>

      <div className="container">
        <section>
          <article className="child-left">
            <h1 className='scouters'>
              Scouters
              <p className="subtitle">New era</p>
            </h1>
            <span className="texto">
              <div className="topText"></div>
              Bienvenido a <span>Scouters NEW ERA</span>, la herramienta revolucionaria
              para <span className="scouts">scouts</span> de fútbol. <br /> <br />  Genera informes en tiempo real de los jugadores mientras
              los observas en acción y obten una media precisa para comparar nuevos talentos ojeados. <br /> <br /> Potencia tu capacidad de evaluación con datos objetivos y
              análisis detallados. Únete ahora y lleva tu scouting al
              siguiente nivel.
            </span>
            <button className="button-register">Regístrate</button>
          </article>

          <article className="child-right">
            <img className="imagen" src="/assets/fotos/balon.png" alt="balon" />
          </article>
        </section>

        <footer>
          <div className="socialContainer">
            <span className="followUs">FollowUs:</span>
            <ul className="socialNetworks">
              <li className="socialNetworks"><i className="fab fa-facebook-f"><FacebookIcon /></i></li>
              <li className="socialNetworks"><i className="fab fa-twitter"><TwitterIcon /></i></li>
              <li className="socialNetworks"><i className="fab fa-youtube"><YouTubeIcon /></i></li>
            </ul>
          </div>
        </footer>
      </div>

      <div className="container-2">
        <div className="column-left">
          <h1>La aplicación de los Scouts definitiva.</h1>
          <p>Texto explicativo más pequeño.</p>
          <button>Leer Más</button>
        </div>
        <div className="column-right">
          <img src="/ruta-de-la-imagen.jpg" alt="Imagen" />
        </div>
      </div>
    </div>
  );
}
