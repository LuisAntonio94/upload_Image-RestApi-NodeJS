import { Router } from 'express';
import { helloworld } from '../controllers/photoController';

const router = Router();

// Endpoints
//router.route('/').get((req, res) => res.status(200).send({message:'Hello World!!!'}));
router.route('/').get(helloworld);


export default router;