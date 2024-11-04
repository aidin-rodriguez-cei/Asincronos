import { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IngresoContext } from '../context/IngresoContext';
import '../css/peliculas.css';

const Home = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useContext(IngresoContext);
  const navigate = useNavigate();

  useEffect(() => {
    getUsuarios('/backend/API/datos.json'); 
  }, []);

  const getUsuarios = async (url) => {
    try {
      const respuesta = await fetch(url);
      const objeto = await respuesta.json();
      setUsuarios(objeto.usuarios);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const handleLogin = () => {
    const usuario = usuarios.find(u => u.nombre === user && u.clave === pass);
    if (usuario) {
      login(usuario);
      navigate(`/catalogo/${usuario.id}`);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="home-container">
      <h1 className="titulo-inicial">Tus películas favoritas</h1>
      <div className="ingreso-container">
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleLogin}>Ingresar</button>
      </div>
    </div>
  );
};

export default Home;







