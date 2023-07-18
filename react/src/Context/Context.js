import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PlayersContext = createContext();

export function Context({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/players")
      .then((res) => {
        setData(res.data);
        console.log(res.data); // Verificar los datos recibidos de la API
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(data); // Verificar el estado data

  return (
    <PlayersContext.Provider value={{ data, setData }}>
      {children}
    </PlayersContext.Provider>
  );
}




