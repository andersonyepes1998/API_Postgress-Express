import 'dotenv/config'
import express from 'express';
import todoRouter from './routes/todo.routes.js';
// import cors from 'cors';

const app = express();

// const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2]

// app.use(cors({
//     origin: function(origin, callback){
//         if(!origin || whiteList.includes(origin)){
//             return callback(null, origin);
//         }
//         return callback(
//             'Error de Cors origin' + origin + ' No autorizado!' 
//         );
//     },
//     credentials: true,
// }));

app.use(express.json());
app.use('/api/todos', todoRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Servidor andando en el puerto ' + PORT);
});