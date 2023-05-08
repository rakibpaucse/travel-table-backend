const router = require('express').Router()

const {
    countriesAllGetController,
    countriesByIdGetController,
    countriesByNameGetController,
} = require ('../controllers/countriesController')

router.get('/allCountries' , countriesAllGetController)
router.get('/countryById' , countriesByIdGetController)
router.get('/countryByName' , countriesByNameGetController)

module.exports = router