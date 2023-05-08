const {Schema , model} = require('mongoose')
const mongoose = require('mongoose');

const citySchema = new Schema({
    capital : String,
    currency : String,
    image : String,
    country : String,
    city_ascii : String,
    admin_name : String,
    iso2 : String,
    iso3 : String,
    capital : String,
    cityLower : String,
    admin_name_ascii : String,
    slug : String,
    imageThumb : String,
    objectID : String,
    netVotes: Number,
    population: Number,
    upvotes: Number,
    id: Number,
    downvotes: Number,
    rank: Number,
    airbnbDataId: Number,
    internetSpeed: Number,
    gmtOffset: mongoose.Types.Decimal128,
    crimeIndex: mongoose.Types.Decimal128,
    safetyIndex: mongoose.Types.Decimal128,
    co2EmissionIndex: mongoose.Types.Decimal128,
    healthCareIndex: mongoose.Types.Decimal128,
    pollutionIndex: mongoose.Types.Decimal128,
    propertyAffordabilityIndex: mongoose.Types.Decimal128,
    trafficIndex: mongoose.Types.Decimal128,
    trafficTimeIndexMinutes: mongoose.Types.Decimal128,
    lng:mongoose.Types.Decimal128,
    lat:mongoose.Types.Decimal128,
    _highlightResult:{
        city_ascii:{
            value:String,
            matchLevel:String,
            matchedWords : []
        },
        country:{
            value:String,
            matchLevel:String,
            matchedWords : []
        },
        city:{
            value:String,
            matchLevel:String,
            matchedWords : []
        },
        population:{
            value:String,
            matchLevel:String,
            matchedWords : []
        },
        admin_name:{
            value:String,
            matchLevel:String,
            matchedWords : []
        }
    }
 })

const City = model('City' , citySchema)

 module.exports = City;