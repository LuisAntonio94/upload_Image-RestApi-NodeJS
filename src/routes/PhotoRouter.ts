import { Router } from 'express';
import { getPhotos, savePhoto } from '../controllers/PhotoController';
import multer from '../config/Multer';

const router = Router();

// Endpoints
router.get('/', getPhotos);
router.post('/', multer.single('image'), savePhoto);

export default router;
