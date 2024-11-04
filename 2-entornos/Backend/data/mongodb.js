import mongoose, { Types } from 'mongoose'
import {mongodbUri} from '../config/config.js'

// crear una conexión 
const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUri);
        console.log("MongoDB conectado correctamente");
    }catch (e){
        console.log("Error conectado a MongoDB: ", e.message);
        process.exit(1);
    }

}


// crear nuestro esquema

// SubSchema o nestedSchema Address para Users
const addressSchema = new mongoose.Schema({
    calle: String,
    codigopostal: String
})

// Schema de Usuario
const userSchema =  new mongoose.Schema({
    //username: String,
    //email: String

    username:{
        type: String,
        require: true,
       // unique: true
    },
    email: {
        type: String,
       // unique: true,
        require: true
    },
    address: addressSchema 
})



//Schema de Correos
const emailSchema = new mongoose.Schema({
    remitente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    destinatario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    asunto: {
        type: String,
        require: true,
    },
    contenido: {
        type: String,
        require: true,
    },
    isLeido: {
        type: Boolean,
        default:false
        }
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }

    },{
        timestamps: true,
        strict: false

})

// Opciones de Mongoose Schemas
// - {timestamps: true} // me agrega los campos de createdAt y updatedAt
// - {Strict: False} me permite utilizar campos adicionales
// - {versionKey: false} desactiva el "_V"


// crear nuestros modelos

const User = mongoose.model('User', userSchema)
const Email = mongoose.model('Email', emailSchema)

// se crearán automáticamente las colecciones si no existen pero en minùsculas y plural
// User -> users
// Email -> emails

export { connectDB, User, Email}