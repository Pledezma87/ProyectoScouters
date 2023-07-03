import React from 'react';
import './login.css'; // archivo CSS para los estilos

const Login = () => {
  return (
    <div className="loginContainer">
      <form className="loginForm">
        <header className="Header">
          <h1 className="headerTitle">INICIA SESIÓN</h1>
        </header>
        <input className="inputField" type="text" placeholder="Correo electrónico" />
        <input className="inputField" type="text" placeholder="Usuario" />
        <input className="inputField" type="password" placeholder="Contraseña" />
        <div className="Register">
          <div className="registerContent">
           
            <a href="#" className="loginLink">Recupera tu contraseña</a>
          </div>
          <button className="registerButton">INICIAR SESIÓN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;