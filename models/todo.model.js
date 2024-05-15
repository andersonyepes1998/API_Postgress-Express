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

export const todoModel = {
    findAll,
    create
}