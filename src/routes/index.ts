import { Router } from 'express';
import { getAllDice, getOneDie } from './Dice';

//Dice route
const diceRouter = Router();
diceRouter.get('/all', getAllDice);
diceRouter.get('/:id', getOneDie)

//baseRouter export
const baseRouter = Router();
baseRouter.use('/Dice', diceRouter);
export default baseRouter;