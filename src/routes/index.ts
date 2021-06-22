import { Router } from 'express';
import { getDice, getDie, addDie, deleteDie } from './Dice';

//Dice route
const diceRouter = Router();
diceRouter.get('/all', getDice);
diceRouter.get('/:id', getDie);
diceRouter.post('/', addDie);
// diceRouter.put('/:id', updateDie)
diceRouter.delete('/:id', deleteDie)

//baseRouter export
const baseRouter = Router();
baseRouter.use('/dice', diceRouter);
export default baseRouter;