import React, { createContext, useState, useContext } from 'react';

// Crear el Contexto
const ModoOscuroContext = createContext();

// Crear el Proveedor del Contexto
const ModoOscuroProvider = ({ children }) => {
  const [tema, setTema] = useState('light'); 

  const toggleTema = () => {
    setTema(prevTema => (prevTema === 'light' ? 'dark' : 'light'));
  };

  return (
    <ModoOscuroContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ModoOscuroContext.Provider>
  );
};

// Crear un hook para usar el contexto más fácilmente
const useModoOscuro = () => useContext(ModoOscuroContext);

export { ModoOscuroProvider, useModoOscuro, ModoOscuroContext };
