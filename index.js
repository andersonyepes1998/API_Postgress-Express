import 'dotenv/config'
import express from 'express';
import todoRouter from './routes/todo.route.js';

const app = express();

app.use(express.json());
app.use('/api/todos', todoRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Servidor andando en el puerto ' + PORT);
});