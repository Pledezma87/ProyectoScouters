import React from 'react';
import './App.css';
import Registro from './Components/registro_y_login/Registro';
import Login from './Components/registro_y_login/Login';
import RadarChart from './Components/Metricas/RadarChart';


const App = () => {
  return (
    <div>
      <Registro/>
        <Login/>
        <RadarChart/>
    </div>
  );
};

export default App;