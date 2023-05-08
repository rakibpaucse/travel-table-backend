const router = require('express').Router()

const {
    citiesAllGetController,
    cityByIdGetController,
    cityByNameGetController,
    compareCityGetController,
    searchCityGetController,
    findCityPostConreoller,
    citiesAllPostController
} = require ('../controllers/citiesController')

router.get('/allCities' , citiesAllGetController)
router.get('/cityById' , cityByIdGetController)
router.get('/cityByName' , cityByNameGetController)
router.get('/searchCity' , searchCityGetController)

router.get('/compareCity' , compareCityGetController)

router.post('/allCities' , citiesAllPostController)
router.post('/findCity' , findCityPostConreoller)

module.exports = router