import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlayersContext = createContext();
export const InformsContext = createContext();

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
    <PlayersContext.Provider value={{ data, setData }}>
      <InformsContext.Provider value={{ informsData, setInformsData }}>
        {children}
      </InformsContext.Provider>
    </PlayersContext.Provider>
  );
}





