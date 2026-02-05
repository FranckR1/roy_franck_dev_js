import countrieService from '../services/countriesServices.js';

const getAllCountries = (req, res) => {
    try {
        const countries = countrieService.getAllCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

const getNormalCountries = (req, res) => {
    try {
        const countries = countrieService.getNormalCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

const getShortCountries = (req, res) => {
    try {
        const countries = countrieService.getShortCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

const getCountriesById = (req, res) => {
    try {
        const id = req.params.id;
        const countries = countrieService.getCountriesById(id);
        
        if (!countries) {
            return res.status(404).json({ error: 'Pays non trouvé' });
        }
        
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

export default {
    getAllCountries,
    getNormalCountries,
    getShortCountries,
    getCountriesById,
};
