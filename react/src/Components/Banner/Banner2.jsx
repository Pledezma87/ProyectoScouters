import { useState } from 'react';
import { Icon, Modal, TextField, Button, Select, MenuItem, Box, Typography, TableContainer } from '@mui/material';
import { FaStar } from "react-icons/fa";
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './Banner2.css';
import { Link } from 'react-router-dom';

export function Banner2() {

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

  const [cardStates, setCardStates] = useState({
    1: { isFavorite: false },
    2: { isFavorite: false },
    3: { isFavorite: false },
  });

  const handleFavoriteClick = (id) => {
    setCardStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isFavorite: !prevState[id].isFavorite,
      },
    }));
  };

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

  // FUNCIONES MODAL 2
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const handleReportModalOpen = () => {
    setReportModalOpen(true);
  };

  const handleReportModalClose = () => {
    setReportModalOpen(false);
  };


  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__icon-container">
          <Icon component={DescriptionIcon} className="banner__icon" sx={{ fontSize: "2.5rem" }} />
        </div>
        <h2 className="banner__text">INFORMES REALIZADOS</h2>
      </div>
      <div className="banner__right">
        <Link className="banner__button" onClick={handleModalOpen}>
          <Icon component={PersonAddIcon} className="banner__button-icon" />
          Nueva Ficha
        </Link>

        <Link className="banner__button" onClick={handleReportModalOpen}>
          <Icon component={AssignmentIcon} className="banner__button-icon" />
          Nuevo Informe
        </Link>
      </div>

      {/* MODAL NUEVA FICHA */}
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


      {/* MODAL NUEVO INFORME */}
      <Modal
        open={reportModalOpen}
        onClose={handleReportModalClose}
        className="banner__modal"
      >
        <Box
          sx={{
            margin: "2rem auto",
            width: "40%",
            border: "1px solid #c7f55c",
            borderRadius: "5px",
            maxHeight: "400px",
            overflowY: "auto",
            background: "white"
          }}
        >
          {/* <div className="custom-container"> */}
          <TableContainer>
            <Box sx={{ paddingBottom: "2rem" }}>
              <Typography variant="h4" component="h1" gutterBottom fontFamily="Oswald" textTransform="uppercase" fontWeight="500" textAlign="center">
                Selecciona el jugador
              </Typography>{" "}
              <Typography variant="h5" component="h1" gutterBottom fontFamily="Oswald" fontWeight="200" textAlign="center">
                Puedes elegir a tus jugadores seguidos o buscar nuevos
              </Typography>

              <Box   /* BARRA VERDE*/
                sx={{
                  borderBottom: "1px solid #c7f55c",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
              </Box>
              {/* JUGADOR */}
              <Box
                sx={{
                  // borderBottom: "1px solid #c7f55c",
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "1rem 0",
                }}>


                <Typography variant="h6">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox-circle">
                      <svg viewBox="0 0 52 52" className="checkmark">
                        <circle
                          fill="none"
                          r="25"
                          cy="26"
                          cx="26"
                          className="checkmark-circle"
                        ></circle>
                        <path
                          d="M16 26l9.2 8.4 17.4-21.4"
                          className="checkmark-kick"
                        ></path>
                      </svg>
                    </div>
                  </label>
                </Typography>
                <Box>
                  <Typography
                    variant="h6"
                    component="img"
                    src="https://media.ultimahora.com/adjuntos/169/imagenes/007/794/0007794606.jpg"
                    className="imagen"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "left",
                    marginRight: "13rem",
                  }}>

                  <Typography variant="h6" fontFamily="Oswald" fontWeight="400">Antonio Sanchez Garcia</Typography>
                  <Typography variant="h6" fontFamily="Oswald" fontWeight="300">Villaverde F.C</Typography>
                </Box>
                <Typography variant="body1"></Typography>
                <Typography variant="h2">
                  <FaStar
                    className={cardStates[3]?.isFavorite ? "star active" : "star"}
                    onClick={() => handleFavoriteClick(3)}
                    style={{
                      fontSize: "2rem",
                      color: cardStates[3]?.isFavorite
                        ? "rgba(255, 217, 0, 0.993)"
                        : "#b7b7b7",
                    }}
                  />
                </Typography>
              </Box>

              <Box   /* BARRA VERDE*/
                sx={{
                  borderBottom: "1px solid #c7f55c",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
              </Box>
              {/*ESPACIO 2 JUGADOR  */}


              {/* BOTONES */}
              <div className="banner__modal-actions">
                <Button variant="contained" onClick={handleReportModalClose}>
                  Cancelar
                </Button>
                <Button variant="contained" color="primary">
                  Aceptar
                </Button>
              </div>

            </Box>
          </TableContainer>
          {/* </div> */}

        </Box>
      </Modal>


    </div>
  );
}
