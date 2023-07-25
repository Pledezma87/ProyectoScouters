import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlayersContext = createContext();
export const InformsContext = createContext();


// Función para obtener la posición abreviada del jugador (DC, DEF, MC...)
function getAbreviacionPosicion(posicion) {
  switch (posicion) {
    case 'Delantero':
      return 'DC';
    case 'Defensa':
      return 'DEF';
    case 'Mediocentro':
      return 'MC';
    default:
      return posicion; // Devolvemos la posición sin cambios si no coincide con las opciones anteriores
  }
}


export function Context({ children }) {
  const [data, setData] = useState([]);
  const [informsData, setInformsData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:8000/players"),
        axios.get("http://localhost:8000/informs"),
      ])
      .then(
        axios.spread((playersRes, informsRes) => {
          setData(playersRes.data);
          setInformsData(informsRes.data);
          console.log(playersRes.data); // Datos recibidos de la API para players
          console.log(informsRes.data); // Datos recibidos de la API para informs
        })
      )
      .catch((error) => console.error(error));
  }, []);

  console.log(data); // Verificar el estado de data
  console.log(informsData); // Verificar el estado de informsData

  return (
    <PlayersContext.Provider value={{ data, setData, getAbreviacionPosicion }}>
      <InformsContext.Provider value={{ informsData, setInformsData }}>
        {children}
      </InformsContext.Provider>
    </PlayersContext.Provider>
  );
}





