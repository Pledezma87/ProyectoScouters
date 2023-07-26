import { useState } from "react";
import axios from "axios";
import { Button, TextField, Grid } from "@material-ui/core";
import Swal from "sweetalert2";

// Expresión regular para validar la contraseña
const passwordPWD_REGEX =  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,60}$/;;

export const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();

    // Validar la contraseña antes de enviarla al servidor
    if (!passwordPWD_REGEX.test(newPassword)) {
      Swal.fire({
        icon: "error",
        title: "Contraseña no válida",
        text: "La contraseña debe contener al menos 8 caracteres y al menos un número y un carácter especial.",
        timer: 4500,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
      return;
    }

    try {
      const token = "tu_token_aqui"; // Reemplaza "tu_token_aqui" con el token real obtenido del enlace de restablecimiento de contraseña
      const response = await axios.post(`http://localhost:8000/users/reset-password/${token}`, {
        email,
        newPassword,
      });

      if (response?.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Contraseña restablecida, verifica tu correo",
          timer: 4500,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
      }
    } catch (error) {
      handleResetError(error);
    }
  };

  const handleResetError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Error al restablecer contraseña",
      timer: 4500,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
    });
  };

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.498)",
    height: "2.8rem",
  };
  return (
    <>
      <div className="resetPassword">
        <form className="resetPasswordForm" onSubmit={handleResetPassword}>
          <header className="headerResetPassword">
            <h1 className="TitleResetPassword">Restablecer Contraseña</h1>
            <span></span>
          </header>

          <Grid
            className="resetPassword-container"
            container
            spacing={2}
            sx={{
              width: "50%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <Grid item xs={12} sm={8}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                InputProps={{ style: inputStyle }}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <TextField
                label="Nueva Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                InputProps={{ style: inputStyle }}
                helperText="Debe tener al menos 8 caracteres y contener al menos un número y un carácter especial"
                          FormHelperTextProps={{
                            style: { color: "white", fontSize: "12px", fontWeight: "200 " },
                          }}
              />
            </Grid>
          </Grid>
          <Button
            className="ButtoN"
            type="submit"
            variant="contained"
            style={{
              color: "black",
              background: "#C7F55C",
              width: "14em",
              margin: "10px 40px",
            }}
          >
            Enviar
          </Button>
        </form>
      </div>
    </>
  );
};