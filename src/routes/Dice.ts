import { Request, Response } from 'express';
import DieDao from '../daos/DieDao'

const dieDao = new DieDao(); //Instantiate dice dao 'data access object'

export async function getDice(req: Request, res: Response) {
    const dice = await dieDao.getAll();
    return res.status(200).json({dice});
}

export async function getDie(req: Request, res: Response) {
    const id = parseInt(req.params.id); 
    const die = await dieDao.getOne(id);
    console.log(die);
    
    return res.status(200).json({die});
}

export async function addDie(req: Request, res: Response) {
    const die = req.body;
    if (!die) {
        return res.status(400).json({
            error: 'Nothing was sent',
        });
    }
    await dieDao.add(die);
    return res.status(201).end();
}

// export async function updateDie(req: Request, res: Response) {
//     const id = params.id
//     const die = req.body;
//     if (!die) {
//         return res.status(400).json({
//             error: 'Nothing was sent,
//         });
//     }
//     await dieDao.update(id, die);
//     return res.status(200).end();
// }

export async function deleteDie(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await dieDao.delete(id);
    return res.status(200).end();
}  