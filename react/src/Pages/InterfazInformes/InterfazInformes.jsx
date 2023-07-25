// import React, { useState } from 'react';
// import { Header } from '../../Components/Header/Header';
// import { Footer } from '../../Components/Footer/Footer';
// import { Banner2 } from '../../Components/Banner/Banner2';
// import { InformCards } from '../../Components/Cards/InformCards';
// import { InformsContext } from '../../Context/Context';
// import { OrdenarPor } from '../../Components/Filters/OrdenarPor';
// import './InterfazInformes.css';

// export function InterfazInformes() {
//   const [opcionSeleccionada, setOpcionSeleccionada] = useState('tusInformes');

//   const handleOrdenarPor = (opcion) => {
//     // Lógica para ordenar los jugadores según la opción seleccionada
//     console.log(`Ordenar por ${opcion}`);
//   };

//   const handleOpcionSeleccionada = (opcion) => {
//     setOpcionSeleccionada(opcion);
//   };


//   return (
//     <>
//       <Header />
//       <div className='interfaz-nuevos-jugadores-container newfooter-container'>
//         <Banner2 />
//         <div className='main-filtros-Cards'>
//           <div className='opcion-switch'>
//             <button
//               className={`opcion-button ${opcionSeleccionada === 'tusInformes' ? 'active' : ''}`}
//               onClick={() => handleOpcionSeleccionada('tusInformes')}
//             >
//               Tus informes
//             </button>
//             <button
//               className={`opcion-button ${opcionSeleccionada === 'otrosInformes' ? 'active' : ''}`}
//               onClick={() => handleOpcionSeleccionada('otrosInformes')}
//             >
//               Otros informes
//             </button>
//           </div>
//           <div className='main-Cards'>
//             <InformCards /> 
//           </div>
//           <div className='main-ordenar'>
//             <OrdenarPor tipo="Informes" onOrdenarPor={handleOrdenarPor} />
//           </div>
//         </div>
//       </div>
//       <Footer className='footer' />
//     </>
//   );
// }
















import React, { useState, useContext } from 'react';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Banner2 } from '../../Components/Banner/Banner2';
import { InformCards } from '../../Components/Cards/InformCards';
import { InformsContext } from '../../Context/Context';
import { OrdenarPor } from '../../Components/Filters/OrdenarPor';
import './InterfazInformes.css';


export function InterfazInformes() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('tusInformes');
  const { informsData } = useContext(InformsContext); // Obtén los datos del contexto InformsContext

  const handleOrdenarPor = (opcion) => {
    // Lógica para ordenar los informes según la opción seleccionada
    console.log(`Ordenar por ${opcion}`);
  };

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <>
      <Header />
      <div className='interfaz-nuevos-jugadores-container newfooter-container'>
        <Banner2 />
        <div className='main-filtros-Cards'>
          <div className='opcion-switch'>
          <button
              className={`opcion-button ${opcionSeleccionada === 'tusInformes' ? 'active' : ''}`}
              onClick={() => handleOpcionSeleccionada('tusInformes')}
            >
              Tus informes <span className="informes-count">({informsData.length})</span>
            </button>
            <button
              className={`opcion-button ${opcionSeleccionada === 'otrosInformes' ? 'active' : ''}`}
              onClick={() => handleOpcionSeleccionada('otrosInformes')}
            >
              Otros informes
            </button>
          </div>
          <div className='main-Cards'>
            <InformCards />
          </div>
          <div className='main-ordenar'>
            <OrdenarPor tipo="Informes" onOrdenarPor={handleOrdenarPor} />
          </div>
        </div>
      </div>
      <Footer className='footer' />
    </>
  );
}
