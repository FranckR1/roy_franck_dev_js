import express from 'express';

const app = express();

const PORT = 3000;

import countrieRoute from './routes/countriesRoutes.js';

app.use(express.json());

app.use('/countries', countrieRoute);

app.listen(PORT, () =>{
    console.log(`listenning on port ${PORT}`);
});
