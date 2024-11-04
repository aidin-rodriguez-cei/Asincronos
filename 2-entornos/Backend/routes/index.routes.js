import { Router } from 'express';
import { getLanding, getAllCorreos, loginUser } from '../controllers/correos.controller.js';

const router = Router();

router.get('/json-data', getLanding);
router.get('/db-data', getAllCorreos);
outer.post('/login', loginUser); 

export default router;