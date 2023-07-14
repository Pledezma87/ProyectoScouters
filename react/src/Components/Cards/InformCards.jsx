import React from 'react';
import './InformCard.css';
import { Link } from 'react-router-dom';
import jugadorImg from './imgs/jugador.jpg';

export function InformCards() {
  const backgroundImageUrl = jugadorImg;
  return (
    <div className="nuevocontainer">
      <div className="nuevocard">
        <div className="nuevocard-main">
          <div className="nuevocard-header">
            <div className="nuevocard-header-bg"></div>
            <img className="nuevocard-image" src={backgroundImageUrl} alt="" />
          </div>
          <h1 className="nuevocard-name">Ricardo Gómez <span>(DC)</span></h1>

          <div className='fecha-informe'>
            <p>Fecha del Informe <span>13/09/23</span></p>
            <p>Hizo un gran partido a gran a nivel general. Sin embargo...</p>
          </div>

          <div className='divider'></div>

          <div className='info-container'>
            <p className='info-column'>Ult. Eval. <span>7.5</span></p>
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
    </div>
  );
}
