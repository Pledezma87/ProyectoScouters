import React, { useContext } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import jugadorImg from './imgs/jugador.jpg';
import { PlayersContext } from '../../Context/Context';

export function Cards() {
  const { data, getAbreviacionPosicion } = useContext(PlayersContext);

  const url = 'http://localhost:8000/players/avatar/'
  console.log(data); // Verificar los datos recibidos desde el contexto

  

  return (
    <div className="container-card-main">
      {data.map((player) => {
        console.log('datos de player')
        console.log(player); // Verificar los datos de cada jugador

        return (
          <div className="card" key={player.jugador.id}>
            <div className="card-main">
              <div className="card-header">
                <div className="card-header-bg"></div>
                <img className="card-image" src={url + player.jugador.Avatar} alt="" />
              </div>
              <h1 className="card-name">
                {player.jugador.Nombre} <span>{player.jugador.Apellidos}</span>
              </h1>
              <div className="card-attributes">
                <div className="card-attribute">
                  <span className="card-attribute__value">{player.jugador.Edad}</span>
                  <span className="card-attribute__name">Edad</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{player.jugador.Estatura}</span>
                  <span className="card-attribute__name">Estatura(m)</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{player.jugador.Posición}</span>
                  <span className="card-attribute__name">Posición</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{player.PMetrics[0].SkillsPrincipales[0].mediaGlobal}</span>
                  <span className="card-attribute__name">Skills Principales</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{player.PMetrics[0].SkillsTacticas[0].mediaGlobal}</span>
                  <span className="card-attribute__name">Skills Tácticas</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{player.PMetrics[0].SkillsFisicas[0].mediaGlobal}</span>
                  <span className="card-attribute__name">Skills Físicas</span>
                </div>
              </div>

              <div className="media-global">
                <span className="globalmedia-name">RATING</span>
                <span className="globalmedia-number">{player.jugador.Rating}</span>
              </div>

              <div className="button-container">
                <Link to="/FichaJugador">
                  <button className="rompedor-button">Ficha Técnica</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}






// import React, { useContext } from 'react';
// import './Card.css';
// import { Link } from 'react-router-dom';
// import jugadorImg from './imgs/jugador.jpg';
// import { PlayersContext } from '../../Context/Context';


// // ... Otros importes y código ...

// export function Cards() {
//   const { data } = useContext(PlayersContext);
//   const url = 'http://localhost:8000/players/avatar/';

//   console.log(data); // Verificar los datos recibidos desde el contexto

//   return (
//     <div className="container-card-main">
//       {data.map((player) => {
//         console.log('datos de player');
//         console.log(player); // Verificar los datos de cada jugador

//         // Obtener las habilidades desde el array "informes" para el jugador actual
//         const informe = player.informes[0];
//         const { SkillsPrincipales, SkillsTacticas, SkillsFisicas } = informe;
//         const { MediaInforme: mediaInformeSkills } = informe;

//         return (
//           <div className="card" key={player.jugador.id}>
//             <div className="card-main">
//               {/* ... Tu código JSX existente ... */}

//               <div className="card-attributes">
//                 {/* ... Tu código JSX existente ... */}

//                 {/* Mostrar habilidades principales */}
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">
//                     {Object.keys(SkillsPrincipales).map((skillName) => (
//                       <div key={skillName}>
//                         {skillName}: {SkillsPrincipales[skillName]}
//                       </div>
//                     ))}
//                   </span>
//                   <span className="card-attribute__name">Skills Principales</span>
//                 </div>

//                 {/* Mostrar habilidades tácticas */}
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">
//                     {Object.keys(SkillsTacticas).map((skillName) => (
//                       <div key={skillName}>
//                         {skillName}: {SkillsTacticas[skillName]}
//                       </div>
//                     ))}
//                   </span>
//                   <span className="card-attribute__name">Skills Tácticas</span>
//                 </div>

//                 {/* Mostrar habilidades físicas */}
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">
//                     {Object.keys(SkillsFisicas).map((skillName) => (
//                       <div key={skillName}>
//                         {skillName}: {SkillsFisicas[skillName]}
//                       </div>
//                     ))}
//                   </span>
//                   <span className="card-attribute__name">Skills Físicas</span>
//                 </div>

//                 {/* Mostrar MediaInforme */}
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">
//                     {Object.keys(mediaInformeSkills).map((skillName) => (
//                       <div key={skillName}>
//                         {skillName}: {mediaInformeSkills[skillName]}
//                       </div>
//                     ))}
//                   </span>
//                   <span className="card-attribute__name">MediaInforme</span>
//                 </div>
//               </div>

//               {/* ... Tu código JSX existente ... */}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
