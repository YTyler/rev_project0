import express from 'express';
import BaseRouter from './routes/index';

//configure express
const app = express();
app.use(express.json())
app.use('/', BaseRouter);

//Start Server
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});