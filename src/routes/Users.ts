import { Request, Response } from 'express';
import UserDao from '../daos/UserDao';

const userDao = new UserDao(); //Instantiate user dao 'data access object'

export async function getUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const user = await userDao.getOne(id);
    console.log(user);
    return res.status(200).json({ user });
}

export async function addUser(req: Request, res: Response) {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            error: 'Nothing was received',
        });
    }
    await userDao.add(body);
    return res.status(201).end();
}

export async function deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await userDao.delete(id);
    return res.status(200).end();
}