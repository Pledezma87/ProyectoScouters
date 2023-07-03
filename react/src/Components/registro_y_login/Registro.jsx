import React from 'react';
import './register.css'; // archivo CSS para los estilos

const Registro = () => {
  return (
    <div className="login-container2">
      <form className="loginForm">
        <header className="Header">
          <h1 className="headerTitle">REGISTRATE</h1>
        </header>
        <input className="inputField" type="text" placeholder="Correo electrónico" />
        <input className="inputField" type="text" placeholder="Usuario" />
        <input className="inputField" type="password" placeholder="Contraseña" />
        <div className="Register">
          <div className="registerContent">
            <span className="register-text">¿Tienes una cuenta?</span>
            <a href="/" className="loginLink">Inicia Sesión</a>
          </div>
          <button className="registerButton">REGISTRO</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
