import React from 'react';
import './register.css'; // archivo CSS para los estilos

const Register = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <header className="header">
          <h1 className="header-title">REGISTRATE</h1>
        </header>
        <input className="input-field" type="text" placeholder="Correo electrónico" />
        <input className="input-field" type="text" placeholder="Usuario" />
        <input className="input-field" type="password" placeholder="Contraseña" />
        <div className="register">
          <div className="register-content">
            <span className="register-text">¿Tienes una cuenta?</span>
            <a href="#" className="login-link">Inicia Sesión</a>
          </div>
          <button className="register-button">REGISTRO</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
