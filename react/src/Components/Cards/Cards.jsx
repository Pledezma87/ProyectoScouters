import React, { useContext } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { PlayersContext } from '../../Context/Context';

export function Cards() {
  const { data, getAbreviacionPosicion } = useContext(PlayersContext);

  const url = 'http://localhost:8000/players/avatar';

  // Verificar si data existe y es un array antes de llamar a map
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  return (
    <div className="container-card-main">
      {data.map((player) => {
        // Verificar si existen datos de Skills Principales, Tácticas y Físicas
        const skillsPrincipales = player.PMetrics[0]?.SkillsPrincipales[0]?.mediaGlobal;
        const skillsTacticas = player.PMetrics[0]?.SkillsTacticas[0]?.mediaGlobal;
        const skillsFisicas = player.PMetrics[0]?.SkillsFisicas[0]?.mediaGlobal;

        // Redondear los valores de las habilidades y el rating a 1 decimal
        const skillsPrincipalesRounded = skillsPrincipales ? skillsPrincipales.toFixed(1) : '-';
        const skillsTacticasRounded = skillsTacticas ? skillsTacticas.toFixed(1) : '-';
        const skillsFisicasRounded = skillsFisicas ? skillsFisicas.toFixed(1) : '-';
        const ratingRounded = player.jugador.Rating ? player.jugador.Rating.toFixed(1) : '-';

        // // Generar la URL dinámica para la ficha técnica del jugador
        // const fichaTecnicaURL = `/FichaJugador/${player.jugador.id}`;

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
                  <span className="card-attribute__value">{skillsPrincipalesRounded}</span>
                  <span className="card-attribute__name">Skills Principales</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{skillsTacticasRounded}</span>
                  <span className="card-attribute__name">Skills Tácticas</span>
                </div>
                <div className="card-attribute">
                  <span className="card-attribute__value">{skillsFisicasRounded}</span>
                  <span className="card-attribute__name">Skills Físicas</span>
                </div>
              </div>

              <div className="media-global">
                <span className="globalmedia-name">RATING</span>
                <span className="globalmedia-number">{ratingRounded}</span>
              </div>

              <div className="button-container">
              <Link  key={player.jugador._id} to={`/FichaJugador/${player.jugador._id}`}>
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
