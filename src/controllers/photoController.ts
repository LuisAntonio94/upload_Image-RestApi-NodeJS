import { Request, Response } from 'express';

export function helloworld(req: Request, res: Response): Response {
    const name = req.params.name;
    return res.status(200).send({message:`Hello ${name}!!!`});
}

export function getPhotos(req:Request, res:Response): Response {
    return res.json({message:'Lista de Fotos!'})
}

export function savePhoto(req: Request, res: Response): Response {
    console.log(req.body);
    console.log(req.file);

    const { title, description } = req.body;

    const newPhoto = {
        title,
        description,
        imagePath: req.file.path
    }
    console.log(newPhoto);

    return res.json({
        message:'Foto subida con exito!'
    });
}