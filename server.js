const express = require ('express');

const app = express();

const PORT = 3000;

const countries = require('./countries.json');

app.get('/countries', (req, res) => {
    res.send(countries)
})

app.listen(PORT, () =>{
    console.log(`listenning on port ${PORT}`);
});