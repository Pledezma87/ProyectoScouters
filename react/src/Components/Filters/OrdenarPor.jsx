import React, { useState, useContext } from 'react';
import { PlayersContext, InformsContext } from '../../Context/Context';
import './OrdenarPor.css';


export function OrdenarPor({ onOrdenarPor }) {
  const [orden, setOrden] = useState('');
  const { data } = useContext(PlayersContext); // Obtiene los datos de los jugadores del contexto


  const handleOrdenChange = (event) => {
    const nuevoOrden = event.target.value;
    setOrden(nuevoOrden);
    onOrdenarPor(nuevoOrden);
  };

  return (
    <div className="ordenar-por">
       <div className='cantidad-jugadores'><p>{data.length} Jugadores</p></div> {/* Muestra la cantidad de jugadores */}
      <label htmlFor="orden-select" className="label">Ordenar Por:</label>
      <select id="orden-select" className="select" value={orden} onChange={handleOrdenChange}>
        <option value="">Ninguno</option>
        <option value="posicion">Posición</option>
        <option value="media">Media</option>
      </select>
    </div>
  );
}






// import React, { useState, useContext } from 'react';
// import './OrdenarPor.css';
// import { PlayersContext, InformsContext } from '../../Context/Context'; // Importa los contextos

// export function OrdenarPor({ onOrdenarPor, tipo }) {
//   const [orden, setOrden] = useState('');

//   // Obtiene el contexto según el tipo
//   const context = tipo === 'jugadores' ? useContext(PlayersContext) : useContext(InformsContext);
//   const { data } = context;

//   const handleOrdenChange = (event) => {
//     const nuevoOrden = event.target.value;
//     setOrden(nuevoOrden);
//     onOrdenarPor(nuevoOrden);
//   };

//   return (
//     <div className="ordenar-por">
//       <div className='cantidad-jugadores'><p>{data.length} {tipo === 'jugadores' ? 'Jugadores' : 'Informes'}</p></div> {/* Muestra la cantidad de jugadores o informes */}
//       <label htmlFor="orden-select" className="label">Ordenar Por:</label>
//       <select id="orden-select" className="select" value={orden} onChange={handleOrdenChange}>
//         <option value="">Ninguno</option>
//         <option value="posicion">Posición</option>
//         <option value="media">Media</option>
//       </select>
//     </div>
//   );
// }



