import express from 'express';
const router = express.Router();
import countrieController from '../controllers/countriesController.js';

router.get('/', countrieController.getAllCountries);
router.get('/normal', countrieController.getNormalCountries);
router.get('/short', countrieController.getShortCountries);
router.get('/:id', countrieController.getCountriesById);

export default router;
