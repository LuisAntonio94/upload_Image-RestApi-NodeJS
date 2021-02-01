import { Request, Response } from 'express';

export function helloworld(req: Request, res: Response): Response {
    return res.status(200).send({message:'Hello World!!!'});
}