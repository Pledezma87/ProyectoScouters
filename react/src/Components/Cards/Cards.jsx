// import React, { useContext } from 'react';
// import './Card.css';
// import { Link } from 'react-router-dom';
// import { PlayersContext } from '../../Context/Context';

// export function Cards() {
//   const { data,  getAbreviacionPosicion, ordenarPorRating } = useContext(PlayersContext);


//   const url = 'http://localhost:8000/players/avatar';
//   console.log(data); // Verificar los datos recibidos desde el contexto

//   return (
//     <div className="container-card-main">
//       {data.map((player) => {
//         console.log('datos de player');
//         console.log(player); // Verificar los datos de cada jugador

//         // Verificar si existen datos de Skills Principales, Tácticas y Físicas
//         const skillsPrincipales = player.PMetrics[0]?.SkillsPrincipales[0]?.mediaGlobal;
//         const skillsTacticas = player.PMetrics[0]?.SkillsTacticas[0]?.mediaGlobal;
//         const skillsFisicas = player.PMetrics[0]?.SkillsFisicas[0]?.mediaGlobal;

//         return (
//           <div className="card" key={player.jugador.id}>
//             <div className="card-main">
//               <div className="card-header">
//                 <div className="card-header-bg"></div>
//                 <img className="card-image" src={`${url}/${player.jugador.Avatar}`} alt="" />
//               </div>
//               <h1 className="card-name">
//                 {player.jugador.Nombre} <span>{player.jugador.Apellidos}</span>
//               </h1>
//               <div className="card-attributes">
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{player.jugador.Edad}</span>
//                   <span className="card-attribute__name">Edad</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{player.jugador.Estatura}</span>
//                   <span className="card-attribute__name">Estatura(m)</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{player.jugador.Posición}</span>
//                   <span className="card-attribute__name">Posición</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{skillsPrincipales || '-'}</span>
//                   <span className="card-attribute__name">Skills Principales</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{skillsTacticas || '-'}</span>
//                   <span className="card-attribute__name">Skills Tácticas</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{skillsFisicas || '-'}</span>
//                   <span className="card-attribute__name">Skills Físicas</span>
//                 </div>
//               </div>

//               <div className="media-global">
//                 <span className="globalmedia-name">RATING</span>
//                 <span className="globalmedia-number">{player.jugador.Rating}</span>
//               </div>

//               <div className="button-container">
//                 <Link to="/FichaJugador">
//                   <button className="rompedor-button">Ficha Técnica</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }








// import React, { useContext, useEffect, useState } from 'react';
// import './Card.css';
// import { Link } from 'react-router-dom';
// import { PlayersContext } from '../../Context/Context';

// export function Cards({ orden }) {
//   const { data,  ordenarPorRating } = useContext(PlayersContext);
//   const [sortedData, setSortedData] = useState([]);

//   useEffect(() => {
//     // Llama a la función de ordenamiento del contexto con el valor de 'orden'
//     if (orden === 'mediaAsc' || orden === 'mediaDesc') {
//       setSortedData(ordenarPorRating(orden));
//     } else {
//       // Si no se ha seleccionado un ordenamiento, muestra los datos originales
//       setSortedData(data);
//     }
//   }, [data, orden, ordenarPorRating]);

//   const url = 'http://localhost:8000/players/avatar';

//   return (
//     <div className="container-card-main">
//       {data.map((player) => {
//         // Verificar si existen datos de Skills Principales, Tácticas y Físicas
//         const skillsPrincipales = player.PMetrics[0]?.SkillsPrincipales[0]?.mediaGlobal;
//         const skillsTacticas = player.PMetrics[0]?.SkillsTacticas[0]?.mediaGlobal;
//         const skillsFisicas = player.PMetrics[0]?.SkillsFisicas[0]?.mediaGlobal;

//         return (
//           <div className="card" key={player.jugador.id}>
//             <div className="card-main">
//               <div className="card-header">
//                 <div className="card-header-bg"></div>
//                 <img className="card-image" src={`${url}/${player.jugador.Avatar}`} alt="" />
//               </div>
//               <h1 className="card-name">
//                 {player.jugador.Nombre} <span>{player.jugador.Apellidos}</span>
//               </h1>
//               <div className="card-attributes">
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{player.jugador.Edad}</span>
//                   <span className="card-attribute__name">Edad</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{player.jugador.Estatura}</span>
//                   <span className="card-attribute__name">Estatura(m)</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{player.jugador.Posición}</span>
//                   <span className="card-attribute__name">Posición</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{skillsPrincipales || '-'}</span>
//                   <span className="card-attribute__name">Skills Principales</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{skillsTacticas || '-'}</span>
//                   <span className="card-attribute__name">Skills Tácticas</span>
//                 </div>
//                 <div className="card-attribute">
//                   <span className="card-attribute__value">{skillsFisicas || '-'}</span>
//                   <span className="card-attribute__name">Skills Físicas</span>
//                 </div>
//               </div>

//               <div className="media-global">
//                 <span className="globalmedia-name">RATING</span>
//                 <span className="globalmedia-number">{player.jugador.Rating}</span>
//               </div>

//               <div className="button-container">
//                 <Link to="/FichaJugador">
//                   <button className="rompedor-button">Ficha Técnica</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }










import React, { useContext } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { PlayersContext } from '../../Context/Context';

export function Cards() {
  const { data, getAbreviacionPosicion } = useContext(PlayersContext);

  const url = 'http://localhost:8000/players/avatar';

  return (
    <div className="container-card-main">
      {data.map((player) => {
        // Verificar si existen datos de Skills Principales, Tácticas y Físicas
        const skillsPrincipales = player.PMetrics[0]?.SkillsPrincipales[0]?.mediaGlobal;
        const skillsTacticas = player.PMetrics[0]?.SkillsTacticas[0]?.mediaGlobal;
        const skillsFisicas = player.PMetrics[0]?.SkillsFisicas[0]?.mediaGlobal;

        return (
          <div className="card" key={player.jugador.id}>
            <div className="card-main">
              <div className="card-header">
                <div className="card-header-bg"></div>
                <img className="card-image" src={`${url}/${player.jugador.Avatar}`} alt="" />
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
                  <span className="card-attribute__value">{skillsPrincipales || '-'}</span>
                  <span className="card-attribute__name">Skills Principales</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{skillsTacticas || '-'}</span>
                  <span className="card-attribute__name">Skills Tácticas</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{skillsFisicas || '-'}</span>
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






