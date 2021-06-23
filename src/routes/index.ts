//ROUTE INDEX
import { Router } from 'express';
import { getDice, getDie, addDie, updateDie, deleteDie } from './Dice';
import { getUser, addUser, deleteUser } from './Users'

//Dice routes
const diceRouter = Router();
diceRouter.get('/all', getDice);
diceRouter.get('/:id', getDie);
diceRouter.post('/', addDie);
diceRouter.put('/', updateDie);
diceRouter.delete('/:id', deleteDie)

//User routes
const userRouter = Router();
userRouter.get('/:id', getUser);
userRouter.post('/', addUser);
//INSERT UPDATE ROUTE
userRouter.delete('/:id', deleteUser)

//baseRouter export
const baseRouter = Router();
baseRouter.use('/dice', diceRouter);
baseRouter.use('/user', userRouter);
export default baseRouter;