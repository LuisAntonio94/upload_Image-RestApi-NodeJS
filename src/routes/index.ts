import { Router } from 'express';
import photoRouter from './PhotoRouter';

const router = Router();

// Endpoints
router.use('/photo', photoRouter);

// Prueba
function helloworld(req, res) {
	const { name } = req.params;
	return res.status(200).send({ message: `Hello ${name}!!!` });
}
router.route('/helloworld/:name').get(helloworld);

export default router;
