import { Request, Response } from 'express';
import DieDao from '../daos/DieDao'

const dieDao = new DieDao(); //Instantiate dice dao 'data access object'

//TODO GET all the dice from the table
export async function getDice(req: Request, res: Response) {
    const dice = await dieDao.getAll();
    return res.status(200).json({dice});
}

//GET a die from the table by id
export async function getDie(req: Request, res: Response) {
    const id = parseInt(req.params.id); 
    const die = await dieDao.getOne(id);
    console.log(die);
    return res.status(200).json({die});
}
//POST a die to the table
export async function addDie(req: Request, res: Response) {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            error: 'Nothing was received',
        });
    }
    await dieDao.add(body);
    return res.status(201).end();
}
//PUT more rolls into a die


//DELETE a die by id
export async function deleteDie(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await dieDao.delete(id);
    return res.status(200).end();
}