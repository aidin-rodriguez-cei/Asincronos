import dotenv from 'dotenv';

// Configurar variables de entorno
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || 'http://localhost';


// Configuración de MySQL
export const mysqlConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'db_tuBaseDeDatos',

}


// Configuración de MongoDB
export const mongodbUri = process.env.MONGODB_URI;
