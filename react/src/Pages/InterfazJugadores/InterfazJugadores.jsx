import React from 'react';
import { Cards } from '../../Components/Cards/Cards';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Banner } from '../../Components/Banner/Banner';
import './InterfazJugadores.css'
import { Filters } from '../../Components/Filters/Filters';


export function InterfazJugadores() {
  return (
    <div className='interfaz-jugadores-container'>
      <Header />
      <Banner />
      <div className='main-filters-cards'>
        <div className='main-filters'><Filters/></div>
        <div className='main-cards'><Cards/></div>
      </div>
   
      <Footer/>
    </div>
  );
}


