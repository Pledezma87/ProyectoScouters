import React from 'react';
import './InformCard.css';
import { Link } from 'react-router-dom';
import jugadorImg from './imgs/jugador.jpg';
import { useContext } from 'react';
import { InformsContext } from '../../Context/Context';
import { PlayersContext } from '../../Context/Context';

export function InformCards() {
  const { informsData } = useContext(InformsContext);
  const { data } = useContext(PlayersContext)
  const backgroundImageUrl = jugadorImg;

  return (
    <div className="nuevocontainer">
      {informsData.map((informs) => {
        console.log(informs.id)
        const player = data.find((player) => player.jugador.id === informs.playerId);

        return (
          <div className="nuevocard" key={informs.id}>
            <div className="nuevocard-main">
              <div className="nuevocard-header">
                <div className="nuevocard-header-bg"></div>
                <img className="nuevocard-image" src={backgroundImageUrl} alt="" />
              </div>
              <h1 className="nuevocard-name"> {player ? `${player.jugador.Nombre} ${player.jugador.Apellidos}` : 'Nombre del Jugador Desconocido'}
                <span>({player ? `${player.jugador.Posición}` : 'Posición Desconocida'})</span></h1>

              <div className='fecha-informe'>
                <p>Fecha del Informe <span>13/09/23</span></p>
                <p>Hizo un gran partido a gran a nivel general. Sin embargo...</p>
              </div>

              <div className='divider'></div>

              <div className='info-container'>
                <p className='info-column'>Ult. Eval. <span>{informs.MediaInforme}</span></p>
                <p className='info-column'>Informes <span>6</span></p>
                <p className='info-column'>Prox.Seguim. <span>05/10/23</span></p>
              </div>

              <div className="nuevobutton-container">
                <Link to="#">
                  <button className="nuevorompedor-button">Leer Más</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}













