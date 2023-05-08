const City = require("../models/City")
const Testimonial = require("../models/Testimonial")


exports.citiesAllGetController = (req , res , next ) => {

    var perPage = 48
    page = Math.max(0, Number(req.query.page))

  City.find()
    .limit(perPage)
    .skip(perPage * page)
    // .sort({
    //     city: 'asc'
    // })
    .exec(function(err, cities) {
        City.countDocuments().exec(function(err, count) {

            res.status(200).send({
                cities,
                page,
                pages: Math.floor(count / perPage)
            })
        })
    })
 }

// http://localhost:8081/city/allCities?page=84


exports.citiesAllPostController = (req , res , next ) => {

    let reqBody = req.body
    console.log(reqBody);
    var perPage = 48
    page = Math.max(0, Number(req.query.page))

  City.find(
      {
    "$and": [
                { internetSpeed : { $gt : reqBody.internet.low , $lt : reqBody.internet.high }} ,
                { crimeIndex : { $gt : reqBody.crimeIndex.low , $lt : reqBody.crimeIndex.high }} ,
                { population : { $gt : reqBody.population.low , $lt : reqBody.population.high }} ,
                { safetyIndex : { $gt : reqBody.safetyIndex.low , $lt : reqBody.safetyIndex.high }} ,
                { monthlyCostOfLiving : { $gt : reqBody.monthlyCostOfLiving.low , $lt : reqBody.monthlyCostOfLiving.high }} ,
            ]}
            )
    .limit(perPage)
    .skip(perPage * page)
    .exec(function(err, cities) {
        City.countDocuments().exec(function(err, count) {

            res.status(200).send({
                cities,
                page,
                pages: Math.floor(count / perPage)
            })
        })
    })
 }


 exports.cityByIdGetController = (req , res , next ) => {

    City.findOne({ objectID: req.query.objectID })
            .exec(function(err, city) {
                    res.status(200).send({cityName : city})
        })
 }

 // http://localhost:8081/city/cityById?objectID='xtk1PSBCP3ShMbfinksh'




 exports.cityByNameGetController = (req , res , next ) => {

    City.findOne({ cityLower: req.query.city.toLowerCase() })
            .exec(function(err, city) {
                    res.status(200).send({cityName : city})
        })
}

 // http://localhost:8081/city/cityByName?city=Berlin



 exports.searchCityGetController = (req , res , next ) => {

    // if(req.query.city.length === 0) res.status(200).send({city:[]}) 

    City.find({ cityLower: { $regex :  req.query.city.toLowerCase() ,  $options: "i" } })
            .limit(5)
            .exec(function(err, city) {
                    res.status(200).send({city})
        })
}

 // http://localhost:8081/city/searchCity?city=sdf



exports.compareCityGetController = (req , res , next ) => {

    City.findOne({ cityLower: req.query.from.toLowerCase() })
        .exec(function(err, fromCity) { 
            City.findOne({ cityLower: req.query.to.toLowerCase() })
                .exec(function(err, toCity) { 
                    res.status(200).send({ fromCity , toCity })
                })
         })

}
// http://localhost:8081/city/compareCity?from=dhaka&to=Berlin



exports.findCityPostConreoller = (req , res , next ) => {

    const reqBody = req.body

    console.log(reqBody.internet.low);
   const a =  
    {
        population: {
            low : 13000,
            high : 35770000
        },
        internet: {
            low : 3,
            high : 128
        },
        crimeIndex: {
            low : 14,
            high : 85
        },
        monthlyCostOfLiving: {
            low : 550,
            high : 6850
        },

        safetyIndex: {
            low : 16,
            high : 87
        }
    }

    City.find({
        "$and": [
                    { internetSpeed : { $gt : reqBody.internet.low , $lt : reqBody.internet.high }} ,
                    { crimeIndex : { $gt : reqBody.crimeIndex.low , $lt : reqBody.crimeIndex.high }} ,
                    { population : { $gt : reqBody.population.low , $lt : reqBody.population.high }} ,
                    { safetyIndex : { $gt : reqBody.safetyIndex.low , $lt : reqBody.safetyIndex.high }} ,
                    { monthlyCostOfLiving : { $gt : reqBody.monthlyCostOfLiving.low , $lt : reqBody.monthlyCostOfLiving.high }} ,
                ]})
            .exec(function(err, city) {
                    res.status(200).send({cityName : city})
        })
 }



 // http://localhost:8081/city/findCity

//  population Low - 13000 , heigherLimit - 35770000
//  internet Low - 3 , heigherLimit - 128
//  crimeIndex  Low - 14 , heigherLimit - 85
//  safetyIndex  Low - 16 , heigherLimit - 87
//  monthlyCostOfLiving  Low - 550 , heigherLimit - 6850