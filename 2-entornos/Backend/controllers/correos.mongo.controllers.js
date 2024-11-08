import {connectDB} from '../data/mongodb.js'
import {User, Email} from '../data/mongodb.js'

// conecto a MongoDB
connectDB();

// Obtener todos los emails
export const getEmails = async(req, res, next) => {

    try {

        console.log("correos");
        //find() trae los elementos
        //populate() trae el documento vinculado según mi schema
        //   el primer atributo es el nombre de la propiedad
        //   el segundo atributo son los campos de deseo (No quiero traer contraseña!)
        const emails = await Email.find().populate('remitente destinatari','username email');
        res.json(emails)

    }catch (e) {
        res.status(500).json({message: e.message})
    }
}

// Obtener un email usando su ID
export const getEmailById = async(req, res, next) => {
    try{

    const correoId = req.params.id;
    const email = await Email.findById(correoId).populate("remitente destinatario", "username email");

    if(!email) return res.status(404).json({message: "Correo no encontrado"});
    res.status(200).json(email);

    }catch(e){
        res.status(500).json({message: e.message})
    }

}

// Crear un nuevo email
export const createEmail = async(req, res, next) => {
    try{

        const {remitente, destinatario, asunto, contenido} = req.body;

        const newEmail = new Email ({  remitente, 
                                       destinatario, 
                                       asunto, 
                                       contenido
                                    })

        await newEmail.save(); // guardar el nuevo Documento en la base de datos

        res.status(201).json(newEmail);

    }catch(e){
        res.status(500).json({message: e.message})
    }
}

// Eliminar un correo
export const deleteEmail = async(req, res, next) => {
    try{
        const correoId = req.params.id;
        const deleteEmail = await Email.findByIdAndDelete(correoId);
        if(!deleteEmail) return res.status(404).json({message: "Correo no encontrado"})
        res.status(204).json({message:"Correo eliminado correctamente"})    

    }catch(e){
        res.status(500).json({message: e.message})
    }

}

// Marcar correo como leido

export const updateEmail = async(req, res, next) => {
    try{
        const correoId = req.params.id;
        // utilizamos  {new:true} para que nos devuelva el documento actualizado

        const updatedEmail = await Email.findByIdAndUpdate(
            correoId,
            {isLeido: true},
            {new: true}
        );

        if(!updateEmail) return res.status(400).json({message: "Correo no encontrado"})
            res.status(200).json(updatedEmail);

    }catch(e){
        res.status(500).json({message: e.message})
    }

}


export const getEmailsByUserId = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        // el $or se utiliza para buscar correos donde el usuario sea el destinatario o remitente
        const email = await Email.find({ 
            $or: [
                {remitente: userId},
                {destinatario: userId}
            ]
        })
        .populate("remitente destinatario", "username email")
        .sort({createdAt: -1}); // ordenar por fecha de creación

        res.status(200).json({message:e.message})

    } catch(e){
        res.status(500).json({message:e.message})
    }
}

export const getEmailsByAsunto = async (req, res, next) => {

}