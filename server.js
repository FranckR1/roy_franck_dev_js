import express from 'express';
import 'dotenv/config.js';
import './db/db.js';

const app = express();

const PORT = 3000;

import countrieRoute from './routes/countriesRoutes.js';
import {getPool} from "./db/db.js";

app.use(express.json());

app.use('/countries', countrieRoute);

try {
    const pool = getPool();
    const rows = await pool.query('SELECT * FROM etudiant');
    console.log(rows);
} catch (error) {
    console.error(error);
}

app.listen(PORT, () =>{
    console.log(`listenning on port ${PORT}`);
});
