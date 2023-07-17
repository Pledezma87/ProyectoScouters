import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Grid,
  TextField,
  Button,
  Checkbox,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const TokenExpirado = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.498)",
    height: "2.8rem",
  };

  const handleRequestNewToken = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento de envío por defecto del formulario
    try {
      const response = await fetch(
        "http://localhost:8000/users/generate-new-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage("Nuevo token de confirmación generado");
        Swal.fire({
          icon: "success",
          title: "Nuevo token de confirmación generado,verifique su correo",
          timer: 10000,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
      } else {
        const errorData = await response.json();
        setMessage(
          `Error al generar un nuevo token de confirmación: ${errorData.message}`
        );
        Swal.fire({
          icon: "error",
          title: `Error al generar un nuevo token de confirmación: ${errorData.message}`,
          timer: 10000,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error(
        "Error al solicitar un nuevo token de confirmación:",
        error
      );
      setMessage("Error al solicitar un nuevo token de confirmación");
      Swal.fire({
        icon: "error",
        title: "Error al solicitar un nuevo token de confirmación",
        timer: 10000,
        toast: true,
        position: "top-end",
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="tokenExpired">
      <form className="tokenExpiredForm" onSubmit={handleRequestNewToken}>
        <header className="HeadertokenExpired">
          <h1 className="TitleExpired">CONFIRMAR REGISTRO</h1>
        </header>
        <Grid  className="tokenExpired-container"
          container
          spacing={2}
          sx={{
            width: "50%",
            margin: "auto",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginTop:"2rem"
        
          

          }}
        >
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      InputProps={{ style: inputStyle }}
                    />
                  </Grid>

                  <Button             
                  className="ButtoN"
                  type="submit"
                  variant="contained"
                  sx={{
                    color:"black",
                    background: "#C7F55C",
                    width: "14em",
                    marginLeft:"1rem",

                    "&:hover": { // Agrega esta regla para anular el efecto hover
                      background: "#C7F55C", // Puedes definir el mismo color o uno diferente si lo deseas
                    },
                  }}
                >
                 Enviar
                </Button>
          </Grid>
      </form>
    </div>
  );
};