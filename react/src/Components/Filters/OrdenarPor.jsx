import React, { useState } from 'react';
import './OrdenarPor.css';

export function OrdenarPor({ onOrdenarPor }) {
  const [orden, setOrden] = useState('');

  const handleOrdenChange = (event) => {
    const nuevoOrden = event.target.value;
    setOrden(nuevoOrden);
    onOrdenarPor(nuevoOrden);
  };

  return (
    <div className="ordenar-por">
      <div className='cantidad-jugadores'><p>33 Jugadores</p></div>
      <label htmlFor="orden-select" className="label">Ordenar Por:</label>
      <select id="orden-select" className="select" value={orden} onChange={handleOrdenChange}>
        <option value="">Ninguno</option>
        <option value="posicion">Posición</option>
        <option value="media">Media</option>
      </select>
    </div>
  );
}
