import { Request, Response } from 'express';

export function getPhotos(res: Response): Response {
	return res.json({ message: 'Lista de Fotos!' });
}

export function savePhoto(req: Request, res: Response): Response {
	console.log(req.body);
	console.log(req.file);

	const { title, description } = req.body;

	const newPhoto = {
		title,
		description,
		imagePath: req.file.path,
	};
	console.log(newPhoto);

	return res.json({
		message: 'Foto subida con exito!',
	});
}
