import React, { useContext } from 'react';
import { PlayersContext } from '../../Context/Context';
import { useParams } from 'react-router-dom';
import './BannerFicha.css';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';

export function BannerFicha() {
    const { id } = useParams();
    const { data } = useContext(PlayersContext);
    const url = 'http://localhost:8000/players/Avatar/'
   
  
    // Buscar el jugador específico por ID en la lista de jugadores
    const jugador = data.find((player) => player.jugador._id === id);
  
    if (!jugador) {
      return <div>Jugador no encontrado.</div>;
    }
  
  
    return (
      <div>
        <div className='main-banner-container'>
          <div className='left-banner'>
            <div className='foto-jugador'>
              <img src={url + jugador.jugador.Avatar} alt="" />
            </div>
            <div className='info-jugador-container'>
              <div className='nombre-jugador'>
                <p className='dorsal'>{jugador.jugador.Dorsal}</p>
                <h2 className='nombre'>
                  {jugador.jugador.Nombre} <span className='apellido'>{jugador.jugador.Apellidos}</span>
                </h2>
              </div>

              <div className='info-jugador'>
                <p className='posicion'>{jugador.jugador.Posición}</p>
                <p>{jugador.jugador.PieBueno}</p>
                <p>{jugador.jugador.Edad} Años</p>
              </div>
            </div>
          </div>
  
          <div className='right-banner'>
            <div className='equipo'>
              <p className='categoria'>{jugador.jugador.Categoria}</p>
              <p className='club'>{jugador.jugador.Club}</p>
            </div>
            <div className='ficha'>
              <span className='icono'>
                <InsightsOutlinedIcon sx={{ fontSize: 46, width: 53, height: 53 }} />
              </span>
              <p>FICHA DEL JUGADOR</p>
            </div>
          </div>
        </div>
  
        <MenuBar />
      </div>
    );
  }
  

function MenuBar() {
    return (
        <div className='menu-bar-container'>
            <ul className='menu-bar'>
                <li>Resumen</li>
                <li>Vídeos</li>
                <li>Estadísticas</li>
                <li>Informes</li>
                <li>Carrera</li>
            </ul>
        </div>
    );
}


