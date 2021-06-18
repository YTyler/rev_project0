import { Request, Response } from 'express';
import DieDao from '../daos/DieDao'

const dieDao = new DieDao(); //Instantiate dice dao 'data access object'

export async function getAllDice(req: Request, res: Response) {
    const dice = await dieDao.getAll();
    return res.status(200).json({dice});
}

export async function getOneDie(req: Request, res: Response) {
    const id = req.params.id
    const die = await dieDao.getOne(id);
    return res.status(200).json({die});
}