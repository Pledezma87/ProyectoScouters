import { useState, useContext } from 'react';
import { Icon, Modal, TextField, Button, Select, MenuItem, Box, Typography, TableContainer, OutlinedInput, InputAdornment, Grid } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search'
import './Banner2.css';
import { Link } from 'react-router-dom';
import { PlayersContext } from '../../Context/Context';
import { display } from '@mui/system';

export function Banner2() {
  const { data, } = useContext(PlayersContext);
  const url = 'http://localhost:8000/players/Avatar/'
  const [modalOpen, setModalOpen] = useState(false);
  const [playerData, setPlayerData] = useState({
    nombre: '',
    apellidos: '',
    estatura: '',
    edad: '',
    nacionalidad: '',
    posicion: '',
    pieBueno: '',
    club: '',
    imagen: null,
  });


  const [filterText, setFilterText] = useState('');
  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
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
      club: '',
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

  const imageInputLabelClass = playerData.imagen ? 'banner_modal-file-label active' : 'banner_modal-file-label';

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
            <TextField
              label="Club"
              value={playerData.club}
              onChange={(e) =>
                setPlayerData({ ...playerData, club: e.target.value })
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
            // border: "1px solid#c7f55c",
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
                          <img className="banner2-foto-jugador" src={url + player.jugador.Avatar} alt="Foto" />
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












