import React from 'react';
import './App.css';
// import Registro from './Components/registro_y_login/Registro';
// import Login from './Components/registro_y_login/Login';
// import RadarChart from './Components/Metricas/RadarChart';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Landing} from './Pages/Landing/Landing'
import { AvisoLegal } from './Pages/AvisoLegal/AvisoLegal';
import { InterfazJugadores } from './Pages/InterfazJugadores/InterfazJugadores';
import { Login } from './Pages/LoginYRegistro/Login';
import { Registro } from './Pages/LoginYRegistro/Registro';
import { InterfazInformes } from './Pages/InterfazInformes/InterfazInformes';


export function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}  />
        <Route path="/AvisoLegal" element={<AvisoLegal/>}  />
        <Route path="/InterfazJugadores" element={<InterfazJugadores/>}  />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/error' element={<Error/>} /> */}
        <Route path='/registro' element={<Registro/>} />
        <Route path='/InterfazInformes' element={<InterfazInformes/>} /> 
      </Routes>
    </BrowserRouter>
  );
};

