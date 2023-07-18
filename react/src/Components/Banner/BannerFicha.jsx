// import React from 'react'
// import DescriptionIcon from '@mui/icons-material/Description'; 
// import './BannerFicha.css'
// import jugadorimg from './img/jugador.jpg'
// import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';


// export function BannerFicha() {
//     const img = jugadorimg
//     return (
//         <div className='main-banner-container'>
//             <div className='left-banner'>
//                 <div className='foto-jugador'><img src={img} alt="" /></div>
//                 <div className='info-jugador-container'>
//                     <div className='nombre-jugador'>
//                         <p className='dorsal'>9</p>
//                         <h2 className='nombre'>Antonio <span className='apellido'>Vela</span></h2>
//                     </div>

//                     <div className='info-jugador'>
//                         <p className='posicion'>DC</p>
//                         <p>Zurdo</p>
//                         <p>16 Años</p>
//                     </div>
//                 </div>
//             </div>

//             <div className='right-banner'>
//                 <div className='equipo'>
//                     <p className='categoria'>Tercera Regional</p>
//                     <p className='club'>Villaverde F.C</p>
//                 </div>
//                 <div className='ficha'>
//              <span className='icono'><InsightsOutlinedIcon sx={{ fontSize: 46, width: 53, height: 53 }} /></span>  
//                     <p>FICHA DEL JUGADOR</p>
//                 </div>
//             </div>
//         </div>
//     )
// }





import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description'; 
import './BannerFicha.css';
import jugadorimg from './img/jugador.jpg';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';

export function BannerFicha() {
    const img = jugadorimg;

    return (
        <div>
            <div className='main-banner-container'>
                <div className='left-banner'>
                    <div className='foto-jugador'><img src={img} alt="" /></div>
                    <div className='info-jugador-container'>
                        <div className='nombre-jugador'>
                            <p className='dorsal'>9</p>
                            <h2 className='nombre'>Antonio <span className='apellido'>Vela</span></h2>
                        </div>

                        <div className='info-jugador'>
                            <p className='posicion'>DC</p>
                            <p>Zurdo</p>
                            <p>16 Años</p>
                        </div>
                    </div>
                </div>

                <div className='right-banner'>
                    <div className='equipo'>
                        <p className='categoria'>Tercera Regional</p>
                        <p className='club'>Villaverde F.C</p>
                    </div>
                    <div className='ficha'>
                        <span className='icono'><InsightsOutlinedIcon sx={{ fontSize: 46, width: 53, height: 53 }} /></span>  
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

