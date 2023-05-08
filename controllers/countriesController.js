const Country = require("../models/Country")

exports.countriesAllGetController = (req , res , next ) => {

    var perPage = 6
    page = Math.max(0, Number(req.query.page))

    Country.find()
    .limit(perPage)
    .skip(perPage * page)
    .sort({ 
        name: 'asc'
    })
    .exec(function(err, countries) {
        Country.countDocuments().exec(function(err, count) {

            res.status(200).send({
                countries,
                page,
                pages: Math.floor(count / perPage)
            })
        })
    })
 }

// http://localhost:8081/country/allCountries?page=4

exports.countriesByIdGetController = (req , res , next ) => {

    Country.findOne({ objectID: req.query.objectID })
            .exec(function(err, country) {
                    res.status(200).send({countryName : country})
        })
}

// http://localhost:8081/country/countryById?objectID=Albania

exports.countriesByNameGetController = (req , res , next ) => {

    Country.findOne({ slug : req.query.name.toLowerCase() })
            .exec(function(err, country) {
                    res.status(200).send({countryName : country})
        })
}
// http://localhost:8081/country/countryByName?name=Albania