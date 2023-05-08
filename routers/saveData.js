const router = require('express').Router()
// const axios = require('axios')
const City = require('../models/City')
var fs = require('fs');

router.get('/nomad', async(req , res) => { 

//    let response = await axios.post('https://fkot8no3u2-2.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia for JavaScript (4.5.1); Browser (lite); JS Helper (3.1.2); react (16.13.1); react-instantsearch (6.7.0)&x-algolia-api-key=388aae6971ea73a3b18ae97d723cda9b&x-algolia-application-id=FKOT8NO3U2', {"requests":[{"indexName":"cities","params":"highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&query=&maxValuesPerFacet=50&hitsPerPage=24&page=2&facets=%5B%22monthlyCostOfLiving%22%2C%22internetSpeed%22%2C%22gmtOffset%22%2C%22pollutionIndex%22%2C%22trafficIndex%22%2C%22trafficTimeIndexMinutes%22%2C%22population%22%2C%22crimeIndex%22%2C%22safetyIndex%22%2C%22co2EmissionIndex%22%2C%22healthCareIndex%22%2C%22propertyAffordabilityIndex%22%5D&tagFilters="}]})
   // let response = await axios.post('https://fkot8no3u2-2.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia for JavaScript (4.5.1); Browser (lite); JS Helper (3.1.2); react (16.13.1); react-instantsearch (6.7.0)&x-algolia-api-key=388aae6971ea73a3b18ae97d723cda9b&x-algolia-application-id=FKOT8NO3U2', {"requests":[{"indexName":"cities","params":"highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&query=&maxValuesPerFacet=50&hitsPerPage=1000&page=0&facets=%5B%22monthlyCostOfLiving%22%2C%22internetSpeed%22%2C%22gmtOffset%22%2C%22pollutionIndex%22%2C%22trafficIndex%22%2C%22trafficTimeIndexMinutes%22%2C%22population%22%2C%22crimeIndex%22%2C%22safetyIndex%22%2C%22co2EmissionIndex%22%2C%22healthCareIndex%22%2C%22propertyAffordabilityIndex%22%5D&tagFilters="}]})
//    let response = await axios.get('http://localhost:8081/cities')

   fs.writeFile('citiesssssss.json', JSON.stringify(response.data.results[0].hits) , 'utf8', (err , data) => err && console.log(err));


    res.json({ msg: response.data.results[0].hits})
})



module.exports = router 