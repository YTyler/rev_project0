import { Request, Response } from 'express';
import DieDao from '../daos/DieDao'

const dieDao = new DieDao(); //Instantiate dice dao 'data access object'

export async function getDice(req: Request, res: Response) {
    const dice = await dieDao.getAll();
    return res.status(200).json({dice});
}

export async function getDie(req: Request, res: Response) {
    const id = req.params.id; 
    const die = await dieDao.getOne(id);
    return res.status(200).json({die});
}

export async function addDie(req: Request, res: Response) {
    const die = req.body;
    if (!die) {
        return res.status(400).json({
            error: 'One or more of the required parameters was missing.',
        });
    }
    await dieDao.add(die);
    return res.status(201).end();
}

