import { useState } from "react";
import "./register.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "@material-ui/core";
import "animate.css/animate.min.css";

export const Registro = () => {
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
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false); //

  const matches = useMediaQuery("(min-width:600px)");

  //funcion para cambiar de color el ckeckbox//
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  //funcion para cambiar el color de los selectores//
  const handleChange = (event) => {
    setPost(event.target.value);
  };

  //función para enviar el formulario al hacer click al boton registrar//
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

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.498)",
    height: "2.8rem",
    helperText: { fontSize: "30px" },
    input: {
      display: "none",
    },
  };

  return (
    <div className="register-container"  autocomplete="off">
      <form className="formRegister" onSubmit={handleRegister} autocomplete="off">
        <header className="HeaderRegister">
          <h1 className="headerTitle">REGISTRATE</h1>
        </header>

        <Grid
          container
          spacing={2}
          className="gridRegister"
          style={{ width: "45%", margin: "auto", height: "10%" }}
          autocomplete="off"
          direction="row"
        >
          <Grid className="gridRegister" item xs={6} sm={6}>
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              required
              style={{ outlineOffset: "red " }}
              value={name}
              autocomplete="off"
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
          <Grid item xs={6} sm={5}>
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
          <Grid item xs={6} sm={7}>
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
          <Grid item xs={6} sm={12} noValidate>
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
          <RadioGroup style={{margin:"auto",display:"flex",justifyContent:"space-evenly",paddingTop:"10px",marginLeft:"3em",gap:"3rem"}}
          row
          aria-label="rol"
          name="rol"
          value={post}
          onChange={handleChange}
        >
          
          <FormControlLabel
            value="ojeador"
            control={
              <Radio
                style={{
                  color: post === 'ojeador' ? "#C7F55C" : '',
                }}
              />
            }
            label={
              <Typography variant="span" style={{color: "rgba(255, 255, 255, 0.79)" }}>
              Jugador
              </Typography>
            }
          />
          
          <FormControlLabel
            value="jugador"
            control={
              <Radio
                style={{
                  color: post === 'jugador' ? "#C7F55C ": '',
                }}
              />
              
            }
            label={
              <Typography variant="span" style={{color: "rgba(255, 255, 255, 0.79)" }}>
              Ojeador
              </Typography>
            }
          />
        </RadioGroup>
          <FormControl
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <FormLabel component="legend"></FormLabel>

            <FormHelperText></FormHelperText>
          </FormControl>
          <FormGroup
            style={{
              display: "flex",
              marginTop: "5px",
              marginLeft: "auto",
              with: "14rem",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  required
                  className="check"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{
                    color: isChecked ? "#C7F55C" : "",
                    marginBottom: matches ? "10px" : "30px",
                  }}
                />
              }
              label={
                <Typography
                  onClick={showAlert}
                  variant="body1"
                  style={{
                    fontSize: matches ? "16px" : "12px",
                    color: "white",
                    marginBottom: matches ? "10px" : "35px",
                    height: "15px",
                    textDecoration: "underline",
                  }}
                >
                  Aceptar términos y condiciones
                </Typography>
              }
            />
          </FormGroup>
          <Grid item xs={12} sm={12} style={{ paddingTop: "1px" }}>
            <Button
              type="submit"
              variant="contained"
              style={{
                background: "#C7F55C",
                width: "14em",
                justifyContent: "center",
                alignItems: "center",
                height: matches ? "2.5rem" : "1.8rem",
              }}
              className="MuiButton"
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
        <div className="Account">
          <span className="link">¿Tienes cuenta?</span>
          <Link to="/login" className="link">
            Iniciar sesión
          </Link>
        </div>
      </form>
    </div>
  );
};