import React, { useState, useContext } from 'react';
import { Cards } from '../../Components/Cards/Cards';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Banner } from '../../Components/Banner/Banner';
import './InterfazJugadores.css';
import { Filters } from '../../Components/Filters/Filters';
import { OrdenarPor } from '../../Components/Filters/OrdenarPor';
import { PlayersContext } from '../../Context/Context'; // Importa el contexto

export function InterfazJugadores() {
  const [ordenSeleccionado, setOrdenSeleccionado] = useState(''); // Estado para almacenar el orden seleccionado
  const { ordenarPorRating } = useContext(PlayersContext); // Accede a la función de ordenamiento del contexto

  const handleOrdenarPor = (opcion) => {
    // Llama a la función de ordenamiento del contexto y actualiza el estado con la nueva ordenación
    setOrdenSeleccionado(opcion);
    ordenarPorRating(opcion); // Llama a la función de ordenamiento del contexto
  };

  return (
    <>
      <Header />
      <div className='interfaz-jugadores-container footer-container'>      
        <Banner />
        <div className='main-filters-cards'>
          <div className='main-filters'><Filters/></div>
          <div className='vertical-line'></div> {/* División vertical */}
          <div className='main-cards'> <Cards orden={ordenSeleccionado} /> </div> {/* Pasa el estado del ordenamiento como prop */}
          <div className='main-ordenar'>
            <OrdenarPor tipo="Jugadores" onOrdenarPor={handleOrdenarPor} />
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </>
  );
}
