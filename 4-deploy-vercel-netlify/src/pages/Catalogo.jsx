import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IngresoContext } from '../context/IngresoContext';
import '../css/peliculas.css';

const Catalogo = () => {
  const { id } = useParams();
  const { ingreso } = useContext(IngresoContext);
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ingreso) {
      navigate('/');
      return;
    }
    getPeliculas(id);
  }, [id, ingreso, navigate]);

  const getPeliculas = async (userId) => {
    try {
      const respuesta = await fetch(`/backend/API/peliculas_${userId}.json`);
      const objeto = await respuesta.json();
      setPeliculas(objeto.peliculas);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  return (
    <div className="catalog-container">
      {peliculas.map(pelicula => (
        <div key={pelicula.id} className="peliculas">
          <img src={pelicula.imagen} alt={pelicula.titulo} />
          <h2>{pelicula.titulo}</h2>
          <p>{pelicula.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default Catalogo





