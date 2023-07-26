import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Landing} from './Pages/Landing/Landing'
import { AvisoLegal } from './Pages/AvisoLegal/AvisoLegal';
import { InterfazJugadores } from './Pages/InterfazJugadores/InterfazJugadores';
import { Login } from './Pages/LoginYRegistro/Login';
import { Registro } from './Pages/LoginYRegistro/Registro';
import { InterfazInformes } from './Pages/InterfazInformes/InterfazInformes';
import { NuevaFicha } from './Pages/NuevaFicha/NuevaFicha';
import { FichaJugador } from './Pages/FichaJugador/FichaJugador';
import {TokenExpirado} from './Pages/LoginYRegistro/TokenExpirado';
import { InformeJugador } from './Pages/InformeJugador/Informe';
import { PasswordReset } from './Pages/LoginYRegistro/PasswordReset';


export function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}  />
        <Route path="/AvisoLegal" element={<AvisoLegal/>}  />
        <Route path="/InterfazJugadores" element={<InterfazJugadores/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/TokenExpirado' element={<TokenExpirado />} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/InterfazInformes' element={<InterfazInformes/>} /> 
        <Route path='/NuevaFicha' element={<NuevaFicha/>} />
        <Route path='/FichaJugador' element={<FichaJugador/>} />
        <Route path='/Informe' element={<InformeJugador/>} />
        <Route path="/reset-password" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
};

