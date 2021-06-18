import { Router } from 'express';
import { diceRouter } from './Dice';

//Dice route
const diceRouter = Router();
diceRouter.get('/all', getAllDice);

//baseRouter export
const baseRouter = Router();
baseRouter.use('/Dice', diceRouter);
export default baseRouter;