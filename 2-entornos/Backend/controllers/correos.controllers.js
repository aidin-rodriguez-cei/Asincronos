import {sections, appAdvantages, footer, comments, listaCorreos} from '../data/mockdata.js';


//importar la conexión a mysql
// import mysqlbd from '../data/mysqldb.js';

// Enpoint para devolver todos los correos
export const getAllCorreos = async (req, res) => {
    res.json(listaCorreos)
}


// obtener la lista de correos
// conectarme a la base de datos y pedir los datos
const query = 'SELECT * FROM correos';
const [filas] = await mysqlbd.query(query);
console.log(filas)


//devolver al usuario sus correos
res.status(200).json({
    msg: "Lista de correos obtenida con exito",
    success: "ok",
    data: filas
});
