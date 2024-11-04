import express from 'express'
import cors from 'cors'
import { HOST, PORT } from './config/config.js'
//import apiRoutes from './routes/index.routes.js'
import mongoRoutes from './routes/mongodeb.routes.js'


const app = express()

app.use(cors())
app.use(express.static('public'))

// procesa mi body como JSON y como Form
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/', ( req , res ) => {

    res.setHeader("Content-Type", "text/html")

    const landingHTML = `
        <h1>Bienvenidos a nuestra REST-API</h1>
        <p>Servidor uniciado en ${HOST};${PORT}</p>
    `;

    res.status(200).send(landingHTML)
})

// Rutas con mongoDB
// app.use("/API/v1/", apiRoutes)
app.use("/API/V1/mongo", mongoRoutes);



app.listen(PORT, () => {
    console.log(`Iniciando API en ${HOST}:${PORT}`)
})