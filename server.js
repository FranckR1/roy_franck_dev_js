const express = require ('express');

const app = express();

const PORT = 3000;

const countries = require('./countries.json');

app.get('/countries', (req, res) => {
    res.send(countries)
})

app.get('/countries/low', (req, res) => {
    const filter = countries.map(countrie => ({
        name: countrie.name.common,
        cca2: countrie.cca2,
        cca3: countrie.cca3,
        currencies: countrie.currencies,
        languages: countrie.languages,
        flag: countrie.flag,
        capital: countrie.capital,
        population: countrie.population,
        continent: countrie.continents,
    }));

    res.send(filter)
})

app.get('/countries/short', (req, res) => {
    const filter = countries.map(countrie => ({
        name: countrie.name.common,
        cca2: countrie.cca2,
        cca3: countrie.cca3,
        flag: countrie.flag,
    }));

    res.send(filter)
})

app.get('/countries/:id', (req, res) => {
    const id = req.params.id;
    const country = countries.find(countrie => countrie.ccn3 === id);
    res.send(country);
})

app.listen(PORT, () =>{
    console.log(`listenning on port ${PORT}`);
});