import countries from '../data/countries.json' assert  { type: 'json' };

const getAllCountries = () => {
    return countries;
}

const getNormalCountries = () => {
    return countries.map(countrie => {
        
        return {
            name: countrie.name.common,
            cca2: countrie.cca2,
            cca3: countrie.cca3,
            currencies: countrie.currencies,
            languages: countrie.languages,
            flag: countrie.flag,
            capital: countrie.capital,
            population: countrie.population,
            continent: countrie.continents,
        };
    });
}

const getShortCountries = () => {
      return countries.map(countrie => {

        return {
            name: countrie.name.common,
            cca2: countrie.cca2,
            cca3: countrie.cca3,
            flag: countrie.flag,
        }
      });
}
   

const getCountriesById = (id) => {
    const countrieId = countries.find(countrie => countrie.ccn3 === id);
    return countrieId;
}

export default {
    getAllCountries,
    getNormalCountries,
    getShortCountries,
    getCountriesById,
}
