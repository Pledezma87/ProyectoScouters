import React from 'react';
import { Cards } from '../../Components/Cards/Cards';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Banner } from '../../Components/Banner/Banner';
import './InterfazJugadores.css'
import { Filters } from '../../Components/Filters/Filters';
import { OrdenarPor } from '../../Components/Filters/OrdenarPor';

export function InterfazJugadores() {
  const handleOrdenarPor = (opcion) => {
    // Lógica para ordenar los jugadores según la opción seleccionada
    console.log(`Ordenar por ${opcion}`);
  };
  return (
    <>
    <Header />
    <div className='interfaz-jugadores-container footer-container'>      
      <Banner />
      <div className='main-filters-cards'>
        <div className='main-filters'><Filters/></div>
        <div className='vertical-line'></div> {/* División vertical */}
        <div className='main-cards'><Cards/></div>
        <div className='main-ordenar'><OrdenarPor onOrdenarPor={handleOrdenarPor} /> {/* Pasa la función onOrdenarPor como prop */}</div>
      </div>
   </div>
   <Footer className="footer"/>
   </>
  );
}


