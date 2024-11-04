import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useModoOscuro } from './context/ModoOscuroContext';
import { useContext } from 'react';
import { IngresoContext } from './context/IngresoContext';
import './css/peliculas.css';

const Navbar = () => {
  const { ingreso, logout } = useContext(IngresoContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav>
      <Link to="/">Inicio</Link>
      {ingreso ? (
        <>
          <Link to={`/catalogo/${ingreso.id}`}>Películas</Link>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </>
      ) : null}
    </nav>
  );
};

const Layout = () => {
  const { tema, toggleTema } = useModoOscuro();

  return (
    <div className={tema}>
      <header>
        <div className="header-content">
          <Navbar />
          <button className="theme-toggle" onClick={toggleTema}>
            Cambiar Tema: {tema}
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;



