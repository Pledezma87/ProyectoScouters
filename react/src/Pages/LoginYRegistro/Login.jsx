import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Button, TextField, Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

export const Login = () => {
  const { username,setUsername } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const matches = useMediaQuery("(min-width:600px)");

  const [showLoader, setShowLoader] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        name,
        password,
      });

      if (response.status === 200) {
        setShowLoader(true);

        setTimeout(() => {
          navigate("/InterfazJugadores", {
            replace: true,
          });
        }, 3500);
        setUsername(name)
        login()
      } else {
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        color: "black",
        backdrop: "true",
        showConfirmButton: false,
        iconColor: "black",
        background: "rgba(255,255,255,0.5)",
        text: error.response.data.message,
        timer: 2500,
        toast: "true",
        allowOutsideClick: "true",
        showCloseButton: "true",
      });
      console.error(error);
    }
  };
  // login();
  useEffect(() => {
    return () => {
      setShowLoader(false);
    };
  }, []);

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.498)",
    height: "2.8rem",
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="loginForm">
        <header className="HeaderLogin">
          <h1 className="headerTitleLogin">INICIAR SESIÓN</h1>
        </header>
        <Grid
          className="gridLogin"
          container
          spacing={2}
          style={{
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>

          <Grid>
            <Button
              onClick={handleLogin}
              style={{
                background: " #C7F55C",
                margin: "auto",
                display: "flex",
                width: matches ? "15rem" : "10rem",
              }}
            >
              INICIAR SESIÓN
            </Button>
          </Grid>
        </Grid>
        <div className="loginContent">
          <span className="link1">¿ Aún no tienes cuenta?</span>
          <Link to="/registro" className="link1">
            Registrate
          </Link>
        </div>
        <div className="forgotPassword">
          <Link to="/reset-password" className="link1-reset"  >
          Olvidé mi contraseña
          </Link>
        </div>
      </form>
      {showLoader && <span className="loader"></span>}
    </div>
  );
};