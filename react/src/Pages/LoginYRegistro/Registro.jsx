import React, { useState } from "react";
import { Grid, TextField, Button, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel } from "@mui/material";
import "./register.css"; // Importa el archivo CSS personalizado
import { useMediaQuery } from "@material-ui/core";
import Radio from '@mui/material/Radio';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";




export function Registro() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [club, setClub] = useState("");
  const [nif, setNif] = useState("");
  const [post, setPost] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [campo1Focused, setCampo1Focused] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState('a');



  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();




  //funcion para cambiar el color de los selectores//
  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.498)",
    height: "2.8rem",
    helperText: { fontSize: "30px" },
    input: {
      display: "none",
    },
  };


  const handleFocus = () => {
    setCampo1Focused(true);
  };

  const handleBlur = () => {
    setCampo1Focused(false);
  };




  const handleRegister = async (event) => {
    event.preventDefault();

    // Enviar solicitud de registro al backend
    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        {
          name,
          surname,
          password,
          nif,
          club,
          country,
          city,
          phone,
          email,
          post,
        }
      );

      if (response.status === 201) {
        // Registro exitoso, mostrar notificación y redireccionar a la página de login
        setRegistrationSuccess("true");
        Swal.fire({
          position: "top-end",

          icon: "success",
          title: "Registro realizado con éxito",
          footer: "Revisa tu email para validar tu cuenta",
          color: "black",
          showConfirmButton: false,
          timer: 3500,
          toast: "true",
        });
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
        setRegistrationSuccess(false);
      }
    } catch (error) {
      // Manejo de errores de la solicitud
      setRegistrationSuccess(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        iconColor: "black",
        background: "rgba(255,255,255,0.5)",
        showConfirmButton: false,
        title: `<h2 style="font-size:1rem; font-family: 'Oswald', sans-serif">${error.response.data.message}</h2>`,
        timer: 6500,
        toast: "true",
        color: "white",
      });
      console.error("Error al registrar el usuario", error);
    }
  };

  const showAlert = () => {
    Swal.fire({
      title: "Politica de privacidad",
      html:
        "<p>En Scouters, nos tomamos muy en serio la privacidad de nuestros usuarios y clientes. Por esta razón, hemos elaborado esta política de privacidad para informarle sobre cómo recopilamos, utilizamos, compartimos y protegemos su información personal.</p>" +
        "<p>1. Información que recopilamos</p>" +
        "<p>Recopilamos información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, número de teléfono y otra información que pueda ser necesaria para proporcionarle nuestros servicios. También podemos recopilar información automáticamente a través de cookies y otras tecnologías de seguimiento.</p>" +
        "<p>2. Uso de la información</p>" +
        "<p>Utilizamos la información que recopilamos para proporcionarle nuestros servicios, mejorar nuestros productos y servicios, personalizar su experiencia y comunicarnos con usted. También podemos utilizar su información para fines de marketing y publicidad, siempre y cuando tengamos su consentimiento.</p>" +
        "<p>3. Compartir información</p>" +
        "<p>No compartimos su información personal con terceros, excepto en los casos en que sea necesario para proporcionarle nuestros servicios o cuando tengamos su consentimiento. También podemos compartir su información en caso de que sea requerido por la ley o por una orden judicial.</p>" +
        "<p>4. Protección de la información</p>" +
        "<p>Tomamos medidas de seguridad razonables para proteger su información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de su información.</p>" +
        "<p>5. Cambios en la política de privacidad</p>" +
        "<p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en nuestro sitio web.</p>" +
        "<p>Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, no dude en ponerse en contacto con nosotros.</p>",
      showClass: {
        popup: "animate_animated animate_fadeInDown",
      },
      hideClass: {
        popup: "animate_animated animate_fadeOutUp",
      },
    });
  };



  return (
    <div className="register-container2">
      <form className="formRegister2" autoComplete="off" onSubmit={handleRegister}>
        <header className="HeaderRegister2">
          <h1 className="headerTitle2">REGISTRATE</h1>
        </header>
        <Grid
          container
          spacing={2}
          className="gridRegister2"
          style={{ width: "45%", margin: "auto" }}
          direction="row"

        >
          <Grid item xs={6} sm={6}>
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              required
              style={{ outlineOffset: "red " }}
              value={name}
              className="dark-input"
              onChange={(event) => setName(event.target.value)}
              InputProps={{ style: inputStyle }}
            />



          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="apellido"
              label="Apellidos"
              variant="outlined"
              fullWidth
              required
              value={surname}
              onChange={(event) => setSurname(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{ style: inputStyle }}

            />

          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="contraseña"
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{ style: inputStyle }}

              helperText="Debe tener min 8 caracteres y contener al menos un número y un caracter especial"
              FormHelperTextProps={{
                style: { color: "white", fontSize: "12px", fontWeight: "200 " },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nif"
              label="NIF"
              variant="outlined"
              fullWidth
              required
              value={nif}
              onChange={(event) => setNif(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
            <input
              className="inputNif"
              accept="image/*"
              id="dni-file"
              type="file"
            />
            <label htmlFor="dni-file">
              <Button style={{ color: "#C7F55C" }} component="span">
                Adjuntar NIF
              </Button>
            </label>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField

              id="club"
              label="Club"
              variant="outlined"
              fullWidth
              required
              value={club}
              onChange={(event) => setClub(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="pais"
              label="País"
              variant="outlined"
              fullWidth
              required
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              InputProps={{ style: inputStyle, width: "30rem" }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="ciudad"
              label="Ciudad"
              variant="outlined"
              fullWidth
              required
              value={city}
              onChange={(event) => setCity(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="telefono"
              label="Teléfono"
              variant="outlined"
              fullWidth
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Typography sx={{ marginLeft: matches ? '8.5em' : '2.5em', marginTop: "5px", color: "white", fontFamily: 'Oswald' }}>ELIGE TU PERFIL</Typography>




          <FormLabel sx={{ display: "flex" }}></FormLabel>
          <RadioGroup onChange={handleChange}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{ display: "flex", flexDirection: matches ? 'row' : 'column', marginLeft: matches ? '6em' : '4.5rem', }}
          >
            <FormControlLabel
              value="Otro"
              control={<Radio color="default" sx={{ '&.Mui-checked': { color: "rgba(179, 221, 82, 1)" }, color: post === 'jugador' ? "#C7F55C " : '' }} />}
              label="Otro" sx={{ color: "white" }}
            />
            <FormControlLabel
              value="Ojeador"
              control={<Radio color="default" sx={{ '&.Mui-checked': { color: "rgba(179, 221, 82, 1)" }, color: post === 'jugador' ? "#C7F55C " : '' }} />}
              label="Ojeador" sx={{ color: "white" }}

            />
          </RadioGroup>



          <Grid sx={{ display: "flex", flexDirection: "row-reverse", margin: "auto" }}>
            <Typography onClick={showAlert} variant="span" sx={{ color: "white", marginTop: matches ? '10px' : '10px', cursor: "pointer" }}>Aceptar términos y condiciones </Typography>
            <Checkbox
              required
              {...label}
              defaultChecked
              color="success" // Cambia el color cuando el Checkbox está seleccionado
              sx={{
                color: '#000000e8',
                '&.Mui-checked': {
                  color: "#C7F55C", // Cambia el color del Checkbox seleccionado a verde

                },
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          style={{
            background: "#C7F55C",
            width: "14em",
            justifyContent: "center",
            alignItems: "center",
            height: matches ? "2.5rem" : "1.8rem",
            color: "black",
            className: "button_r",
            marginLeft: matches ? '2em' : '2px',
            marginTop: "20px"
          }}
        >
          Enviar
        </Button >
        <div className="Account_R">
          <span className="span">¿Tienes cuenta?</span>
          <Link to="/login" className="linkToLogin">
            Iniciar sesión
          </Link>
        </div>
      </form>
    </div>
  );
}






















