import React, { useState, useContext } from 'react';
import { PlayersContext } from '../../Context/Context';
import { Icon, Modal, TextField, Button, Select, MenuItem, Box, Typography, TableContainer, OutlinedInput, InputAdornment, Grid } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import './Banner.css';
import { Link } from 'react-router-dom';

export function Banner() {
  const { data, crearFichaJugador } = useContext(PlayersContext);
  console.log(data);
  const [filterText, setFilterText] = useState('');
  const [genero, setGenero] = useState('');
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };
  const url = 'http://localhost:8000/players/Avatar/';
  const [modalOpen, setModalOpen] = useState(false);
  const [playerData, setPlayerData] = useState({
    Nombre: '',
    Apellidos: '',
    Género: '',
    Estatura: '',
    Edad: '',
    Nacionalidad: '',
    Posición: '',
    PieBueno: '',
    Club: '',
    // Avatar: null,
  });

  const handleGuardar = () => {
    console.log("guardar ficha")
    // Verificar que playerData tenga todos los datos necesarios antes de guardar
    if (
      playerData.Nombre &&
      playerData.Apellidos &&
      playerData.Género &&
      playerData.Estatura &&
      playerData.Edad &&
      playerData.Nacionalidad &&
      playerData.Posición &&
      playerData.PieBueno &&
      playerData.Club
      // playerData.Avatar
    ) {
      // Llamar a la función del Context para crear la ficha de jugador
      crearFichaJugador(playerData);
      console.log("crear ficha")
      // Cerrar el Modal y limpiar los datos del formulario
      handleModalClose();
    } else {
      // Mostrar un mensaje de error o realizar alguna acción si falta algún dato requerido
      console.log('Faltan datos requeridos para crear la ficha de jugador.');
    }
  };

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
      Nombre: '',
      Apellidos: '',
      Género: '',
      Estatura: '',
      Edad: '',
      Nacionalidad: '',
      Posición: '',
      PieBueno: '',
      Club: '',
      // Avatar: null,
    });
    setGenero('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPlayerData({ ...playerData, Avatar: file });
    }
  };

  const handlePosicionChange = (e) => {
    setPlayerData({ ...playerData, Posición: e.target.value });
  };

  const handlePieBuenoChange = (e) => {
    setPlayerData({ ...playerData, PieBueno: e.target.value });
  };

  const imageInputLabelClass = playerData.Avatar ? 'banner__modal-file-label active' : 'banner__modal-file-label';

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
          <Icon component={SportsSoccerIcon} className="banner__icon" sx={{ fontSize: "2.5rem" }} />
        </div>
        <h2 className="banner__text">JUGADORES SEGUIDOS</h2>
      </div>
      <div className="banner__right">
        <Link to="#" className="banner__button" onClick={handleModalOpen}>
          <Icon component={PersonAddIcon} className="banner__button-icon" />
          Nueva Ficha
        </Link>
        <Link to="/comparar" className="banner__button" onClick={handleModalOpen}>
          <Icon component={CompareArrowsIcon} className="banner__button-icon" />
          Comparar Jugadores
        </Link>
        <Link to="#" className="banner__button" onClick={handleReportModalOpen}>
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
              value={playerData.Nombre}
              onChange={(e) =>
                setPlayerData({ ...playerData, Nombre: e.target.value })
              }
            />
            <TextField
              label="Apellidos"
              value={playerData.Apellidos}
              onChange={(e) =>
                setPlayerData({ ...playerData, Apellidos: e.target.value })
              }
            />
            <div className="banner__modal-select">
              <label htmlFor="genero">Género</label>
              <Select
                label="Género"
                id="genero"
                value={playerData.Género}
                onChange={(e) => setPlayerData({ ...playerData, Género: e.target.value })}
                variant="outlined"
                fullWidth
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
              </Select>
            </div>
            <TextField
              label="Estatura"
              value={playerData.Estatura}
              onChange={(e) =>
                setPlayerData({ ...playerData, Estatura: e.target.value })
              }
            />
            <TextField
              label="Edad"
              value={playerData.Edad}
              onChange={(e) =>
                setPlayerData({ ...playerData, Edad: e.target.value })
              }
            />
            <TextField
              label="Nacionalidad"
              value={playerData.Nacionalidad}
              onChange={(e) =>
                setPlayerData({ ...playerData, Nacionalidad: e.target.value })
              }
            />
            <div className="banner__modal-select">
              <label htmlFor="posicion">Posición</label>
              <Select
                id="posicion"
                value={playerData.Posición}
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
                value={playerData.PieBueno}
                onChange={handlePieBuenoChange}
                variant="outlined"
                fullWidth
              >
                <MenuItem value="Zurdo">Zurdo</MenuItem>
                <MenuItem value="Diestro">Diestro</MenuItem>
                <MenuItem value="Ambos">Ambos</MenuItem>
              </Select>
            </div>
            <TextField
              label="Club"
              value={playerData.Club}
              onChange={(e) =>
                setPlayerData({ ...playerData, Club: e.target.value })
              }
            />
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
            <Button variant="contained" color="primary" onClick={handleGuardar}>
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
            borderRadius: "5px",
            maxHeight: "400px",
            overflowY: "auto",
            background: "#ffffff",
            boxShadow: "5px 0 0 0 #c7f55c"
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom fontFamily="Oswald" textTransform="uppercase" fontWeight="500" textAlign="center">
            Selecciona el jugador
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom fontFamily="Oswald" fontWeight="200" textAlign="center">
            Puedes elegir a tus jugadores seguidos o buscar nuevos
          </Typography>
          <Grid sx={{ background: "#b6b2b2", }}>
            <OutlinedInput
              placeholder="Buscar jugadores"
              value={filterText}
              onChange={handleFilterChange}
              fullWidth
              sx={{
                margin: "10px 20px 10px 18px",
                width: "95%",
                borderRadius: "50px", // Ajusta este valor para cambiar la forma ovalada
                backgroundColor: "#f5f5f5", // Color de fondo de la barra de búsqueda
                // Espaciado dentro de la barra de búsqueda
                // Agrega más estilos aquí según sea necesario
              }}
              startAdornment={
                <InputAdornment position="start" >
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Grid>

          <TableContainer>
            {data.length > 0 ? (
              data
                .filter((player) =>
                  player.jugador &&
                  `${player.jugador.Nombre} ${player.jugador.Apellidos}`.toLowerCase().includes(filterText.toLowerCase())
                )
                .map((player) => (
                  <Box key={player.jugador.PlayerId} sx={{ paddingBottom: "2rem" }}>


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

                      <label className="container">
                        <input type="checkbox" />
                        <div className="checkmark"></div>
                      </label>

                      <Box>
                        <Typography variant="h6" component="div">
                          <Link key={player.jugador._id} to={`/Informe/${player.jugador._id}`}>
                            <img className="banner2-foto-jugador" src={url + player.jugador.Avatar} alt="Foto" />
                          </Link>
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "left",
                          marginRight: "25em",
                        }}>
                        <Box sx={{ display: "flex", gap: "5px" }}>
                          <Typography variant="h6" fontFamily="Oswald" fontWeight="400">{player.jugador.Nombre}</Typography>
                          <Typography variant="h6" fontFamily="Oswald" fontWeight="400">{player.jugador.Apellidos}</Typography>
                        </Box>

                        <Typography sx={{ width: "100%", display: "inline", }} variant="" fontFamily="Oswald" fontWeight="300">{player.jugador.Club}</Typography>
                      </Box>

                      <Typography variant="body1"></Typography>

                      <label className="container">
                        <input type="checkbox" />
                        <svg height="24px" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521 c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506 c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625 c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191 s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586 s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path>
                          </g>
                        </svg>
                      </label>
                    </Box>
                    {/*ESPACIO 2 JUGADOR  */}
                  </Box>
                ))
            ) : (
              <Typography sx={{ display: "flex", justifyContent: "center" }} variant="h6">No hay fichas de jugadores creadas.</Typography>
            )}
            <Box   /* BARRA VERDE*/
              sx={{
                borderBottom: "1px solid #c7f55c",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
            </Box>
          </TableContainer>
          <div className="banner__modal-actions">
            <Button variant="contained" onClick={handleReportModalClose} sx={{ marginBottom: "10px" }}>
              Cancelar
            </Button>
            <Link to="/Informe">
              <Button variant="contained" color="primary">
                Aceptar
              </Button>
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
}