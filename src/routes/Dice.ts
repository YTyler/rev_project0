import { Request, Response } from 'express';
import { DieIF } from '../entities/Die';
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
    const die: DieIF = await dieDao.getOne(id);
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
//PUT info into a die
export async function updateDie(req: Request, res: Response) {
//     //TODO
//     const body:DieIF = req.body;
//     if (!body) {
//         return res.status(400).json({
//             error: 'Nothing was received',
//         });
//     }
//     const die = await dieDao.getOne(body.id);
//     //TODO
//     await dieDao.updateOne(body);
//     return res.status(200).end();
}

//DELETE a die by id
export async function deleteDie(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await dieDao.delete(id);
    return res.status(200).end();
}