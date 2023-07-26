// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const PlayersContext = createContext();
// export const InformsContext = createContext();


// // Función para obtener la posición abreviada del jugador (DC, DEF, MC...)
// function getAbreviacionPosicion(posicion) {
//   switch (posicion) {
//     case 'Delantero':
//       return 'DC';
//     case 'Defensa':
//       return 'DEF';
//     case 'Mediocentro':
//       return 'MC';
//     default:
//       return posicion; // Devolvemos la posición sin cambios si no coincide con las opciones anteriores
//   }
// }


// // Función para ordenar los jugadores por Rating
// function sortByRatingAsc(data) {
//   return data.slice().sort((a, b) => a.jugador.Rating - b.jugador.Rating);
// }

// function sortByRatingDesc(data) {
//   return data.slice().sort((a, b) => b.jugador.Rating - a.jugador.Rating);
// }


// export function Context({ children }) {
//   const [data, setData] = useState([]);
//   const [informsData, setInformsData] = useState([]);

//   useEffect(() => {
//     axios
//       .all([
//         axios.get("http://localhost:8000/players"),
//         axios.get("http://localhost:8000/informs"),
//       ])
//       .then(
//         axios.spread((playersRes, informsRes) => {
//           setData(playersRes.data);
//           setInformsData(informsRes.data);
//           console.log(playersRes.data); // Datos recibidos de la API para players
//           console.log(informsRes.data); // Datos recibidos de la API para informs
//         })
//       )
//       .catch((error) => console.error(error));
//   }, []);

//   console.log(data); // Verificar el estado de data
//   console.log(informsData); // Verificar el estado de informsData


//    // Función para aplicar el filtro de ordenamiento por Rating
//    function ordenarPorRating(orden) {
//     if (orden === 'mediaAsc') {
//       setData(sortByRatingAsc(data));
//     } else if (orden === 'mediaDesc') {
//       setData(sortByRatingDesc(data));
//     } else {
//       // Si el orden es 'ninguno' o cualquier otro valor, no se aplica filtro
//       setData(data);
//     }
//   }

  

//   return (
//     <PlayersContext.Provider value={{ data, setData, getAbreviacionPosicion, ordenarPorRating }}>
//       <InformsContext.Provider value={{ informsData, setInformsData }}>
//         {children}
//       </InformsContext.Provider>
//     </PlayersContext.Provider>
//   );
// }




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

// Función para ordenar los jugadores por Rating
function sortByRatingAsc(data) {
  return data.slice().sort((a, b) => a.jugador.Rating - b.jugador.Rating);
}

function sortByRatingDesc(data) {
  return data.slice().sort((a, b) => b.jugador.Rating - a.jugador.Rating);
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

  // Función para aplicar el filtro de ordenamiento por Rating
  function ordenarPorRating(orden) {
    if (orden === 'mediaAsc') {
      setData(sortByRatingAsc(data));
    } else if (orden === 'mediaDesc') {
      setData(sortByRatingDesc(data));
    } else {
      // Si el orden es 'ninguno' o cualquier otro valor, no se aplica filtro
      setData(data);
    }
  }

    return (
    <PlayersContext.Provider value={{ data, setData, getAbreviacionPosicion, ordenarPorRating }}>
      <InformsContext.Provider value={{ informsData, setInformsData }}>
        {children}
      </InformsContext.Provider>
    </PlayersContext.Provider>
  );
}