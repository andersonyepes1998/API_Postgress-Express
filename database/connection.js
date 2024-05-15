import 'dotenv/config'
import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    //sirve para conectar la base datos con y volver a cerrarla de una...
    allowExitOnIdle: true,
});

try {
    await pool.query('SELECT NOW()');
    console.log('base de datos conectada');
} catch (error) {
    console.log(error);
}