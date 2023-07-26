// import React, { useState, useContext } from 'react';
// import { PlayersContext} from '../../Context/Context';
// import './OrdenarPor.css';


// export function OrdenarPor({ onOrdenarPor }) {
//   const [orden, setOrden] = useState('');
//   const { data } = useContext(PlayersContext); // Obtiene los datos de los jugadores del contexto


//   const handleOrdenChange = (event) => {
//     const nuevoOrden = event.target.value;
//     setOrden(nuevoOrden);
//     onOrdenarPor(nuevoOrden);
//   };

//   return (
//     <div className="ordenar-por">
//        <div className='cantidad-jugadores'><p>{data.length} Jugadores</p></div> {/* Muestra la cantidad de jugadores */}
//       <label htmlFor="orden-select" className="label">Ordenar Por:</label>
//       <select id="orden-select" className="select" value={orden} onChange={handleOrdenChange}>
//         <option value="">Ninguno</option>
//         <option value="media">Media Ascendente</option>
//         <option value="media">Media Descendente</option>
//       </select>
//     </div>
//   );
// }





import React, { useState, useContext } from 'react';
import { PlayersContext } from '../../Context/Context';
import './OrdenarPor.css';

export function OrdenarPor({ onOrdenarPor }) {
  const [orden, setOrden] = useState('');
  const { data } = useContext(PlayersContext); // Obtiene los datos de los jugadores del contexto

  const handleOrdenChange = (event) => {
    const nuevoOrden = event.target.value;
    setOrden(nuevoOrden);
    onOrdenarPor(nuevoOrden); // Llama a la función de ordenamiento con la opción seleccionada
  };

  return (
    <div className="ordenar-por">
      <div className='cantidad-jugadores'><p>{data.length} Jugadores</p></div> {/* Muestra la cantidad de jugadores */}
      <label htmlFor="orden-select" className="label">Ordenar Por:</label>
      <select id="orden-select" className="select" value={orden} onChange={handleOrdenChange}>
        <option value="">Ninguno</option>
        <option value="mediaAsc">Media Ascendente</option> {/* Modifica el valor de la opción */}
        <option value="mediaDesc">Media Descendente</option> {/* Modifica el valor de la opción */}
      </select>
    </div>
  );
}



