// import React, { useContext } from 'react';
// import { PlayersContext } from '../../Context/Context';
// import { useParams } from 'react-router-dom';
// import './FichaJugador.css'
// import { Header } from '../../Components/Header/Header';
// import { Footer } from '../../Components/Footer/Footer';
// import { BannerFicha } from '../../Components/Banner/BannerFicha';
// import { RadarChart } from '../../Components/Metricas/RadarChart';

// export function FichaJugador() {
//     const { id } = useParams();
//     const { data } = useContext(PlayersContext);
//     console.log("probando ahora en serio", data)
//       // Buscar el jugador específico por ID en la lista de jugadores
//     const jugador = data.find((player) => player.jugador._id === id);

//     if (!jugador) {
//         return <div>Jugador no encontrado.</div>;
//       }

//     return (
//         <>
//             <div className='global-container'>
//                 <Header />
//                 <div className='interfaz-container'>
//                     <BannerFicha />
//                     {/* CONTAINER TUS INFORMES */}
//                     <div className='main-info'>
//                         <div className='tus-informes-container'>
//                             <div className='tus-informes'>Tus Informes</div>
//                             <div className='ficha-divider-horizontal'></div>
//                             <div className='tus-informes-data'>
//                                 <p className='evaluacion-promedio'>Evaluación Promedio<br /><span>{jugador.jugador?.Rating.toFixed(1)}</span></p>
//                                 <div className='ficha-divider-vertical'></div>
//                                 <p>Ultima Evaluación <br /><span>8</span></p>
//                                 <div className='ficha-divider-vertical'></div>
//                                 <p>Informes Recogidos <br /><span>07</span></p>
//                                 <div className='ficha-divider-vertical'></div>
//                                 <p>Próximo Seguimiento <br /><span>10/06/23</span></p>
//                             </div>
//                         </div>
//                     </div>
//                     {/*CONTAINER INFO  */}
//                     <div className='new-main-info'>
//                         <div className='new-tus-informes-container'>
//                             <div className='new-tus-informes'>Info</div>
//                             <div className='new-ficha-divider-horizontal'></div>
//                             <div className='new-tus-informes-data'>
//                                 <p>Nacionalidad<br /><span>{jugador.jugador?.Nacionalidad}</span></p>
//                                 <div className='new-ficha-divider-vertical'></div>
//                                 <p>Altura<br /><span>{jugador.jugador?.Estatura}</span></p>
//                                 <div className='new-ficha-divider-vertical'></div>
//                                 <p>Peso<br /><span>57Kg</span></p>
//                             </div>

//                         </div>
                       
//                     </div>
//                     {/* AQUÍ VA LA GRÁFICA  */}
//                   <RadarChart />
//                 </div>
               
//             </div>
            
//             <Footer />
//         </>

//     )
// }





























import React, { useContext } from 'react';
import { PlayersContext } from '../../Context/Context';
import { PlayerMetricsContext } from '../../Context/Context';

import { useParams } from 'react-router-dom';
import './FichaJugador.css';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { BannerFicha } from '../../Components/Banner/BannerFicha';
import { RadarChart } from '../../Components/Metricas/RadarChart';

export function FichaJugador() {
  const { id } = useParams();
  const { data } = useContext(PlayersContext);
  const { playerMetricsData } = useContext(PlayerMetricsContext); // Obtén playerMetricsData del contexto
  console.log("probando ahora en serio", data);

  // Buscar el jugador específico por ID en la lista de jugadores
  const player = data.find((player) => player.jugador._id === id);

  if (!player) {
    return <div>Jugador no encontrado.</div>;
  }

   // Check if playerMetricsData is still loading
   if (!playerMetricsData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='global-container'>
        <Header />
        <div className='interfaz-container'>
          <BannerFicha />
          {/* CONTAINER TUS INFORMES */}
          <div className='main-info'>
            <div className='tus-informes-container'>
              <div className='tus-informes'>Tus Informes</div>
              <div className='ficha-divider-horizontal'></div>
              <div className='tus-informes-data'>
                <p className='evaluacion-promedio'>
                  Evaluación Promedio<br />
                  <span>{player.jugador?.Rating.toFixed(1)}</span>
                </p>
                <div className='ficha-divider-vertical'></div>
                <p>
                  Ultima Evaluación <br />
                  <span>8</span>
                </p>
                <div className='ficha-divider-vertical'></div>
                <p>
                  Informes Recogidos <br />
                  <span>07</span>
                </p>
                <div className='ficha-divider-vertical'></div>
                <p>
                  Próximo Seguimiento <br />
                  <span>10/06/23</span>
                </p>
              </div>
            </div>
          </div>
          {/*CONTAINER INFO  */}
          <div className='new-main-info'>
            <div className='new-tus-informes-container'>
              <div className='new-tus-informes'>Info</div>
              <div className='new-ficha-divider-horizontal'></div>
              <div className='new-tus-informes-data'>
                <p>
                  Nacionalidad<br />
                  <span>{player.jugador?.Nacionalidad}</span>
                </p>
                <div className='new-ficha-divider-vertical'></div>
                <p>
                  Altura<br />
                  <span>{player.jugador?.Estatura}</span>
                </p>
                <div className='new-ficha-divider-vertical'></div>
                <p>
                  Peso<br />
                  <span>57Kg</span>
                </p>
              </div>
            </div>
          </div>
          {/* AQUÍ VA LA GRÁFICA  */}
          <RadarChart playerId={player.jugador._id}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

