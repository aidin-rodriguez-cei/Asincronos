import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './lib/routes'; 
import '../src/css/style.css'

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
