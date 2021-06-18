import { Request, Response } from 'express';
import DieDao from '../daos/DieDao'

export async function getAllDice(req: Request, res: Response) {
    const dice = await diceDao.getAll();
    return res.status(200).json({dice});
}