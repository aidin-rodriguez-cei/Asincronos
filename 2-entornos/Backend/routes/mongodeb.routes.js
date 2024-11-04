import { Router } from "express";

// controllers tipicos de un CRUD
import { getEmails, getEmailById, createEmail, deleteEmail, updateEmail} from '../controllers/correos.mongo.controllers.js'

// controllers especificos
import {getEmailsByUserId, getEmailsByAsunto} from '../controllers/correos.mongo.controllers.js'

const router = Router();

router.get('/correos',        getEmails);
router.get('/correos/:id',    getEmailById);
router.post('/correos',       createEmail);
router.delete('/correos/:id', deleteEmail);
router.patch('/correos/:id',  updateEmail); // marcarlo como leído

// rutas especificas 

// quiero correos de un usuario especifico 
router.get('/correos/user/:userid', getEmailsByUserId);

//quiero correos con un asunto parecido a "importante"
router.get('/correos/asunto/:asunto', getEmailsByAsunto)

// router.get('/users',        getUsers);
// router.get('/users/:id',    getUsersById);
// router.post('/users',       createUsers;
// router.delete('/users/:id', deleteUsers);
// router.patch('/users/:id',  updateUsers); // marcarlo como leído

export default router;