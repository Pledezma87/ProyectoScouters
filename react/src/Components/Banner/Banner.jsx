// import React from 'react';
// import { Icon } from '@mui/material';
// import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import './Banner.css';
// import { Link } from 'react-router-dom';

// export function Banner() {

//   return (
//     <div className="banner">
//       <div className="banner__left">
//         <div className="banner__icon-container">
//           <Icon component={SportsSoccerIcon} className="banner__icon" sx={{fontSize: "2.5rem"}} />
//         </div>
//         <h2 className="banner__text">JUGADORES SEGUIDOS</h2>
//       </div>
//       <div className="banner__right">
//         <Link to="#" className="banner__button">
//           <Icon component={PersonAddIcon} className="banner__button-icon" />
//           Nueva Ficha
//         </Link>

//         <Link to="#" className="banner__button">
//           <Icon component={AssignmentIcon} className="banner__button-icon" />
//           Nuevo Informe
//         </Link>
//       </div>
//     </div>
//   );
// }








// import React, { useState } from 'react';
// import { Icon, Modal, TextField, Button } from '@mui/material';
// import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import './Banner.css';
// import { Link } from 'react-router-dom';

// export function Banner() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [playerData, setPlayerData] = useState({
//     nombre: '',
//     apellidos: '',
//     estatura: '',
//     edad: '',
//     nacionalidad: '',
//     posicion: '',
//     pieBueno: '',
//     imagen: null,
//     });

//   const handleModalOpen = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//     setPlayerData({
//       nombre: '',
//       apellidos: '',
//       estatura: '',
//       edad: '',
//       nacionalidad: '',
//       posicion: '',
//       pieBueno: '',
//       imagen: null,
//     });
//   };


//   const handleImageChange = (e) => {
//     const file = e.target.files[0]; // Obtenemos el archivo de la lista de archivos seleccionados

//     if (file) {
//       setPlayerData({ ...playerData, imagen: file });
//     }
//   };

//   return (
//     <div className="banner">
//       <div className="banner__left">
//         <div className="banner__icon-container">
//           <Icon component={SportsSoccerIcon} className="banner__icon" sx={{ fontSize: "2.5rem" }} />
//         </div>
//         <h2 className="banner__text">JUGADORES SEGUIDOS</h2>
//       </div>
//       <div className="banner__right">
//         <Link to="#" className="banner__button" onClick={handleModalOpen}>
//           <Icon component={PersonAddIcon} className="banner__button-icon" />
//           Nueva Ficha
//         </Link>

//         <Link to="#" className="banner__button">
//           <Icon component={AssignmentIcon} className="banner__button-icon" />
//           Nuevo Informe
//         </Link>
//       </div>

//       <Modal
//         open={modalOpen}
//         onClose={handleModalClose}
//         className="banner__modal"
//       >
//         <div className="banner__modal-content">
//           <h2 className="banner__modal-title">CREAR FICHA DE JUGADOR</h2>

//           <form className="banner__modal-form">
//             <TextField
//               label="Nombre"
//               value={playerData.nombre}
//               onChange={(e) =>
//                 setPlayerData({ ...playerData, nombre: e.target.value })
//               }
//             />
//             <TextField
//               label="Apellidos"
//               value={playerData.apellidos}
//               onChange={(e) =>
//                 setPlayerData({ ...playerData, apellidos: e.target.value })
//               }
//             />
//             <TextField
//               label="Estatura"
//               value={playerData.estatura}
//               onChange={(e) =>
//                 setPlayerData({ ...playerData, estatura: e.target.value })
//               }
//             />
//             <TextField
//               label="Edad"
//               value={playerData.edad}
//               onChange={(e) =>
//                 setPlayerData({ ...playerData, edad: e.target.value })
//               }
//             />
//             <TextField
//               label="Nacionalidad"
//               value={playerData.nacionalidad}
//               onChange={(e) =>
//                 setPlayerData({ ...playerData, nacionalidad: e.target.value })
//               }
//             />
//             <TextField
//               label="Posición"
//               value={playerData.posicion}
//               onChange={(e) =>
//                 setPlayerData({ ...playerData, posicion: e.target.value })
//               }
//             />
//             <TextField
//               label="Pie bueno"
//               value={playerData.pieBueno}
//               onChange={(e) =>
//                 setPlayerData({ ...playerData, pieBueno: e.target.value })
//               }
//             />
//             <div>
//               <label htmlFor="imagen">Imagen</label>
//               <input
//                 type="file"
//                 id="imagen"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </div>
//           </form>

//           <div className="banner__modal-actions">
//             <Button variant="contained" onClick={handleModalClose}>
//               Cancelar
//             </Button>
//             <Button variant="contained" color="primary">
//               Guardar
//             </Button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { Icon, Modal, TextField, Button, Select, MenuItem } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './Banner.css';
import { Link } from 'react-router-dom';

export function Banner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [playerData, setPlayerData] = useState({
    nombre: '',
    apellidos: '',
    estatura: '',
    edad: '',
    nacionalidad: '',
    posicion: '',
    pieBueno: '',
    imagen: null,
  });

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setPlayerData({
      nombre: '',
      apellidos: '',
      estatura: '',
      edad: '',
      nacionalidad: '',
      posicion: '',
      pieBueno: '',
      imagen: null,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPlayerData({ ...playerData, imagen: file });
    }
  };

  const handlePosicionChange = (e) => {
    setPlayerData({ ...playerData, posicion: e.target.value });
  };

  const handlePieBuenoChange = (e) => {
    setPlayerData({ ...playerData, pieBueno: e.target.value });
  };

  const imageInputLabelClass = playerData.imagen ? 'banner__modal-file-label active' : 'banner__modal-file-label';

  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__icon-container">
          <Icon component={SportsSoccerIcon} className="banner__icon" sx={{ fontSize: "2.5rem" }} />
        </div>
        <h2 className="banner__text">JUGADORES SEGUIDOS</h2>
      </div>
      <div className="banner__right">
        <Link to="#" className="banner__button" onClick={handleModalOpen}>
          <Icon component={PersonAddIcon} className="banner__button-icon" />
          Nueva Ficha
        </Link>

        <Link to="#" className="banner__button">
          <Icon component={AssignmentIcon} className="banner__button-icon" />
          Nuevo Informe
        </Link>
      </div>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        className="banner__modal"
      >
        <div className="banner__modal-content">
          <h2 className="banner__modal-title">Crear Ficha de Jugador</h2>

          <form className="banner__modal-form">
            <TextField
              label="Nombre"
              value={playerData.nombre}
              onChange={(e) =>
                setPlayerData({ ...playerData, nombre: e.target.value })
              }
            />
            <TextField
              label="Apellidos"
              value={playerData.apellidos}
              onChange={(e) =>
                setPlayerData({ ...playerData, apellidos: e.target.value })
              }
            />
            <TextField
              label="Estatura"
              value={playerData.estatura}
              onChange={(e) =>
                setPlayerData({ ...playerData, estatura: e.target.value })
              }
            />
            <TextField
              label="Edad"
              value={playerData.edad}
              onChange={(e) =>
                setPlayerData({ ...playerData, edad: e.target.value })
              }
            />
            <TextField
              label="Nacionalidad"
              value={playerData.nacionalidad}
              onChange={(e) =>
                setPlayerData({ ...playerData, nacionalidad: e.target.value })
              }
            />
            <div className="banner__modal-select">
              <label htmlFor="posicion">Posición</label>
              <Select
                id="posicion"
                value={playerData.posicion}
                onChange={handlePosicionChange}
                variant="outlined"
                fullWidth
              >
                <MenuItem value="Portero">Portero</MenuItem>
                <MenuItem value="Defensa">Defensa</MenuItem>
                <MenuItem value="Mediocentro">Mediocentro</MenuItem>
                <MenuItem value="Delantero">Delantero</MenuItem>
              </Select>
            </div>
            <div className="banner__modal-select">
              <label htmlFor="pieBueno">Pie Bueno</label>
              <Select
                id="pieBueno"
                value={playerData.pieBueno}
                onChange={handlePieBuenoChange}
                variant="outlined"
                fullWidth
              >
                <MenuItem value="Zurdo">Zurdo</MenuItem>
                <MenuItem value="Diestro">Diestro</MenuItem>
                <MenuItem value="Ambos">Ambos</MenuItem>
              </Select>
            </div>
            <div className="banner__modal-file-input">
              <label className={imageInputLabelClass} htmlFor="imagen">
                Imagen
              </label>
              <input
                type="file"
                id="imagen"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label className="banner__modal-file-button" htmlFor="imagen">
                Seleccionar archivo
              </label>
            </div>
          </form>

          <div className="banner__modal-actions">
            <Button variant="contained" onClick={handleModalClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary">
              Guardar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

