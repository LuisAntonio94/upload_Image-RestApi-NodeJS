import { Router } from 'express';
import { helloworld, getPhotos, savePhoto } from '../controllers/photoController';
// const multer = require('../config/multer');
import multer from '../config/multer';

const router = Router();

// Endpoints
router.route('/helloworld/:name').get(helloworld); // Prueba

router.route('/photo').get(getPhotos).post(multer.single('image'), savePhoto);

router.route('/photo').get();

export default router;
