import { pool } from '../database/connection.js';

const findAll = async () => {
    const {rows} = await pool.query('SELECT * FROM todos');
    return rows
}

const create = async (title) => {
    // Siempre tiene que ir los parentesis para poder que no le salga un error de sintaxis 
    const query = 'INSERT INTO todos (title) VALUES ($1) RETURNING *'
    const {rows} = await pool.query(query, [title]);

    return rows[0]
}

const updateTodos = async (title, id) => {
    const query = 'UPDATE todos SET title = $1 WHERE id = $2 RETURNING *';
    const {rows} = await pool.query(query, [title, id]);

    return rows[0];
}

const deleteTodo = async (id) => {
   try {
        const query = 'DELETE FROM todos WHERE id = $1 RETURNING *';
        const {rows} = await pool.query(query, [id]);

        if (rows.length === 0) {
            return null; // No se encontró ninguna fila para eliminar
        }

        return rows[0]; // Retorna la fila eliminada
   } catch (error) {
        console.log('error en servidor en la parte de aqui' , error);
   }
}

export const todoModel = {
    findAll,
    create,
    updateTodos,
    deleteTodo
}