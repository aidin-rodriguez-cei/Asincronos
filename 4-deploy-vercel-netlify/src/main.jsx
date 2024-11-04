import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './lib/router'; 
import './css/peliculas.css';
import { IngresoProvider } from './context/IngresoContext';
import { ModoOscuroProvider } from './context/ModoOscuroContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModoOscuroProvider>
      <IngresoProvider>
        <RouterProvider router={router} />
      </IngresoProvider>
    </ModoOscuroProvider>
  </React.StrictMode>
);
