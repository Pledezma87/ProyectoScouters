import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import './index.css';
import { AuthProvider } from './AuthContext/AuthContext';
import { Context } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthProvider >
     <Context>
         <App />
    </Context>
  </AuthProvider>
</React.StrictMode>
);
